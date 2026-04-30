import type { Metadata } from "next";
import { BlogsRouteView } from "@/components/site-pages";

export const metadata: Metadata = {
  title: "Blogs | BioTransport",
  description:
    "Articles and outside coverage about BioTransportAI screening tools and early detection work.",
};

export default function BlogsPage() {
  return <BlogsRouteView />;
}
