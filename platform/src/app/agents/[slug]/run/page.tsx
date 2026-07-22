import { agentsData } from "@/lib/agents-data";
import AgentRunClient from "./agent-run-client";

export function generateStaticParams() {
  return agentsData.map((agent) => ({
    slug: agent.slug,
  }));
}

export default async function AgentRunPage({ params }: { params: Promise<{ slug: string }> }) {
  return <AgentRunClient params={params} />;
}
