import type { Metadata } from "next";
import { HomeRouteView } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "BioTransport",
  description: "AI-powered Diabetes Screening using your SmartPhone",
};

export default function HomePage() {
  return <HomeRouteView />;
}
