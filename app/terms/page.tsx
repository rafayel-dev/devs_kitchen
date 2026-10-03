import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { PageTransition } from "@/components/PageTransition";
import { termsOfService } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply to your use of the DEVS KITCHEN website.",
  alternates: { canonical: "/terms" },
  openGraph: { url: "/terms" },
};

export default function TermsPage() {
  return (
    <PageTransition>
      <LegalDocument doc={termsOfService} />
    </PageTransition>
  );
}
