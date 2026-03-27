import type { Metadata } from "next";

import { TryNowRouteView } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Try Now | BioTransport",
  description: "Run the live diabetes screening demo with your own eye image.",
};

export default function TryNowPage() {
  return <TryNowRouteView />;
}
