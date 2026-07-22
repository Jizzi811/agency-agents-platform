/**
 * NVIDIA AI Service for Agent Intelligence
 * Uses NVIDIA's AI Foundation Models for agentic AI workloads
 */

export interface NvidiaAIConfig {
  apiKey: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatCompletionResponse {
  id: string;
  choices: {
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Recommended models for different agent use cases
export const NVIDIA_MODELS = {
  // Fast, efficient for simple tasks
  NEMOTRON_NANO_8B: "nvidia/llama-3.1-nemotron-nano-8b-v1",
  
  // Balanced performance
  NEMOTRON_8B: "nvidia/nemotron-3-8b-chat-4k-sft",
  
  // High quality for complex reasoning
  NEMOTRON_49B: "nvidia/llama-3.3-nemotron-super-49b-v1",
  
  // Best for agentic workflows with reasoning
  NEMOTRON_REASONING: "nvidia/llama-3.1-nemotron-super-49b-v1-reasoning",
  
  // Code-specialized
  CODE_LLAMA: "nvidia/codellama-34b-v2",
  
  // General purpose
  LLAMA_3_70B: "meta/llama-3.3-70b-instruct",
  
  // Embeddings
  EMBEDDINGS: "nvidia/llama-3.2-nv-embedqa-1b-v2",
} as const;

export type NvidiaModel = typeof NVIDIA_MODELS[keyof typeof NVIDIA_MODELS];

// Get appropriate model for agent category
export function getModelForCategory(category: string): NvidiaModel {
  const modelMap: Record<string, NvidiaModel> = {
    engineering: NVIDIA_MODELS.CODE_LLAMA,
    design: NVIDIA_MODELS.NEMOTRON_8B,
    "customer-support": NVIDIA_MODELS.NEMOTRON_NANO_8B,
    sales: NVIDIA_MODELS.NEMOTRON_8B,
    marketing: NVIDIA_MODELS.NEMOTRON_8B,
    product: NVIDIA_MODELS.NEMOTRON_49B,
    finance: NVIDIA_MODELS.NEMOTRON_49B,
    healthcare: NVIDIA_MODELS.NEMOTRON_49B,
    security: NVIDIA_MODELS.NEMOTRON_49B,
    "game-development": NVIDIA_MODELS.NEMOTRON_8B,
    "project-management": NVIDIA_MODELS.NEMOTRON_NANO_8B,
    integrations: NVIDIA_MODELS.NEMOTRON_8B,
    specialized: NVIDIA_MODELS.NEMOTRON_49B,
  };
  
  return modelMap[category.toLowerCase()] || NVIDIA_MODELS.NEMOTRON_8B;
}

export class NvidiaAIService {
  private apiKey: string;
  private baseUrl = "https://integrate.api.nvidia.com/v1";
  private defaultModel: NvidiaModel = NVIDIA_MODELS.NEMOTRON_8B;

  constructor(config: NvidiaAIConfig) {
    this.apiKey = config.apiKey;
    if (config.model) {
      this.defaultModel = config.model as NvidiaModel;
    }
  }

  async chat(messages: ChatMessage[], options?: {
    model?: NvidiaModel;
    temperature?: number;
    maxTokens?: number;
  }): Promise<ChatCompletionResponse> {
    const model = options?.model || this.defaultModel;
    const temperature = options?.temperature ?? 0.7;
    const maxTokens = options?.maxTokens ?? 2048;

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: maxTokens,
        stream: false,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`NVIDIA API Error: ${response.status} - ${error}`);
    }

    return response.json();
  }

  async generateAgentResponse(
    agentContext: {
      name: string;
      category: string;
      capabilities: string[];
    },
    userMessage: string,
    conversationHistory?: ChatMessage[]
  ): Promise<string> {
    const model = getModelForCategory(agentContext.category);
    
    const systemPrompt = `Du bist ${agentContext.name}, ein KI-Assistent spezialisiert auf ${agentContext.category}.
Deine Fähigkeiten umfassen: ${agentContext.capabilities.join(", ")}.
Antworte immer hilfreich, professionell und liefere umsetzbare Empfehlungen.`;

    const messages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...(conversationHistory || []),
      { role: "user", content: userMessage },
    ];

    const response = await this.chat(messages, { model });
    return response.choices[0]?.message?.content || "Entschuldigung, ich konnte diese Anfrage nicht verarbeiten.";
  }

  async generateEmbeddings(text: string): Promise<number[]> {
    const response = await fetch(`${this.baseUrl}/embeddings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: NVIDIA_MODELS.EMBEDDINGS,
        input: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`NVIDIA Embeddings Error: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0]?.embedding || [];
  }
}

// Singleton instance for use across the app
let nvidiaAIInstance: NvidiaAIService | null = null;

export function initNvidiaAI(apiKey: string): NvidiaAIService {
  nvidiaAIInstance = new NvidiaAIService({ apiKey });
  return nvidiaAIInstance;
}

export function getNvidiaAI(): NvidiaAIService | null {
  return nvidiaAIInstance;
}

export default NvidiaAIService;
