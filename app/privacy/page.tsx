import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { PageTransition } from "@/components/PageTransition";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DEVS KITCHEN handles information on this website and in its products.",
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageTransition>
      <LegalDocument doc={privacyPolicy} />
    </PageTransition>
  );
}
