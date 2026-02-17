"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Database,
  Rocket,
  Server,
  Sparkles,
  Trophy,
  Workflow,
  Wrench
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  title: string;
  problem: string;
  stack: string[];
  complexity: string;
  impact: string;
  architecture: string;
};

const expertise = [
  {
    title: "Shopify App Development",
    icon: Workflow,
    points: [
      "Custom apps and extensions with Admin API, Storefront API, GraphQL, and webhooks",
      "Post-purchase order editing, inventory sync, and multi-store workflow automation",
      "Production-ready payment integrations with secure validation flows"
    ]
  },
  {
    title: "Backend Engineering",
    icon: Server,
    points: [
      "Laravel and Node.js systems with service-oriented architecture",
      "REST API design, structured data models, and scalable business logic layers",
      "Performance-focused query optimization across large operational datasets"
    ]
  },
  {
    title: "Frontend Development",
    icon: Code2,
    points: [
      "React and Next.js interfaces for analytics dashboards and admin operations",
      "Workflow-oriented UX for support teams handling high-volume actions",
      "Data-heavy UI development optimized for clarity and speed"
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    points: [
      "MySQL, PostgreSQL, and MongoDB schema design for scalable products",
      "AWS S3-based media storage and retrieval pipelines",
      "Metadata-driven content systems with versioned and structured data storage"
    ]
  },
  {
    title: "Architecture & Optimization",
    icon: Rocket,
    points: [
      "Query and indexing improvements delivering measurable performance gains",
      "Production debugging for live merchant workflows and admin operations",
      "Automation-first architecture for reducing manual processing overhead"
    ]
  }
];

const skillGroups = {
  Core: [
    "Laravel",
    "Node.js",
    "React.js",
    "Next.js",
    "JavaScript",
    "Bootstrap",
    "HTML/CSS",
    "Shopify APIs",
    "Shopify Admin API",
    "Shopify Storefront API",
    "GraphQL",
    "Webhooks",
    "Stripe Integrations",
    "PeleCard"
  ],
  Systems: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "AWS S3",
    "JWT Auth",
    "REST APIs",
    "Clean Code Architecture",
    "Service + Repository Pattern",
    "CI/CD Pipelines"
  ],
  Product: [
    "Admin Panel Development",
    "CRM Systems",
    "SaaS Platforms",
    "Multi-Store Management",
    "Invoice Automation",
    "Performance Optimization",
    "Production Debugging"
  ]
};

const projects: Project[] = [
  {
    title: "Dynamic Inventory Management for Shopify",
    problem: "Merchants operating across multiple stores lacked real-time SKU-level inventory visibility.",
    stack: ["Laravel", "MySQL", "Shopify APIs", "Webhooks", "Maatwebsite Excel"],
    complexity:
      "Engineered multi-store inventory tracking, bulk update pipelines, and webhook-driven stock reconciliation.",
    impact: "Enabled reliable inventory visibility across six stores and reduced manual stock handling workload.",
    architecture:
      "Built event-driven update flows with webhook listeners and reporting modules for SKU-wise analytics with date-based filters."
  },
  {
    title: "Template Customization Engine with Image Processing",
    problem: "Teams needed a scalable way to generate customized assets from reusable templates.",
    stack: ["Shopify Embedded App", "Laravel", "PostgreSQL", "AWS S3", "Image Processing"],
    complexity:
      "Designed a Shopify Embedded App for template-based customization with logo placement, variant metadata, and asset generation workflows.",
    impact: "Improved media performance and reduced storage redundancy using optimized S3 retrieval pipelines.",
    architecture:
      "Implemented metadata-centric PostgreSQL design to manage image variants, generated outputs, and scalable retrieval inside embedded Shopify workflows."
  },
  {
    title: "Shopify Order Modification Extension (Private Client)",
    problem: "Support teams needed secure post-purchase order editing without operational delays.",
    stack: ["Node.js", "MongoDB", "React.js", "Shopify APIs", "Secure REST APIs"],
    complexity:
      "Developed real-time order modification workflows with secure API channels and operational audit control.",
    impact:
      "Reduced order change errors by 25% and supported daily usage by more than 15 internal support agents.",
    architecture:
      "Combined reactive frontend state handling with Node-based API orchestration and Mongo-backed update persistence."
  },
  {
    title: "Wholesale and Draft Order Management System",
    problem: "Wholesale workflows required faster draft order processing with multi-user administrative control.",
    stack: ["Laravel", "MySQL", "Shopify Draft Order API", "DOMPDF", "SMTP"],
    complexity:
      "Built quote-number-based draft order flows, role-aware multi-user actions, and invoice generation automation.",
    impact: "Reduced order operations friction by centralizing creation, updates, and invoice delivery in one workflow.",
    architecture:
      "Integrated Shopify draft order APIs with backend workflow orchestration and automated document plus email pipelines."
  },
  {
    title: "Production Operations Dashboard Suite",
    problem: "Distributed operations lacked a central analytics and workflow control layer.",
    stack: ["React.js", "Laravel", "Node.js", "MySQL", "PostgreSQL"],
    complexity:
      "Delivered multi-dashboard modules for order workflows, analytics, and bulk processing capabilities.",
    impact: "Improved operational efficiency by consolidating post-purchase, inventory, and reporting functions.",
    architecture:
      "Focused on modular backend services, structured data patterns, and production issue resolution workflows."
  }
];

const techStack = [
  "TypeScript",
  "Next.js App Router",
  "React",
  "Node.js",
  "Laravel",
  "Shopify GraphQL",
  "Shopify Webhooks",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS S3"
];

const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: "easeOut" }
};

function SectionTitle({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <div className="mb-8 space-y-3">
      <Badge variant="default" className="w-fit">
        {kicker}
      </Badge>
      <h2 className="text-2xl font-semibold md:text-4xl">{title}</h2>
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <main className="relative z-10 pb-20">
      <header className="sticky top-0 z-30 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary">ATUL</p>
              <p className="text-xs text-muted-foreground">Fullstack Developer</p>
            </div>
            <nav className="hidden items-center gap-5 text-sm text-muted-foreground md:flex">
              {[
                ["About", "about"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Experience", "experience"],
                ["Contact", "contact"]
              ].map(([label, href]) => (
                <a key={href} href={`#${href}`} className="transition hover:text-foreground">
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {[
              ["About", "about"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Contact", "contact"]
            ].map(([label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section className="section-anchor container pt-14 md:pt-20" id="hero">
        <motion.div {...fadeIn}>
          <div>
            <p className="mb-5 inline-flex items-center rounded-md border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium tracking-wide text-primary/90">
              Building Scalable Shopify Apps and SaaS Systems That Perform in Production
            </p>
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="outline">Shopify App Specialist</Badge>
              <Badge variant="outline">SaaS System Builder</Badge>
              <Badge variant="outline">Backend Architecture Expert</Badge>
            </div>
            <h1 className="max-w-5xl text-3xl font-semibold leading-tight md:text-6xl">
              Fullstack Developer specializing in Shopify and Scalable Systems
            </h1>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-lg">
            Atul is a production-focused Fullstack Developer with 2.5+ years of hands-on experience building scalable
              Shopify apps, CRM systems, admin dashboards, and SaaS-style web applications. He specializes in Laravel,
              Node.js, React, Next.js, and Shopify ecosystem development including Admin APIs, GraphQL, webhooks, and
              app architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects">
                <Button size="lg">View Case Studies</Button>
              </a>
              <a href="#contact">
                <Button variant="secondary" size="lg">
                  Let&apos;s Collaborate
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="about">
        <motion.div {...fadeIn}>
          <SectionTitle
            kicker="About"
            title="Production-first engineering for real business scale"
            description="Since August 2023, delivering end-to-end systems in live Shopify and SaaS environments with focus on scalability, reliability, and measurable outcomes."
          />
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Atul builds systems that perform under real operational pressure. His work spans Shopify app
                engineering, backend architecture, and high-utility dashboards where data consistency, speed, and
                maintainability directly impact merchants and internal operations.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="skills">
        <motion.div {...fadeIn}>
          <SectionTitle
            kicker="Core Expertise"
            title="High-impact capabilities across product and architecture"
            description="Specialized across Shopify apps, backend architecture, dashboard systems, and scalable cloud-ready data design."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expertise.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <div className="mb-3 inline-flex w-fit rounded-lg border border-border/70 bg-secondary/40 p-2">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {item.points.map((point) => (
                    <CardDescription key={point}>{point}</CardDescription>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Tabs defaultValue="Core">
              <TabsList>
                {Object.keys(skillGroups).map((group) => (
                  <TabsTrigger key={group} value={group}>
                    {group}
                  </TabsTrigger>
                ))}
              </TabsList>
              {Object.entries(skillGroups).map(([group, items]) => (
                <TabsContent key={group} value={group}>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="projects">
        <motion.div {...fadeIn}>
          <SectionTitle
            kicker="Projects"
            title="Case studies with real technical depth"
            description="Each case study focuses on architecture complexity, production challenges, and measurable impact."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={project.title} className="relative flex h-full flex-col justify-between">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-[10px] uppercase tracking-wide text-primary">
                      Case {index + 1}
                    </div>
                  </div>
                  <CardDescription>{project.problem}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                  <Dialog>
                    <DialogTrigger asChild className="mt-5">
                      <Button variant="secondary" className="w-full">
                        Open Case Study
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>{project.problem}</DialogDescription>
                      <div className="mt-5 space-y-4 text-sm">
                        <div>
                          <p className="font-medium text-foreground">Stack</p>
                          <p className="mt-1 text-muted-foreground">{project.stack.join(" • ")}</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Architecture Complexity</p>
                          <p className="mt-1 text-muted-foreground">{project.complexity}</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">System Design Detail</p>
                          <p className="mt-1 text-muted-foreground">{project.architecture}</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Real-world Impact</p>
                          <p className="mt-1 text-muted-foreground">{project.impact}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="experience">
        <motion.div {...fadeIn}>
          <SectionTitle
            kicker="Experience"
            title="Working with international clients and production systems"
            description="Consistently shipping complex systems for global use cases while balancing delivery speed, maintainability, and production reliability."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Fullstack Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Built scalable Shopify apps and extensions using Laravel, Node.js, and React.js.</p>
                <p>Developed dashboard systems for role-based access, analytics, and bulk workflow handling.</p>
                <p>Integrated APIs for inventory, checkout, and post-purchase order modification flows.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Wrench className="h-5 w-5 text-primary" />
                  Backend Architecture Leadership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Improved query performance by 15% through structured MySQL, PostgreSQL, and MongoDB data models.</p>
                <p>Implemented webhook-based validation and fraud-safe payment flows with Stripe and PeleCard.</p>
                <p>Automated invoicing and notification pipelines with DOMPDF and SMTP-based delivery.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="achievements">
        <motion.div {...fadeIn}>
          <SectionTitle
            kicker="Achievements"
            title="Proof of execution in high-pressure production environments"
            description="A track record of practical impact through system optimization, architecture refinement, and high-accountability delivery."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5 text-primary" />
                  Rising Star Developer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Awarded for strong contribution across PHP Laravel systems and high-impact production delivery.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Sparkles className="h-5 w-5 text-primary" />
                  System Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Improved query efficiency and system responsiveness by restructuring large operational datasets.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Rocket className="h-5 w-5 text-primary" />
                  Architecture Scale-up
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built secure, scalable foundations for multi-store workflows, real-time updates, and automation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="tech">
        <motion.div {...fadeIn}>
          <SectionTitle
            kicker="Tech Stack"
            title="Modern tools selected for velocity and reliability"
            description="A balanced stack for building scalable apps end-to-end, from product UI to backend infrastructure and data pipelines."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {techStack.map((item) => (
              <Card key={item} className="group">
                <CardContent className="flex items-center justify-between p-4">
                  <span className="text-sm text-muted-foreground transition group-hover:text-foreground">{item}</span>
                  <Code2 className="h-4 w-4 text-primary/80" />
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-anchor container mt-20" id="contact">
        <motion.div {...fadeIn}>
          <Card>
            <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">Contact</p>
                <h3 className="mt-2 text-2xl font-semibold md:text-3xl">Available for professional discussions and collaborations</h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
                  Available for Shopify app engineering, fullstack system builds, and backend architecture roles with
                  international teams.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">Email: atul61541@gmail.com</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:atul61541@gmail.com">
                  <Button size="lg">Book a Discussion</Button>
                </a>
                <a href="#hero">
                  <Button variant="secondary" size="lg">
                    Back to Top
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
