"use client";

import { use, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, Send, Paperclip, Brain, Settings, 
  X, Upload, FileText, Bot, User, Sparkles,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChatMessage } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const initialMessages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I'm the Support Responder agent. I can help you with customer inquiries, FAQs, and support ticket management. How can I assist you today?",
    timestamp: new Date(),
  },
];

export default function AgentRunPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showKnowledgePanel, setShowKnowledgePanel] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
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

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand your concern. Let me help you with that. Based on the information provided, I would recommend checking our FAQ section first.",
        "That's a great question! Here's what I found in our knowledge base...",
        "I've analyzed your request and prepared the following response...",
        "Thank you for reaching out. I'll create a support ticket for this issue and escalate it to our team.",
      ];
      
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
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
              <h1 className="font-display text-xl font-semibold">Support Responder</h1>
              <p className="text-sm text-white/60">AI-powered customer support</p>
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
              Knowledge
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
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
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
                        Thinking...
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
                      placeholder="Type your message..."
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
                  Press Enter to send, Shift+Enter for new line
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
                        Knowledge Base
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
                      <h4 className="text-sm font-medium mb-2 text-white/70">Upload Files</h4>
                      <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <p className="text-sm text-white/60">
                          Drop files here or click to upload
                        </p>
                        <p className="text-xs text-white/40 mt-1">
                          PDF, DOCX, TXT supported
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
                      <h4 className="text-sm font-medium mb-2 text-white/70">Connected Sources</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-white/40" />
                            <span className="text-sm">Product Docs</span>
                          </div>
                          <Badge variant="green">Active</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-white/40" />
                            <span className="text-sm">FAQ Database</span>
                          </div>
                          <Badge variant="green">Active</Badge>
                        </div>
                      </div>
                    </div>

                    {/* Add Source */}
                    <Button variant="secondary" className="w-full gap-2">
                      <Sparkles className="w-4 h-4" />
                      Connect New Source
                    </Button>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Default Sidebar */}
            {!showKnowledgePanel && (
              <Card className="p-6">
                <h3 className="font-display font-semibold mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Be specific in your questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Upload relevant documents
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Add context for better answers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-light">•</span>
                    Review responses carefully
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
