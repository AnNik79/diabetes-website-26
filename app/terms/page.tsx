import type { Metadata } from "next";

import { TermsRouteView } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Terms & Privacy | BioTransport",
  description:
    "Review BioTransport screening terms, privacy handling, and medical disclaimer.",
};

export default function TermsPage() {
  return <TermsRouteView />;
}
