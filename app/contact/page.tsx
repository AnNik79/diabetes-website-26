import type { Metadata } from "next";
import { ContactRouteView } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Contact | BioTransport",
  description: "Connect with BioTransport for screening support and questions.",
};

export default function ContactPage() {
  return <ContactRouteView />;
}
