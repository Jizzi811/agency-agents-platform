"use client";

import { use, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, Send, Paperclip, Brain, Settings, 
  X, Upload, FileText, Bot, User, Sparkles,
  Loader2, Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAgentBySlug } from "@/lib/agents-data";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Agent-specific welcome messages in German
const agentWelcomeMessages: Record<string, string> = {
  "support-responder": "Hallo! 👋 Ich bin Ihr KI-Kundenservice-Assistent. Ich helfe Ihnen gerne bei Fragen zu Produkten, Bestellungen oder allgemeinen Anliegen. Was kann ich für Sie tun?",
  "ticket-classifier": "Willkommen beim Ticket-Klassifizierer! 📝 Geben Sie mir ein Support-Ticket oder eine Problembeschreibung, und ich ordne es der richtigen Kategorie und Priorität zu.",
  "code-reviewer": "Hallo! Ich bin Ihr Code-Reviewer 🤖 Analysieren wir Ihren Code zusammen! Fügen Sie Ihren Code ein, und ich gebe Ihnen detailliertes Feedback zu Qualität, Sicherheit und Best Practices.",
  "sales-engineer": "Willkommen! Ich bin Ihr technischer Vertriebspartner 💼 Um Ihnen die besten Lösungen vorzuschlagen, erzählen Sie mir von Ihren Anforderungen!",
  "financial-analyst": "Guten Tag! Ich bin Ihr Finanzanalyst 📊 Teilen Sie mir Ihre Finanzdaten oder Fragestellungen mit, und ich analysiere sie für Sie.",
  "seo-optimizer": "SEO optimieren? Ich helfe Ihnen! 🔍 Geben Sie mir Ihre Website-URL oder Keywords, und ich erstelle eine Optimierungsstrategie.",
  "content-strategist": "Content-Marketing? Gerne! ✍️ Erzählen Sie mir von Ihrem Thema oder Ihrer Branche, und ich entwickle eine Content-Strategie für Sie.",
  "project-scheduler": "Projekt planen? Ich bin Ihr Projektmanager! 📅 Beschreiben Sie Ihr Projekt, und ich erstelle einen detaillierten Zeitplan mit Meilensteinen.",
  "contract-generator": "Willkommen beim Vertragsgenerator! 📄 Beschreiben Sie, welchen Vertrag Sie benötigen, und ich erstelle einen Entwurf für Sie.",
  "default": "Hallo! 👋 Ich bin Ihr KI-Assistent. Stellen Sie mir eine Frage, und ich helfe Ihnen so gut wie möglich!"
};

export default function AgentRunPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const agent = getAgentBySlug(slug);
  
  const getWelcomeMessage = () => {
    return agentWelcomeMessages[slug] || agentWelcomeMessages.default;
  };

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: getWelcomeMessage(),
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showKnowledgePanel, setShowKnowledgePanel] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [activeModel, setActiveModel] = useState<string>("NVIDIA Nemotron-8B");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Get all messages for context
      const conversationHistory = messages.map(m => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content
      }));

      // Call our API route
      const response = await fetch("/api/agent-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentSlug: slug,
          messages: conversationHistory,
          apiKey: process.env.NEXT_PUBLIC_NVIDIA_API_KEY || "demo"
        }),
      });

      const data = await response.json();
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "Entschuldigung, es ist ein Fehler aufgetreten.",
        timestamp: new Date(),
      };

      if (data.model) {
        setActiveModel(data.model.replace("nvidia/", "").replace("-chat-4k-sft", "").replace("-v1", ""));
      }

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Entschuldigung, es ist ein Fehler bei der Verbindung zum KI-Service aufgetreten.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container-custom max-w-6xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link 
              href={`/agents/${slug}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-display text-xl font-semibold">{agent?.name || "KI-Assistent"}</h1>
              <div className="flex items-center gap-2">
                <Badge variant="ai-powered" className="text-xs">AI Powered</Badge>
                <span className="text-xs text-white/40 flex items-center gap-1">
                  <Zap className="w-3 h-3" /> {activeModel}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowKnowledgePanel(!showKnowledgePanel)}
              className="gap-2"
            >
              <Brain className="w-4 h-4" />
              Wissen
              {files.length > 0 && (
                <Badge variant="primary" className="ml-1">{files.length}</Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <Card className="flex flex-col h-[calc(100vh-200px)]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-start gap-3 ${
                        message.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === "user" 
                          ? "bg-primary/20 text-primary-light" 
                          : "bg-secondary/20 text-secondary-light"
                      }`}>
                        {message.role === "user" ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
                        message.role === "user"
                          ? "bg-primary/20 text-white"
                          : "bg-white/5 text-white/90"
                      }`}>
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-secondary/20 text-secondary-light flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white/5 rounded-2xl px-4 py-3">
                      <div className="flex items-center gap-2 text-white/60">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Denke nach...
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/5">
                {files.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {files.map((file, index) => (
                      <Badge key={index} variant="default" className="gap-1">
                        <FileText className="w-3 h-3" />
                        {file.name}
                        <button 
                          onClick={() => setFiles(files.filter((_, i) => i !== index))}
                          className="ml-1 hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <div className="flex-1">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Nachricht eingeben..."
                      className="w-full"
                    />
                  </div>
                  <Button 
                    onClick={handleSend} 
                    disabled={!input.trim() || isLoading}
                    className="shrink-0"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-white/40 mt-2 text-center">
                  Enter zum Senden, Shift+Enter für neue Zeile
                </p>
              </div>
            </Card>
          </div>

          {/* Knowledge Panel */}
          <div className="lg:col-span-1">
            <AnimatePresence>
              {showKnowledgePanel && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-semibold flex items-center gap-2">
                        <Brain className="w-5 h-5 text-primary-light" />
                        Wissensdatenbank
                      </h3>
                      <button 
                        onClick={() => setShowKnowledgePanel(false)}
                        className="text-white/40 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    {/* File Upload */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2 text-white/70">Dateien hochladen</h4>
                      <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <p className="text-sm text-white/60">
                          Dateien hier ablegen oder klicken
                        </p>
                        <p className="text-xs text-white/40 mt-1">
                          PDF, DOCX, TXT unterstützt
                        </p>
                        <input 
                          type="file" 
                          className="hidden"
                          multiple
                          accept=".pdf,.docx,.txt"
                          onChange={(e) => {
                            if (e.target.files) {
                              setFiles([...files, ...Array.from(e.target.files)]);
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Connected Knowledge */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium mb-2 text-white/70">Verbundene Quellen</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-white/40" />
                            <span className="text-sm">Produkt-Dokumente</span>
                          </div>
                          <Badge variant="green">Aktiv</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-white/40" />
                            <span className="text-sm">FAQ-Datenbank</span>
                          </div>
                          <Badge variant="green">Aktiv</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Add Source */}
                    <Button variant="secondary" className="w-full gap-2">
                      <Sparkles className="w-4 h-4" />
                      Neue Quelle verbinden
                    </Button>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Default Sidebar */}
            {!showKnowledgePanel && (
              <Card className="p-6">
                <h3 className="font-display font-semibold mb-4">Tipps</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Seien Sie spezifisch in Ihren Fragen
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Laden Sie relevante Dokumente hoch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Geben Sie Kontext für bessere Antworten
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Überprüfen Sie Antworten sorgfältig
                  </li>
                </ul>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
