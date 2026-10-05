"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import styles from "./InquiryForm.module.css";

const serviceOptions = [...services.map((s) => s.short), "Not sure yet"];
const budgetOptions = ["Under $2,000", "$2,000–$5,000", "$5,000–$15,000", "$15,000+", "Not sure yet"];
const timelineOptions = ["As soon as possible", "Within 1–3 months", "In 3–6 months", "Flexible"];

type Status = "idle" | "sending" | "sent" | "opened-mail" | "error";

/**
 * Project brief form.
 * With a Web3Forms key (data/site.ts) it is delivered straight to the studio inbox.
 * Without one, it opens the visitor's email app with everything filled in — nothing is lost.
 */
export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Honeypot: real people never see this field.
    if (data.botcheck) {
      setStatus("sent");
      return;
    }

    const subject = `Project inquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`;

    if (!site.web3formsKey) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.company && `Company: ${data.company}`,
        `Service: ${data.service || "—"}`,
        `Budget: ${data.budget || "—"}`,
        `Timeline: ${data.timeline || "—"}`,
        "",
        data.message,
      ]
        .filter((line) => line !== undefined && line !== "")
        .join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("opened-mail");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: site.web3formsKey,
          subject,
          from_name: `${site.name} website`,
          replyto: data.email,
          ...data,
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!json.success) throw new Error("Not delivered");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.done} role="status">
        <p className="label">Received</p>
        <p className={styles.doneTitle}>Thank you — your brief is in the kitchen.</p>
        <p className="muted">We will read it and reply to the email address you gave us.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      <div className={styles.row}>
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
      </div>
      <Field label="Company or project" name="company" autoComplete="organization" optional />

      <Choice legend="What do you need?" name="service" options={serviceOptions} />
      <Choice legend="Estimated budget" name="budget" options={budgetOptions} optional />

      <div className={styles.field}>
        <label htmlFor="timeline" className="label muted">
          Timeline <span className={styles.optional}>(optional)</span>
        </label>
        <select id="timeline" name="timeline" className={styles.input} defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {timelineOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message" className="label muted">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${styles.input} ${styles.textarea}`}
          placeholder="What are you building, who is it for, and what should it do?"
        />
      </div>

      <input type="checkbox" name="botcheck" className={styles.honeypot} tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send project brief"}
          <span aria-hidden="true">→</span>
        </button>
        <p className={`muted ${styles.note}`}>
          We use your details only to reply. See our{" "}
          <Link href="/privacy" className="link">
            privacy policy
          </Link>
          .
        </p>
      </div>

      <p className={styles.status} role="status" aria-live="polite">
        {status === "opened-mail" &&
          `Your email app should now be open with the brief filled in — just press send. If nothing opened, write to ${site.email}.`}
        {status === "error" &&
          `Something went wrong and the brief was not sent. Please try again, or email us at ${site.email}.`}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className="label muted">
        {label} {optional && <span className={styles.optional}>(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className={styles.input}
      />
    </div>
  );
}

function Choice({
  legend,
  name,
  options,
  optional,
}: {
  legend: string;
  name: string;
  options: string[];
  optional?: boolean;
}) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className="label muted">
        {legend} {optional && <span className={styles.optional}>(optional)</span>}
      </legend>
      <div className={styles.chips}>
        {options.map((o) => (
          <label key={o} className={styles.chip}>
            <input type="radio" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
