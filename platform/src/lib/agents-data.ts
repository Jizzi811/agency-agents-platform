import { Agent, Category } from "@/types";

export const agentsData: Agent[] = [
  // Customer Support (10)
  { id: "1", slug: "support-responder", name: "Support Responder", description: "Intelligent customer support agent that handles inquiries with empathy and accuracy.", category: "customer-support", rating: 4.9, usageCount: 15420, icon: "🎧", isFeatured: true },
  { id: "2", slug: "support-analytics", name: "Support Analytics", description: "Deep analytics and insights for your support operations.", category: "customer-support", rating: 4.7, usageCount: 8930, icon: "📊", isNew: true },
  { id: "3", slug: "ticket-classifier", name: "Ticket Classifier", description: "AI-powered ticket categorization and routing.", category: "customer-support", rating: 4.8, usageCount: 12400, icon: "🎫" },
  { id: "4", slug: "knowledge-base-manager", name: "Knowledge Base Manager", description: "Automatically updates and maintains your knowledge base.", category: "customer-support", rating: 4.6, usageCount: 7800, icon: "📚" },
  { id: "5", slug: "sentiment-analyzer", name: "Sentiment Analyzer", description: "Real-time customer sentiment tracking and alerts.", category: "customer-support", rating: 4.7, usageCount: 5600, icon: "💭" },
  { id: "6", slug: "escalation-manager", name: "Escalation Manager", description: "Smart escalation handling and priority management.", category: "customer-support", rating: 4.5, usageCount: 4500, icon: "⚡" },
  { id: "7", slug: "response-generator", name: "Response Generator", description: "Generates personalized customer responses instantly.", category: "customer-support", rating: 4.9, usageCount: 18200, icon: "✍️" },
  { id: "8", slug: "satisfaction-tracker", name: "Satisfaction Tracker", description: "CSAT monitoring and improvement suggestions.", category: "customer-support", rating: 4.6, usageCount: 6200, icon: "📈" },
  { id: "9", slug: "multi-language-support", name: "Multi-Language Support", description: "24/7 support in 50+ languages.", category: "customer-support", rating: 4.8, usageCount: 9400, icon: "🌍" },
  { id: "10", slug: "chatbot-builder", name: "Chatbot Builder", description: "Build and deploy custom support chatbots.", category: "customer-support", rating: 4.7, usageCount: 7100, icon: "🤖" },

  // Sales (10)
  { id: "11", slug: "sales-engineer", name: "Sales Engineer", description: "Technical sales agent that qualifies leads and demos products.", category: "sales", rating: 4.8, usageCount: 12100, icon: "💼", isNew: true },
  { id: "12", slug: "sales-coach", name: "Sales Coach", description: "AI-powered sales training and coaching agent.", category: "sales", rating: 4.6, usageCount: 6780, icon: "🎓" },
  { id: "13", slug: "outbound-strategist", name: "Outbound Strategist", description: "Strategic agent for outbound campaigns and lead generation.", category: "sales", rating: 4.7, usageCount: 5420, icon: "📞" },
  { id: "14", slug: "lead-qualifier", name: "Lead Qualifier", description: "Automated lead scoring and qualification.", category: "sales", rating: 4.9, usageCount: 15600, icon: "🎯" },
  { id: "15", slug: "deal-closer", name: "Deal Closer", description: "AI-powered closing techniques and negotiation.", category: "sales", rating: 4.8, usageCount: 8900, icon: "🤝" },
  { id: "16", slug: "pipeline-optimizer", name: "Pipeline Optimizer", description: "Sales pipeline analysis and optimization.", category: "sales", rating: 4.7, usageCount: 6300, icon: "📊" },
  { id: "17", slug: "demo-scheduler", name: "Demo Scheduler", description: "Automated demo booking and reminders.", category: "sales", rating: 4.6, usageCount: 4800, icon: "📅" },
  { id: "18", slug: "competitive-analyst", name: "Competitive Analyst", description: "Real-time competitive intelligence.", category: "sales", rating: 4.8, usageCount: 7200, icon: "🔍" },
  { id: "19", slug: "pricing-specialist", name: "Pricing Specialist", description: "Dynamic pricing strategies and quotes.", category: "sales", rating: 4.5, usageCount: 3900, icon: "💲" },
  { id: "20", slug: "territory-manager", name: "Territory Manager", description: "Sales territory planning and allocation.", category: "sales", rating: 4.6, usageCount: 4100, icon: "🗺️" },

  // Engineering (15)
  { id: "21", slug: "code-reviewer", name: "Code Reviewer", description: "Automated code review with security and best practices checks.", category: "engineering", rating: 4.7, usageCount: 23100, icon: "🔍" },
  { id: "22", slug: "frontend-developer", name: "Frontend Developer", description: "Full-stack frontend development agent with modern frameworks.", category: "engineering", rating: 4.8, usageCount: 18700, icon: "🎨" },
  { id: "23", slug: "backend-architect", name: "Backend Architect", description: "Scalable backend architecture and API design specialist.", category: "engineering", rating: 4.9, usageCount: 12300, icon: "🏗️" },
  { id: "24", slug: "devops-automator", name: "DevOps Automator", description: "CI/CD pipelines, infrastructure as code, and deployment automation.", category: "engineering", rating: 4.8, usageCount: 8900, icon: "⚙️", isNew: true },
  { id: "25", slug: "security-auditor", name: "Security Auditor", description: "Comprehensive security vulnerability scanning.", category: "engineering", rating: 4.9, usageCount: 11200, icon: "🔒" },
  { id: "26", slug: "api-designer", name: "API Designer", description: "RESTful and GraphQL API design specialist.", category: "engineering", rating: 4.7, usageCount: 8500, icon: "🔗" },
  { id: "27", slug: "database-optimzer", name: "Database Optimizer", description: "Query optimization and schema design.", category: "engineering", rating: 4.8, usageCount: 7600, icon: "🗄️" },
  { id: "28", slug: "testing-automator", name: "Testing Automator", description: "Automated unit, integration, and E2E testing.", category: "engineering", rating: 4.6, usageCount: 9400, icon: "🧪" },
  { id: "29", slug: "performance-tuner", name: "Performance Tuner", description: "Application performance optimization.", category: "engineering", rating: 4.7, usageCount: 6800, icon: "🚀" },
  { id: "30", slug: "documentation-writer", name: "Documentation Writer", description: "Automated technical documentation generation.", category: "engineering", rating: 4.5, usageCount: 5200, icon: "📝" },
  { id: "31", slug: "refactoring-expert", name: "Refactoring Expert", description: "Code quality improvement and modernization.", category: "engineering", rating: 4.8, usageCount: 6100, icon: "🔧" },
  { id: "32", slug: "cloud-architect", name: "Cloud Architect", description: "Multi-cloud infrastructure design.", category: "engineering", rating: 4.9, usageCount: 8300, icon: "☁️" },
  { id: "33", slug: "microservices-advisor", name: "Microservices Advisor", description: "Service decomposition and orchestration.", category: "engineering", rating: 4.7, usageCount: 5900, icon: "🔗" },
  { id: "34", slug: "debugging-assistant", name: "Debugging Assistant", description: "Intelligent bug detection and fixing.", category: "engineering", rating: 4.8, usageCount: 14500, icon: "🐛" },
  { id: "35", slug: "dependency-manager", name: "Dependency Manager", description: "Library updates and dependency resolution.", category: "engineering", rating: 4.6, usageCount: 4700, icon: "📦" },

  // Design (10)
  { id: "36", slug: "ui-designer", name: "UI Designer", description: "Beautiful, modern UI designs with accessibility in mind.", category: "design", rating: 4.9, usageCount: 11200, icon: "🎨", isNew: true },
  { id: "37", slug: "ux-researcher", name: "UX Researcher", description: "User research synthesis and usability analysis.", category: "design", rating: 4.6, usageCount: 4560, icon: "🔬" },
  { id: "38", slug: "brand-guardian", name: "Brand Guardian", description: "Brand consistency checker and design system enforcer.", category: "design", rating: 4.7, usageCount: 3890, icon: "🛡️" },
  { id: "39", slug: "logo-generator", name: "Logo Generator", description: "AI-powered logo design variations.", category: "design", rating: 4.5, usageCount: 7800, icon: "✏️" },
  { id: "40", slug: "color-palette-creator", name: "Color Palette Creator", description: "Harmonious color scheme generation.", category: "design", rating: 4.6, usageCount: 3400, icon: "🎨" },
  { id: "41", slug: "prototype-builder", name: "Prototype Builder", description: "Interactive prototype creation from descriptions.", category: "design", rating: 4.8, usageCount: 5600, icon: "📱" },
  { id: "42", slug: "icon-collector", name: "Icon Collector", description: "Curated icon suggestions for any context.", category: "design", rating: 4.4, usageCount: 2900, icon: "🖼️" },
  { id: "43", slug: "accessibility-checker", name: "Accessibility Checker", description: "WCAG compliance verification and fixes.", category: "design", rating: 4.7, usageCount: 4200, icon: "♿" },
  { id: "44", slug: "responsive-tester", name: "Responsive Tester", description: "Cross-device design testing.", category: "design", rating: 4.5, usageCount: 3100, icon: "📺" },
  { id: "45", slug: "design-critic", name: "Design Critic", description: "Professional design feedback and improvements.", category: "design", rating: 4.6, usageCount: 3800, icon: "💬" },

  // Marketing (10)
  { id: "46", slug: "content-strategist", name: "Content Strategist", description: "Content planning and calendar optimization.", category: "marketing", rating: 4.8, usageCount: 8900, icon: "📣" },
  { id: "47", slug: "seo-optimizer", name: "SEO Optimizer", description: "Search engine optimization specialist.", category: "marketing", rating: 4.9, usageCount: 12400, icon: "🔍" },
  { id: "48", slug: "social-media-manager", name: "Social Media Manager", description: "Automated social posting and engagement.", category: "marketing", rating: 4.7, usageCount: 7600, icon: "📱" },
  { id: "49", slug: "email-campaign-builder", name: "Email Campaign Builder", description: "High-converting email sequence creator.", category: "marketing", rating: 4.8, usageCount: 10200, icon: "✉️" },
  { id: "50", slug: "copywriting-assistant", name: "Copywriting Assistant", description: "Persuasive copy generation for all channels.", category: "marketing", rating: 4.9, usageCount: 15600, icon: "✍️" },
  { id: "51", slug: "analytics-interpreter", name: "Analytics Interpreter", description: "Marketing data insights and recommendations.", category: "marketing", rating: 4.6, usageCount: 5800, icon: "📊" },
  { id: "52", slug: "campaign-tracker", name: "Campaign Tracker", description: "Multi-channel campaign performance monitoring.", category: "marketing", rating: 4.7, usageCount: 6400, icon: "📈" },
  { id: "53", slug: "audience-segmentor", name: "Audience Segmentor", description: "Customer segmentation and profiling.", category: "marketing", rating: 4.8, usageCount: 7200, icon: "👥" },
  { id: "54", slug: "competitor-monitor", name: "Competitor Monitor", description: "Real-time competitor activity tracking.", category: "marketing", rating: 4.5, usageCount: 4300, icon: "👁️" },
  { id: "55", slug: "trend-spotter", name: "Trend Spotter", description: "Industry trend identification and analysis.", category: "marketing", rating: 4.7, usageCount: 5100, icon: "🔮" },

  // Product (8)
  { id: "56", slug: "roadmap-planner", name: "Roadmap Planner", description: "Product roadmap creation and prioritization.", category: "product", rating: 4.8, usageCount: 6800, icon: "🗺️" },
  { id: "57", slug: "feature-prioritizer", name: "Feature Prioritizer", description: "Data-driven feature prioritization.", category: "product", rating: 4.7, usageCount: 5400, icon: "⭐" },
  { id: "58", slug: "user-story-writer", name: "User Story Writer", description: "Automated user story and acceptance criteria.", category: "product", rating: 4.6, usageCount: 6200, icon: "📖" },
  { id: "59", slug: "prd-generator", name: "PRD Generator", description: "Product requirements document creation.", category: "product", rating: 4.8, usageCount: 4700, icon: "📄" },
  { id: "60", slug: "market-researcher", name: "Market Researcher", description: "Market analysis and opportunity identification.", category: "product", rating: 4.9, usageCount: 8300, icon: "🔬" },
  { id: "61", slug: "competitor-analyzer", name: "Competitor Analyzer", description: "Deep competitor feature comparison.", category: "product", rating: 4.7, usageCount: 5900, icon: "📊" },
  { id: "62", slug: "release-manager", name: "Release Manager", description: "Release planning and coordination.", category: "product", rating: 4.5, usageCount: 3600, icon: "🚀" },
  { id: "63", slug: "feedback-synthesizer", name: "Feedback Synthesizer", description: "Customer feedback aggregation and insights.", category: "product", rating: 4.8, usageCount: 7100, icon: "💬" },

  // Finance (7)
  { id: "64", slug: "financial-analyst", name: "Financial Analyst", description: "Investment analysis, portfolio tracking, and market insights.", category: "finance", rating: 4.6, usageCount: 7890, icon: "💰" },
  { id: "65", slug: "bookkeeper", name: "Bookkeeper", description: "Automated bookkeeping and expense tracking.", category: "finance", rating: 4.8, usageCount: 5430, icon: "📒" },
  { id: "66", slug: "invoice-generator", name: "Invoice Generator", description: "Professional invoice creation and tracking.", category: "finance", rating: 4.7, usageCount: 4200, icon: "📑" },
  { id: "67", slug: "budget-forecaster", name: "Budget Forecaster", description: "AI-powered budget planning and forecasting.", category: "finance", rating: 4.6, usageCount: 3800, icon: "📊" },
  { id: "68", slug: "expense-categorizer", name: "Expense Categorizer", description: "Automatic expense classification and reporting.", category: "finance", rating: 4.5, usageCount: 2900, icon: "🏷️" },
  { id: "69", slug: "invoice-approver", name: "Invoice Approver", description: "Automated invoice review and approval workflow.", category: "finance", rating: 4.7, usageCount: 3400, icon: "✅" },
  { id: "70", slug: "financial-report-generator", name: "Financial Report Generator", description: "Automated financial statement generation.", category: "finance", rating: 4.8, usageCount: 4600, icon: "📈" },

  // Healthcare (5)
  { id: "71", slug: "patient-intake", name: "Patient Intake", description: "Automated patient information collection.", category: "healthcare", rating: 4.9, usageCount: 3200, icon: "🏥" },
  { id: "72", slug: "medical-coder", name: "Medical Coder", description: "ICD-10 and CPT code assignment.", category: "healthcare", rating: 4.8, usageCount: 2800, icon: "💊" },
  { id: "73", slug: "appointment-scheduler", name: "Appointment Scheduler", description: "Intelligent appointment booking and reminders.", category: "healthcare", rating: 4.7, usageCount: 4100, icon: "📅" },
  { id: "74", slug: "symptom-checker", name: "Symptom Checker", description: "Patient symptom triage and guidance.", category: "healthcare", rating: 4.6, usageCount: 5600, icon: "🩺" },
  { id: "75", slug: "healthcare-analyst", name: "Healthcare Analyst", description: "Clinical data analytics and reporting.", category: "healthcare", rating: 4.8, usageCount: 2400, icon: "📊" },

  // Security (5)
  { id: "76", slug: "penetration-tester", name: "Penetration Tester", description: "Automated security vulnerability assessment.", category: "security", rating: 4.9, usageCount: 4800, icon: "🔓" },
  { id: "77", slug: "compliance-monitor", name: "Compliance Monitor", description: "SOC2, HIPAA, GDPR compliance checking.", category: "security", rating: 4.8, usageCount: 3600, icon: "📋" },
  { id: "78", slug: "threat-detector", name: "Threat Detector", description: "Real-time threat detection and alerting.", category: "security", rating: 4.9, usageCount: 5200, icon: "⚠️" },
  { id: "79", slug: "access-manager", name: "Access Manager", description: "Identity and access management automation.", category: "security", rating: 4.7, usageCount: 2900, icon: "🔑" },
  { id: "80", slug: "security-reporter", name: "Security Reporter", description: "Automated security audit report generation.", category: "security", rating: 4.6, usageCount: 2100, icon: "📝" },

  // Game Development (5)
  { id: "81", slug: "game-designer", name: "Game Designer", description: "Game mechanics and level design assistance.", category: "game-development", rating: 4.7, usageCount: 3400, icon: "🎮" },
  { id: "82", slug: "narrative-writer", name: "Narrative Writer", description: "Story writing and dialogue generation.", category: "game-development", rating: 4.8, usageCount: 2800, icon: "📖" },
  { id: "83", slug: "balance-calculator", name: "Balance Calculator", description: "Game balance and difficulty tuning.", category: "game-development", rating: 4.6, usageCount: 1900, icon: "⚖️" },
  { id: "84", slug: "asset-describer", name: "Asset Describer", description: "Game asset specifications and descriptions.", category: "game-development", rating: 4.5, usageCount: 1600, icon: "🖼️" },
  { id: "85", slug: "qa-tester", name: "QA Tester", description: "Automated game testing and bug reporting.", category: "game-development", rating: 4.7, usageCount: 2300, icon: "🧪" },

  // Project Management (5)
  { id: "86", slug: "project-scheduler", name: "Project Scheduler", description: "Timeline and milestone planning.", category: "project-management", rating: 4.8, usageCount: 5400, icon: "📅" },
  { id: "87", slug: "resource-allocator", name: "Resource Allocator", description: "Team workload balancing and optimization.", category: "project-management", rating: 4.7, usageCount: 3800, icon: "👥" },
  { id: "88", slug: "risk-assessor", name: "Risk Assessor", description: "Project risk identification and mitigation.", category: "project-management", rating: 4.6, usageCount: 2900, icon: "⚠️" },
  { id: "89", slug: "standup-summarizer", name: "Standup Summarizer", description: "Daily standup notes and action items.", category: "project-management", rating: 4.5, usageCount: 4200, icon: "📝" },
  { id: "90", slug: "retrospective-facilitator", name: "Retrospective Facilitator", description: "Sprint retrospective organization and insights.", category: "project-management", rating: 4.7, usageCount: 3100, icon: "🔄" },

  // Integrations (5)
  { id: "91", slug: "integration-builder", name: "Integration Builder", description: "API integration design and implementation.", category: "integrations", rating: 4.8, usageCount: 4600, icon: "🔗" },
  { id: "92", slug: "webhook-manager", name: "Webhook Manager", description: "Webhook creation and testing.", category: "integrations", rating: 4.6, usageCount: 2800, icon: "🪝" },
  { id: "93", slug: "data-mapper", name: "Data Mapper", description: "Data transformation and mapping.", category: "integrations", rating: 4.7, usageCount: 3400, icon: "🗺️" },
  { id: "94", slug: "sync-monitor", name: "Sync Monitor", description: "Data synchronization status and alerts.", category: "integrations", rating: 4.5, usageCount: 2200, icon: "🔄" },
  { id: "95", slug: "oauth-helper", name: "OAuth Helper", description: "OAuth integration and token management.", category: "integrations", rating: 4.6, usageCount: 1900, icon: "🔐" },

  // Specialized (5)
  { id: "96", slug: "legal-researcher", name: "Legal Researcher", description: "Case law and legal precedent search.", category: "specialized", rating: 4.8, usageCount: 2800, icon: "⚖️" },
  { id: "97", slug: "contract-generator", name: "Contract Generator", description: "Legal contract template generation.", category: "specialized", rating: 4.9, usageCount: 3200, icon: "📄" },
  { id: "98", slug: "research-assistant", name: "Research Assistant", description: "Academic research and citation management.", category: "specialized", rating: 4.7, usageCount: 4100, icon: "🔬" },
  { id: "99", slug: "data-visualizer", name: "Data Visualizer", description: "Chart and graph recommendations.", category: "specialized", rating: 4.6, usageCount: 5600, icon: "📊" },
  { id: "100", slug: "translation-agent", name: "Translation Agent", description: "Professional translation in 100+ languages.", category: "specialized", rating: 4.8, usageCount: 7800, icon: "🌍" },
];

export const categories: Category[] = [
  { id: "1", name: "Customer Support", slug: "customer-support", icon: "🎧", agentCount: 10 },
  { id: "2", name: "Sales", slug: "sales", icon: "💼", agentCount: 10 },
  { id: "3", name: "Engineering", slug: "engineering", icon: "⚙️", agentCount: 15 },
  { id: "4", name: "Design", slug: "design", icon: "🎨", agentCount: 10 },
  { id: "5", name: "Marketing", slug: "marketing", icon: "📣", agentCount: 10 },
  { id: "6", name: "Product", slug: "product", icon: "📦", agentCount: 8 },
  { id: "7", name: "Finance", slug: "finance", icon: "💰", agentCount: 7 },
  { id: "8", name: "Healthcare", slug: "healthcare", icon: "🏥", agentCount: 5 },
  { id: "9", name: "Security", slug: "security", icon: "🔒", agentCount: 5 },
  { id: "10", name: "Game Development", slug: "game-development", icon: "🎮", agentCount: 5 },
  { id: "11", name: "Project Management", slug: "project-management", icon: "📋", agentCount: 5 },
  { id: "12", name: "Integrations", slug: "integrations", icon: "🔗", agentCount: 5 },
  { id: "13", name: "Specialized", slug: "specialized", icon: "✨", agentCount: 5 },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agentsData.find((agent) => agent.slug === slug);
}

export function getAgentsByCategory(category: string): Agent[] {
  return agentsData.filter((agent) => agent.category.toLowerCase() === category.toLowerCase());
}
