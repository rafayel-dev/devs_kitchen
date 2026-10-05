/**
 * Legal copy for /privacy and /terms.
 *
 * Written to describe what this website actually does today: no cookies, no analytics,
 * no accounts, and one project inquiry form. If that changes (e.g. you add analytics),
 * update the relevant section. Have the final text reviewed by a qualified professional.
 *
 * Apps can link their own policy via `privacyUrl` in data/products.ts.
 */

import { site } from "./site";

export type LegalSection = {
  id: string;
  heading: string;
  body: (string | { list: string[] })[];
};

export type LegalDocument = {
  title: string;
  intro: string;
  lastUpdated: string; // ISO date
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: "2026-10-05",
  intro: `This policy explains what information ${site.name} handles when you visit this website or contact us, and how our applications are covered.`,
  sections: [
    {
      id: "summary",
      heading: "The short version",
      body: [
        "This website does not use cookies, analytics, advertising trackers or user accounts. If you send us a project brief or an email, we use what you send to reply to you — nothing else.",
      ],
    },
    {
      id: "website",
      heading: "When you visit this website",
      body: [
        "Like any website, ours is served by a hosting provider. To deliver pages and keep the service secure, that provider may automatically process technical information such as your IP address, browser type, the page requested and the time of the request. This information is used for operating and protecting the service, not for profiling or advertising.",
        "Fonts and assets are served from our own domain, so loading this website does not send requests to third-party font or analytics services.",
      ],
    },
    {
      id: "contact",
      heading: "When you contact us",
      body: [
        "Our project inquiry form asks for your name, email address and details about your project, such as the service you need, an estimated budget and a timeline. Fields marked optional can be left empty.",
        "Depending on how the form is set up, your submission is either delivered to our inbox by a form-delivery service (Web3Forms), which processes it only to forward it to us, or opened in your own email app for you to send. If you email us directly, we receive your email address and whatever you choose to write.",
        "We use this information only to respond, to prepare a proposal if you ask for one, and to continue the conversation you started.",
        "We do not sell, rent or share your correspondence with third parties for marketing. We keep messages for as long as they are relevant to the conversation, and you can ask us to delete them at any time.",
      ],
    },
    {
      id: "apps",
      heading: "Our applications",
      body: [
        "This policy covers this website only. Each app we publish — on Google Play, the App Store or the web — has its own privacy policy describing exactly what that app collects and why. It is linked from the app's store listing and from its product page on this website, and is published before the app is released.",
      ],
    },
    {
      id: "rights",
      heading: "Your choices and rights",
      body: [
        "You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it. Email us and we will respond within a reasonable time. Depending on where you live, you may have additional rights under local law.",
      ],
    },
    {
      id: "children",
      heading: "Children",
      body: [
        "This website is not directed at children, and we do not knowingly collect personal information from children. If you believe a child has sent us personal information, contact us and we will delete it.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      body: [
        "If we change how we handle information — for example, by adding analytics — we will update this page and the date at the top before the change takes effect.",
      ],
    },
    {
      id: "contact-us",
      heading: "Contact",
      body: [`Questions about privacy can be sent to ${site.email}.`],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  lastUpdated: "2026-10-05",
  intro: `These terms apply to your use of the ${site.name} website. Individual products may have their own terms, which apply to those products.`,
  sections: [
    {
      id: "acceptance",
      heading: "Using this website",
      body: [
        "By using this website you agree to these terms. If you do not agree, please do not use the website.",
      ],
    },
    {
      id: "content",
      heading: "Content and intellectual property",
      body: [
        `The text, design, graphics, logos and code that make up this website belong to ${site.name} unless stated otherwise. You may view and share pages for personal, non-commercial purposes. You may not copy, modify or republish substantial parts of the website without our written permission.`,
        "Third-party names and trademarks, including the names of app stores and technologies, belong to their respective owners.",
      ],
    },
    {
      id: "client-work",
      heading: "Client projects",
      body: [
        "Information about our services on this website is a general description, not an offer. Every client project is governed by its own written proposal or agreement, which sets out the scope, timeline, cost and ownership of the work. Where that agreement and these terms differ, the agreement applies.",
      ],
    },
    {
      id: "products",
      heading: "Our products",
      body: [
        "Information about our products is provided for general information and may change as products develop. Products distributed through app stores are also subject to the terms of that store. Where a product has its own terms, they take precedence for that product.",
      ],
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      body: [
        "Please do not:",
        {
          list: [
            "attempt to disrupt, overload or gain unauthorised access to the website or its infrastructure;",
            "use automated means to scrape the website in a way that degrades it for others;",
            "use the website for any unlawful purpose.",
          ],
        },
      ],
    },
    {
      id: "links",
      heading: "External links",
      body: [
        "This website links to third-party services such as app stores. We are not responsible for the content or practices of those services.",
      ],
    },
    {
      id: "warranty",
      heading: "No warranty",
      body: [
        'The website is provided "as is". We work to keep it accurate and available, but we do not guarantee that it will be error-free or uninterrupted.',
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      body: [
        `To the extent permitted by law, ${site.name} is not liable for any indirect or consequential loss arising from your use of this website.`,
      ],
    },
    {
      id: "law",
      heading: "Governing law",
      body: [
        `These terms are governed by the laws of ${site.location.country}, without affecting any rights you have under the laws of the country where you live.`,
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      body: [
        "We may update these terms from time to time. The date at the top of this page shows when they last changed.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: [`Questions about these terms can be sent to ${site.email}.`],
    },
  ],
};
