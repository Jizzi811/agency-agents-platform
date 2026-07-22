import { agentsData } from "@/lib/agents-data";
import AgentDetailClient from "./agent-detail-client";

export function generateStaticParams() {
  return agentsData.map((agent) => ({
    slug: agent.slug,
  }));
}

export default async function AgentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <AgentDetailClient params={params} />;
}
