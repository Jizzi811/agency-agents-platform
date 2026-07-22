# Agency Agents Platform

> AI Agents That Actually Work — A premium agent marketplace with cinematic design, powered by OpenHands.

![Platform Preview](https://via.placeholder.com/1200x600/0A0A0F/6366F1?text=Agency+Agents+Platform)

## ✨ Features

- **🎨 Premium Cinematic Design** — Dark theme with gradient meshes, particles, and smooth animations inspired by getlayers.ai
- **🤖 140+ Specialized Agents** — Support, Sales, Engineering, Design, Finance, and more
- **⚡ Agent Execution** — Try agents directly in the browser with real-time streaming
- **📚 Knowledge Integration** — Connect files, APIs, and databases to power intelligent responses
- **💳 Agent Marketplace** — Purchase individual agents or subscribe to plans
- **🔒 Enterprise Ready** — Secure, scalable, and compliant

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/msitarzewski/agency-agents.git
cd agency-agents/platform

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
platform/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage with hero section
│   │   ├── agents/            # Agent gallery and detail pages
│   │   │   ├── page.tsx       # Agent listing
│   │   │   └── [slug]/
│   │   │       ├── page.tsx   # Agent detail
│   │   │       └── run/       # Agent execution interface
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/               # Base UI components
│   │   ├── hero/             # Hero section components
│   │   ├── agents/           # Agent-specific components
│   │   ├── chat/             # Chat interface components
│   │   └── layout/           # Layout components (Navbar, Footer)
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration
├── package.json              # Dependencies
└── SPEC.md                   # Complete platform specification
```

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#6366F1` | Buttons, links, highlights |
| Secondary | `#8B5CF6` | Gradients, accents |
| Background | `#0A0A0F` | Page background |
| Surface | `#12121A` | Card backgrounds |
| Accent Cyan | `#22D3EE` | Glow effects |

### Typography

- **Display/Headings**: Space Grotesk
- **Body**: Inter
- **Code**: JetBrains Mono

### Components

The platform includes pre-built components:

- `Button` — Multi-variant button with glow effects
- `Input` — Styled input with icons
- `Card` — Glassmorphic cards with hover states
- `Badge` — Category and status badges
- `AgentCard` — Agent display cards
- `AgentGrid` — Responsive agent grid
- `GradientMesh` — Animated gradient background
- `ParticleField` — Floating particle effect

## 🔌 API Integration

### Agent Execution

To execute an agent, send a POST request:

```bash
curl -X POST http://localhost:3000/api/execute \
  -H "Content-Type: application/json" \
  -d '{
    "agentSlug": "support-responder",
    "input": "How do I reset my password?",
    "knowledgeBaseIds": ["kb-123"]
  }'
```

### OpenHands Integration

The platform is designed to work with OpenHands for agent execution. Configure your OpenHands instance:

```bash
# Environment variables
OPENHANDS_API_URL=https://your-openhands-instance.com
OPENHANDS_API_KEY=your-api-key
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📖 Documentation

- [SPEC.md](./SPEC.md) — Complete platform specification
- [../README.md](../README.md) — Main repository README
- [OpenHands Documentation](https://docs.openhands.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License — see the [../LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenHands](https://github.com/All-Hands-AI/OpenHands) — The agent runtime
- [getlayers.ai](https://getlayers.ai) — Design inspiration
- [Tailwind CSS](https://tailwindcss.com/) — Styling framework
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide](https://lucide.dev/) — Icons

---

Built with ❤️ by the Agency Agents team
