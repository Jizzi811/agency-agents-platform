# Agency Agents Platform — Complete Specification

## Executive Summary

**Vision:** Eine premium Agentenplattform, die Agenten aus dem agency-agents Repository präsentiert und ausführbar macht. Die Plattform verbindet eine cinematic, immersive Design-Ästhetik (inspiriert von getlayers.ai) mit voller Funktionalität: Agenten entdecken, ausprobieren, kaufen und ausführen.

**Differentiator:** Nicht nur eine Galerie — eine vollständige Agenten-Ökosystem mit Wissensintegration, Support-Bots und Sales-Bots, die mit internem Wissen gefüttert werden können.

---

## Design System

### Visual Identity

#### Color Palette
```
Primary Gradient:    #6366F1 → #8B5CF6 → #A855F7 (Indigo → Purple → Fuchsia)
Background Dark:     #0A0A0F (Deep Space Black)
Surface:             #12121A (Card Background)
Surface Elevated:    #1A1A24 (Elevated Elements)
Border:              rgba(255, 255, 255, 0.08)
Border Hover:        rgba(255, 255, 255, 0.15)

Text Primary:        #FFFFFF
Text Secondary:      #A1A1AA
Text Muted:          #71717A

Accent Cyan:         #22D3EE (Glow effects)
Accent Green:        #10B981 (Success states)
Accent Amber:        #F59E0B (Warning/Premium)
Accent Red:          #EF4444 (Error states)

Gradient Mesh:       radial-gradient with animated positions
```

#### Typography
```
Display/Headings:    "Space Grotesk" (Google Fonts) - 700 weight
                     Large: 72px hero, 48px section, 32px subsection
                     
Body/UI:             "Inter" (Google Fonts) - 400/500/600
                     Base: 16px, Small: 14px, XS: 12px
                     
Code/Mono:           "JetBrains Mono" - for technical content
```

#### Spacing System
```
Base unit: 4px
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
Container max-width: 1400px
Section padding: 96px vertical, 24px horizontal
Card padding: 24px
```

#### Motion & Animation Philosophy
```
Principle: "Cinematic & Intelligent"
- Scroll-triggered reveals (Intersection Observer)
- Parallax depth layers (3-5 layers)
- Magnetic cursor effects on CTAs
- Smooth page transitions (Framer Motion)
- Gradient mesh animation (continuous, subtle)
- Particle system (hero section)
- Hover: Scale 1.02, shadow elevation, border glow
- Click: Scale 0.98 → 1.0 spring

Timing: 
- Micro-interactions: 150ms ease-out
- Hover transitions: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- Page transitions: 500ms ease-in-out
- Scroll animations: 800ms with stagger
```

#### Visual Effects
```
Glassmorphism:        backdrop-blur(20px), bg-opacity-10
Glow Effects:         box-shadow with accent colors
Gradients:            Multi-stop radial + linear
Shadows:              Layered: 0 4px 6px -1px rgba(0,0,0,0.3)
Borders:              1px solid with low opacity white
```

---

## Page Structure

### 1. Homepage

#### Hero Section (100vh)
- **Background**: Animated gradient mesh (purple → indigo → cyan)
- **Floating particles**: Subtle dots moving upward
- **Headline**: "AI Agents That Actually Work" (Space Grotesk, 72px)
- **Subheadline**: "Discover, try, and deploy intelligent agents for support, sales, and beyond."
- **CTA Buttons**: 
  - Primary: "Explore Agents" (gradient bg, glow)
  - Secondary: "Start Free Trial" (ghost style)
- **Floating cards**: 3 agent preview cards floating with parallax

#### Social Proof Bar
- "Trusted by 500+ companies"
- Logo carousel with company logos (grayscale → color on hover)

#### Featured Agents Section
- Section title: "Most Popular Agents"
- 6-card grid (3x2 desktop, 2x3 tablet, 1x6 mobile)
- Each card shows: icon, name, category badge, rating, price

#### Categories Section
- Horizontal scroll cards for categories
- Categories: Support, Sales, Engineering, Design, Finance, Healthcare, Security, Game Dev, GIS, Custom
- Each category card with icon, name, agent count

#### Features Grid (Why Choose Us)
- 3-column grid
- Cards with icon, title, description
- Features:
  - "Smart Execution" - Powered by OpenHands
  - "Knowledge Integration" - Connect your data
  - "Enterprise Ready" - Secure & scalable

#### CTA Section
- Full-width gradient background
- "Ready to transform your business?"
- Email input + "Get Started" button

#### Footer
- Multi-column links
- Social icons
- Copyright

---

### 2. Agent Gallery (/agents)

#### Header
- Page title: "Agent Library"
- Subtitle: "140+ specialized agents ready to work"
- Search bar with instant results
- Filter dropdowns: Category, Price, Rating, Popularity

#### Sidebar Filters
- Category checkboxes
- Price range slider
- Rating filter
- "Free" toggle
- "New" toggle

#### Agent Grid
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Infinite scroll with loading skeleton
- "Load more" button

#### Agent Card Component
```
┌─────────────────────────────────┐
│  [Category Badge]      [Price]  │
│                                 │
│     [Agent Icon/Avatar]         │
│                                 │
│     Agent Name                  │
│     Short description (2 lines) │
│                                 │
│  ⭐ 4.8  •  Used 1.2k times    │
│                                 │
│  [Preview] [Try Now] [Buy]     │
└─────────────────────────────────┘
```

Hover state:
- Card lifts (translateY -4px)
- Shadow increases
- Border glow appears
- "Try Now" button fully visible

---

### 3. Agent Detail Page (/agents/[slug])

#### Hero Section
- Agent icon (large, 80px)
- Agent name
- Category + Subcategory badges
- Rating + Usage stats
- Price/Plan info
- CTA buttons: "Try Agent" (primary), "Add to Favorites"

#### Tabs Navigation
- Overview
- Capabilities
- Reviews
- Documentation

#### Overview Tab
- Full description
- Key features list
- Use cases
- Example prompts

#### Capabilities Tab
- Detailed feature list with icons
- Integrations supported
- Knowledge requirements

#### Documentation Tab
- Getting started guide
- API documentation (for developers)
- Example integrations

#### Sidebar
- "Try This Agent" widget
- Quick info card
- Related agents
- Share button

---

### 4. Agent Execution Interface (/agents/[slug]/run)

#### Main Interface
```
┌────────────────────────────────────────────────────────────┐
│  Agent: [Name]                              [Settings ⚙] │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Welcome! I'm [Agent Name]. How can I help you today? │ │
│  │                                        [Bot Message] │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ User message here...                       [User]    │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Agent response with streaming...                     │ │
│  │                                        [Bot Message] │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
├────────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────┐   │
│  │ Type your message...                       [Send ➤] │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  [+File] [📚Knowledge] [🔗Integrations]                   │
└────────────────────────────────────────────────────────────┘
```

#### Knowledge Panel (Slide-in from right)
- Upload files (drag & drop)
- Select existing knowledge bases
- Preview uploaded content
- "Clear All" button

#### Settings Panel
- Model selection (GPT-4, Claude, etc.)
- Temperature slider
- Max tokens
- Streaming toggle

---

### 5. Pricing Page (/pricing)

#### Header
- "Simple, Transparent Pricing"
- Subtitle: "Start free, scale as you grow"

#### Pricing Cards
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   FREE      │  │    PRO      │  │  ENTERPRISE │
│             │  │   $49/mo    │  │   Custom    │
│  $0/month   │  │             │  │             │
│             │  │             │  │             │
│ - 10 tasks  │  │ - 500 tasks │  │ - Unlimited │
│ - 3 agents  │  │ - All agents│  │ - All agents│
│ - Community │  │ - Priority  │  │ - Dedicated │
│             │  │ - Support   │  │ - SLA       │
│ [Get Start] │  │ [Get Pro]   │  │ [Contact]   │
└─────────────┘  └─────────────┘  └─────────────┘
```

#### Feature Comparison Table
- Rows: Feature names
- Columns: Free, Pro, Enterprise
- Checkmarks/X marks

---

### 6. Knowledge Hub (/knowledge)

#### Dashboard
- List of knowledge bases
- Create new button
- Storage usage indicator

#### Knowledge Base Detail
- Name, description, created date
- Sources list (files, connections)
- Usage statistics
- Connected agents

---

### 7. Dashboard (/dashboard)

For logged-in users:
- Recent activity
- Favorite agents
- Usage statistics
- Credits remaining
- Quick actions

---

## Component Library

### Core Components

#### 1. `<GradientMesh />`
Animated gradient background with multiple color stops.
States: idle (slow animation), active (faster on interaction)

#### 2. `<ParticleField />`
Floating particles effect for hero sections.
Configurable: count, speed, size, color

#### 3. `<GlassCard />`
Glassmorphic card component.
Props: hover (boolean), glow (boolean), elevation (low/medium/high)

#### 4. `<AgentCard />`
Pre-built agent display card.
States: default, hover, loading, selected
Variants: compact, full, featured

#### 5. `<Button />`
Multi-variant button component.
Variants: primary (gradient), secondary (ghost), outline, danger
Sizes: sm, md, lg
States: default, hover, active, disabled, loading

#### 6. `<Input />`
Styled input field.
Variants: default, search, textarea
States: default, focus, error, disabled

#### 7. `<Badge />`
Category/label badges.
Variants: category, status, price, rating

#### 8. `<Modal />`
Modal dialog with backdrop blur.
Animations: scale in, fade in

#### 9. `<Tabs />`
Tab navigation component.
Animated underline indicator

#### 10. `<FileUpload />`
Drag & drop file upload zone.
States: idle, dragover, uploading, complete, error

#### 11. `<ChatMessage />`
Chat message bubble.
Variants: user, bot, system
Supports markdown, code blocks, streaming

#### 12. `<Sidebar />`
Collapsible sidebar navigation.
Mobile: slide-in drawer

---

## Technical Architecture

### Frontend Stack
```
Framework:        Next.js 14 (App Router)
Language:         TypeScript
Styling:          Tailwind CSS + CSS Variables
Animation:        Framer Motion
Icons:            Lucide React
Fonts:            Google Fonts (Space Grotesk, Inter)
State:            Zustand (client), React Query (server)
Forms:            React Hook Form + Zod
```

### Backend/API
```
Runtime:          Next.js API Routes
Authentication:   NextAuth.js (credentials + OAuth)
Database:         PostgreSQL (Prisma ORM)
Vector DB:        Pinecone (for knowledge/embeddings)
File Storage:     S3-compatible (uploadthing/local)
Queue:            Redis + Bull (for async tasks)
```

### AI/Agent Integration
```
Agent Runtime:    OpenHands SDK
LLM Providers:   OpenAI, Anthropic, Google AI
Streaming:        Server-Sent Events (SSE)
```

### Infrastructure
```
Hosting:          Vercel (recommended)
Database:         Supabase / Neon
Monitoring:       Vercel Analytics + Sentry
```

---

## API Design

### Agent Endpoints
```
GET    /api/agents                    # List all agents
GET    /api/agents/[slug]             # Get agent details
POST   /api/agents/[slug]/execute     # Execute agent
GET    /api/agents/[slug]/reviews     # Get reviews
```

### Knowledge Endpoints
```
GET    /api/knowledge                 # List knowledge bases
POST   /api/knowledge                 # Create knowledge base
POST   /api/knowledge/upload           # Upload files
POST   /api/knowledge/[id]/embed      # Generate embeddings
GET    /api/knowledge/[id]/sources    # List sources
```

### User Endpoints
```
POST   /api/auth/login                # Login
POST   /api/auth/register             # Register
GET    /api/user/me                   # Get current user
GET    /api/user/usage               # Get usage stats
POST   /api/user/credits              # Add credits
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)
- [x] Design system tokens
- [ ] Next.js project setup
- [ ] Component library (core 10 components)
- [ ] Homepage with hero
- [ ] Agent gallery page
- [ ] Basic routing

### Phase 2: Agent Execution (Week 3-4)
- [ ] Agent detail page
- [ ] Execution interface
- [ ] OpenHands integration
- [ ] Streaming responses
- [ ] File upload component

### Phase 3: Knowledge System (Week 5-6)
- [ ] Knowledge hub page
- [ ] File processing pipeline
- [ ] Vector embeddings
- [ ] Context injection
- [ ] Knowledge panel UI

### Phase 4: Business Logic (Week 7-8)
- [ ] User authentication
- [ ] Credit system
- [ ] Purchase flow
- [ ] Dashboard
- [ ] Analytics

### Phase 5: Polish & Launch (Week 9-10)
- [ ] Animations refinement
- [ ] Performance optimization
- [ ] Mobile responsive
- [ ] SEO optimization
- [ ] Launch

---

## Recommended First Agents

Based on the agency-agents repository:

1. **support-support-responder.md** — Perfect for customer support bot
   - Why: High demand, clear use case, demonstrates platform value

2. **sales-sales-engineer.md** — Sales support and qualification
   - Why: Revenue driver, integrates well with CRM knowledge

3. **specialized-document-generator.md** — Multi-purpose content creation
   - Why: Broad appeal, showcases AI capabilities

4. **engineering-code-reviewer.md** — Developer productivity
   - Why: Technical audience, GitHub integration

5. **design-design-ui-designer.md** — Design consultation
   - Why: Visual demonstrations, premium positioning

---

## File Structure

```
agency-agents-platform/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx                    # Homepage
│   ├── agents/
│   │   ├── page.tsx                # Gallery
│   │   └── [slug]/
│   │       ├── page.tsx            # Detail
│   │       └── run/
│   │           └── page.tsx        # Execution
│   ├── pricing/
│   │   └── page.tsx
│   ├── knowledge/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   └── api/
│       ├── agents/
│       │   └── route.ts
│       ├── execute/
│       │   └── route.ts
│       └── knowledge/
│           └── route.ts
├── components/
│   ├── ui/                         # Base components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── hero/
│   │   ├── gradient-mesh.tsx
│   │   ├── particle-field.tsx
│   │   └── hero-section.tsx
│   ├── agents/
│   │   ├── agent-card.tsx
│   │   ├── agent-grid.tsx
│   │   └── agent-filters.tsx
│   ├── chat/
│   │   ├── chat-container.tsx
│   │   ├── chat-message.tsx
│   │   └── chat-input.tsx
│   └── layout/
│       ├── navbar.tsx
│       ├── footer.tsx
│       └── sidebar.tsx
├── lib/
│   ├── agents/
│   │   └── registry.ts             # Load agents from repo
│   ├── openhands/
│   │   └── client.ts               # OpenHands SDK wrapper
│   └── utils/
│       └── cn.ts                   # Tailwind merge
├── types/
│   └── index.ts                    # TypeScript types
└── public/
    └── agents/                     # Static agent data
```

---

## Quality Checklist

- [ ] All animations smooth at 60fps
- [ ] Mobile responsive (320px - 4K)
- [ ] WCAG 2.1 AA accessibility
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] TypeScript strict mode
- [ ] SEO meta tags complete
- [ ] Loading states for all async operations
- [ ] Error boundaries implemented
- [ ] Dark mode only (matches brand)
