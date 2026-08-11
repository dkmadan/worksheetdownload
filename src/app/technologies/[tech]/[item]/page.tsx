import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TECH_DATA, findCategory, findTechItem } from "@/lib/technologies";

export function generateStaticParams() {
  const params: { tech: string; item: string }[] = [];
  for (const cat of TECH_DATA) {
    for (const sub of cat.subcategories) {
      for (const it of sub.items) {
        params.push({ tech: cat.slug, item: it.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tech: string; item: string }>;
}): Promise<Metadata> {
  const { tech, item } = await params;
  const found = findTechItem(tech, item);
  if (!found) return {};
  const { category: cat, subcategory: sub, item: techItem } = found;
  return {
    title: `${techItem.name} — ${cat.label}`,
    description: `Learn about ${techItem.name} — a key technology in the ${sub.name} area of ${cat.label}. Explore concepts, use cases, and best practices.`,
    alternates: { canonical: `/technologies/${tech}/${item}` },
    openGraph: {
      title: `${techItem.name} | WorksheetDownload`,
      description: `${techItem.name} is part of ${cat.label} > ${sub.name}. ${cat.description}`,
      url: `/technologies/${tech}/${item}`,
    },
  };
}

const USE_CASES: Record<string, string[]> = {
  "ML Frameworks": ["Training and evaluating ML models", "Building classification and regression pipelines", "Model serialization and deployment", "Transfer learning and fine-tuning"],
  "Deep Learning": ["Image recognition and computer vision", "Sequence modeling and NLP", "Generative model training", "Neural architecture research"],
  "AI Technologies": ["Building intelligent applications", "NLP and multimodal pipelines", "AI-powered automation", "Foundation model integration"],
  "Concepts": ["System design and architecture", "Interview preparation and theory", "Building production-grade systems", "Understanding core principles"],
  "Frameworks": ["Rapid application development", "Enterprise-grade deployments", "Microservices and distributed apps", "API and service development"],
  "API Styles": ["Service-to-service communication", "Client-server data exchange", "Real-time event delivery", "Third-party integrations"],
  "API Tools": ["API design and documentation", "Testing and debugging APIs", "Contract-first development", "API collaboration workflows"],
  "API Gateways": ["Traffic management and routing", "Authentication and authorization", "Rate limiting and throttling", "API monitoring and analytics"],
  "Application Architecture": ["System design at scale", "Choosing the right architecture pattern", "Refactoring legacy systems", "Building maintainable codebases"],
  "Enterprise Patterns": ["Domain modeling and bounded contexts", "Event-driven system design", "Saga and distributed transactions", "CQRS and event sourcing"],
  "BI Platforms": ["Interactive dashboard creation", "Self-service analytics", "KPI tracking and reporting", "Data storytelling and visualization"],
  "Monitoring & Visualization": ["Infrastructure and application monitoring", "Log visualization and exploration", "Alerting and anomaly detection", "SRE and on-call dashboards"],
  "Java": ["Building Java applications and services", "Spring ecosystem and microservices", "RESTful API development", "ORM and data access layers"],
  "Python": ["Web API development with Python", "Async task processing", "Rapid prototyping", "Data science integrations"],
  "JavaScript / TypeScript": ["Server-side JavaScript applications", "Scalable REST and GraphQL APIs", "Full-stack JavaScript development", "Real-time apps with WebSockets"],
  ".NET": ["Windows and cross-platform development", "Enterprise web APIs with ASP.NET Core", "Database access with Entity Framework", "Blazor WebAssembly UI"],
  "Go": ["High-performance HTTP services", "Microservice development", "CLI tool development", "Cloud-native applications"],
  "PHP": ["Web application development", "CMS customization", "E-commerce backend", "Server-side scripting"],
  "Ruby": ["Convention-over-configuration web apps", "RESTful API development", "Rapid prototyping", "Test-driven development"],
  "Platforms": ["Platform evaluation and selection", "Cloud and decentralized deployment", "Enterprise platform development", "Multi-platform integration"],
  "Development": ["Smart contract authoring", "Token standard implementation", "Decentralized finance protocols", "On-chain application logic"],
  "Caching Technologies": ["Session and object caching", "Database query result caching", "Rate limiting and leaderboards", "Pub/sub messaging"],
  "AWS": ["Compute and container workloads on AWS", "Serverless function development", "Managed databases and storage", "Event-driven cloud architectures"],
  "Azure": ["Enterprise cloud migrations to Azure", "Azure-native application development", "AI/ML with Azure services", "CI/CD with Azure DevOps"],
  "Google Cloud": ["GCP data and analytics workloads", "Serverless and container deployment", "AI/ML with Vertex AI", "Multi-cloud strategies"],
  "CMS": ["Digital experience platform development", "Headless CMS integrations", "Content modeling and publishing", "Multi-site content management"],
  "Modern Web": ["Headless architecture and Jamstack", "CDN optimization and edge delivery", "Serverless content delivery", "Progressive web apps"],
  "ETL / ELT": ["Building batch data pipelines", "Real-time data ingestion", "Data quality and transformation", "Orchestration and scheduling"],
  "Big Data": ["Distributed batch processing at petabyte scale", "Real-time stream processing", "Data lake architecture", "Analytics on large datasets"],
  "Data Processing": ["DataFrame operations and transformations", "In-memory analytics", "Feature engineering for ML", "Data wrangling and cleaning"],
  "Data Warehouse": ["Centralized analytics and reporting", "Business intelligence workloads", "Historical data analysis", "SQL-based data exploration"],
  "Data Lake / Lakehouse": ["Storing raw structured and unstructured data", "Open table format management", "Unified batch and streaming analytics", "ML feature stores"],
  "Relational / SQL": ["Transactional application data", "Complex joins and relational queries", "ACID-compliant data storage", "Reporting and analytics"],
  "SQL Technologies": ["ORM and database abstraction layers", "Stored procedures and triggers", "Database connectivity and pooling", "Query optimization"],
  "NoSQL — Document": ["Flexible schema document storage", "Content management backends", "User profile and catalog storage", "Mobile app data sync"],
  "NoSQL — Key-Value": ["High-throughput caching and sessions", "Leaderboards and counters", "Shopping cart and ephemeral data", "Distributed locking"],
  "NoSQL — Wide Column": ["IoT and time-series data at massive scale", "Globally distributed write-heavy workloads", "Analytics on wide rows", "High-availability data stores"],
  "NoSQL — Graph": ["Social network and relationship modeling", "Fraud detection graphs", "Knowledge graphs and recommendations", "Network topology analysis"],
  "NoSQL — Time Series": ["Infrastructure metrics storage", "IoT sensor data ingestion", "Financial tick data", "Event and log time-series"],
  "Desktop Development": ["Cross-platform GUI applications", "Native OS integrations", "Enterprise desktop tooling", "Electron-based web-desktop apps"],
  "Containers": ["Application containerization", "Image building and registry management", "Multi-container environments", "Immutable infrastructure"],
  "Orchestration": ["Container cluster management", "Auto-scaling and self-healing workloads", "Service mesh integration", "Multi-cloud Kubernetes deployments"],
  "CI / CD": ["Automated build and test pipelines", "GitOps deployments", "Artifact publishing", "Progressive delivery strategies"],
  "Infrastructure as Code": ["Declarative cloud resource provisioning", "Infrastructure drift detection", "Multi-cloud IaC management", "GitOps infrastructure workflows"],
  "IDE / Editors": ["Productive code editing and debugging", "Integrated testing and refactoring", "Plugin ecosystem and extensions", "Remote development"],
  "AI Coding": ["AI pair programming", "Code completion and generation", "Refactoring assistance", "Context-aware code suggestions"],
  "LLM Models": ["Foundation model selection and evaluation", "Prompt engineering for model families", "Fine-tuning and customization", "Multi-model routing"],
  "LLM Frameworks": ["Building LLM-powered applications", "RAG pipeline orchestration", "Agent and tool integration", "Memory and state management"],
  "RAG": ["Retrieval-augmented generation pipelines", "Knowledge base integration", "Context window optimization", "Semantic and hybrid search"],
  "Vector Databases": ["Storing and querying high-dimensional embeddings", "Semantic similarity search", "Recommendation systems", "RAG retrieval layer"],
  "Hardware / Platforms": ["Prototyping IoT and edge devices", "Edge inference hardware selection", "Embedded sensor integration", "Low-power device programming"],
  "Programming": ["Embedded and firmware development", "Bare-metal and RTOS programming", "Hardware abstraction layers", "Robot programming and control"],
  "Protocols": ["Device and service communication", "Publish-subscribe messaging", "Secure protocol implementation", "Reliable M2M data exchange"],
  "Technologies": ["Infrastructure technology selection", "Load balancing and traffic management", "CDN and edge caching", "Distributed systems components"],
  "Tools": ["Reverse proxy configuration", "Traffic shaping and rate limiting", "DDoS mitigation", "High-availability proxy clusters"],
  "Kubernetes Ecosystem": ["Kubernetes deployment and management", "GitOps with Argo CD", "Service mesh with Istio and Linkerd", "Cluster observability and monitoring"],
  "MLOps": ["Experiment tracking and reproducibility", "Model versioning and registry", "Automated retraining pipelines", "Model serving and scaling"],
  "LLMOps": ["LLM prompt management and versioning", "Model evaluation and red-teaming", "Token usage monitoring and cost control", "Guardrails and safety"],
  "Message Brokers": ["Decoupled asynchronous microservices", "Task queue and work distribution", "Reliable message delivery", "Fan-out and routing patterns"],
  "Event Streaming": ["Real-time event processing at scale", "Event sourcing architectures", "Stream aggregation and windowing", "Exactly-once delivery"],
  "Kafka Ecosystem": ["Kafka connector development", "Stream processing with KSQL", "Schema evolution and compatibility", "Connector-based data integration"],
  "Frameworks / Platforms": ["Microservice scaffolding and registration", "Service-to-service communication", "Resilience and circuit breaking", "Container-based deployments"],
  "Patterns": ["Designing resilient distributed services", "Managing distributed transactions", "Service discovery and load balancing", "Event-driven communication"],
  "Android": ["Native Android app development", "Jetpack Compose UI development", "Android SDK integrations", "Play Store publishing"],
  "iOS": ["Native iOS app development", "SwiftUI declarative UI", "App Store submission", "iOS SDK and frameworks"],
  "Cross Platform": ["Write-once cross-platform mobile apps", "Shared business logic across platforms", "React Native and Flutter comparison", "Hybrid app optimization"],
  "Metrics": ["Time-series metrics collection", "Dashboard creation and alerting", "SLO/SLI tracking", "Cloud-native monitoring"],
  "Logging": ["Centralized log aggregation", "Log parsing and enrichment", "Log retention and compliance", "Kibana search and visualization"],
  "Tracing": ["Distributed trace collection", "Service dependency mapping", "Latency analysis and bottlenecks", "OpenTelemetry instrumentation"],
  "APM": ["Application performance monitoring", "Error tracking and profiling", "User experience monitoring", "Full-stack observability"],
  "Operating Systems": ["OS fundamentals and system calls", "Kernel and process management", "File systems and I/O", "Container OS considerations"],
  "Linux Distributions": ["Server OS selection and management", "Package management and system administration", "Container base image selection", "Production Linux setups"],
  "General Purpose": ["Systems programming and application development", "Backend service development", "Performance-critical applications", "Multi-paradigm programming"],
  "Web": ["Front-end and full-stack web development", "Typed JavaScript applications", "Server-side rendering and static generation", "Modern web standards"],
  "Mobile": ["Native mobile application development", "Cross-platform language selection", "Mobile SDK integration", "App store publishing"],
  "Data / AI": ["Statistical computing and analysis", "Machine learning and data science", "Scientific computing", "Research and academic applications"],
  "Functional": ["Pure functional programming", "Immutable data and side-effect isolation", "Concurrent and distributed systems", "DSL design"],
  "Legacy / Mainframe": ["Mainframe modernization", "COBOL migration strategies", "Legacy system maintenance", "Batch processing on mainframes"],
  "Smart Contracts": ["Decentralized application development", "Token contract creation", "DeFi protocol development", "Blockchain business logic"],
  "Simulation": ["Robot behavior testing in virtual environments", "Physics-based simulation", "ROS2 integration testing", "Autonomous vehicle simulation"],
  "Hardware": ["Microcontroller programming", "Sensor and actuator integration", "Physical computing prototypes", "Low-power hardware design"],
  "AI": ["AI and machine learning applications", "Computer vision and perception", "Reinforcement learning and control", "Emerging AI tools and frameworks"],
  "Computing": ["Next-generation computing paradigms", "Quantum algorithm exploration", "Digital twin strategy", "Edge computing architecture"],
  "Cloud": ["Serverless architecture patterns", "Function-as-a-service design", "Cold start optimization", "Event-driven cloud patterns"],
  "Security": ["Security architecture and threat modeling", "Privacy-preserving computation", "Secure system design", "Post-quantum cryptography"],
  "Search Engines": ["Full-text search implementation", "Faceted search and filtering", "Vector and semantic search", "Search relevance tuning"],
  "Identity & Access": ["OAuth 2.0 authorization flows", "SSO and federation setup", "Token-based authentication", "Directory service integration"],
  "Security Technologies": ["Zero-trust architecture implementation", "Secrets management and rotation", "Certificate and PKI management", "Mutual TLS configuration"],
  "Security Tools": ["SAST and DAST in CI/CD", "Vulnerability scanning and remediation", "Secrets scanning", "Security policy enforcement"],
  "Unit Testing": ["Test-driven development", "Mocking and stubbing dependencies", "Code coverage measurement", "Fast feedback loops in CI"],
  "API Testing": ["Contract testing for APIs", "End-to-end API validation", "Performance and load testing APIs", "Test data management"],
  "UI Testing": ["Browser automation testing", "Visual regression testing", "Cross-browser compatibility", "End-to-end user flow validation"],
  "Performance Testing": ["Load and stress testing applications", "Identifying bottlenecks under load", "Benchmarking and throughput analysis", "Scalability validation"],
  "Security Testing": ["OWASP vulnerability scanning", "Penetration testing workflows", "Dependency vulnerability analysis", "DevSecOps integration"],
  "Version Control": ["Branching strategies (GitFlow, trunk-based)", "Pull request workflows", "Conflict resolution and rebasing", "Git history management"],
  "Legacy / Other": ["SVN migration to Git", "Centralized version control workflows", "Large binary file management", "Enterprise version control at scale"],
  "Core Web": ["Semantic HTML and accessibility", "CSS layouts and animations", "WebAssembly performance modules", "Browser APIs and standards"],
  "Frontend Frameworks": ["Component-based UI architecture", "Server-side rendering and static generation", "State management patterns", "Frontend performance optimization"],
  "CSS / UI": ["Design system and component library development", "Responsive and mobile-first design", "Utility-first CSS workflows", "Theme and branding customization"],
  "Enterprise Platforms": ["ERP and CRM implementation", "Enterprise integration middleware", "Business process automation", "Digital transformation strategy"],
  "JavaScript": ["JavaScript tooling and package management", "Dependency resolution and lockfiles", "Monorepo and workspace management", "Build performance optimization"],
  "C/C++": ["Native build system configuration", "Package and dependency management", "Cross-compilation for embedded targets", "CMake project structure"],
};

export default async function TechItemPage({
  params,
}: {
  params: Promise<{ tech: string; item: string }>;
}) {
  const { tech, item } = await params;
  const found = findTechItem(tech, item);
  if (!found) notFound();

  const { category: cat, subcategory: sub, item: techItem } = found;

  const useCases =
    USE_CASES[sub.name] ??
    ["Exploring core concepts and fundamentals", "Building production systems", "Interview preparation", "Hands-on practice"];

  const relatedItems = sub.items.filter((it) => it.slug !== techItem.slug).slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero */}
      <div className={`bg-gradient-to-r ${cat.color}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/technologies" className="hover:text-white transition-colors">Technologies</Link>
            <span>›</span>
            <Link href={`/technologies/${cat.slug}`} className="hover:text-white transition-colors">{cat.label}</Link>
            <span>›</span>
            <span className="text-white font-medium">{techItem.name}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">{cat.icon}</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs text-white/60 bg-white/10 rounded-full px-3 py-0.5 font-medium">{cat.label}</span>
                <span className="text-white/30">·</span>
                <span className="text-xs text-white/60 bg-white/10 rounded-full px-3 py-0.5 font-medium">{sub.name}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {techItem.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">What is {techItem.name}?</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {techItem.name} is a technology in the{" "}
                <strong className="text-white">{sub.name}</strong> category within{" "}
                <strong className="text-white">{cat.label}</strong>.{" "}
                {cat.description}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Key Use Cases</h2>
              <ul className="space-y-3">
                {useCases.map((uc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300 leading-relaxed">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`bg-gradient-to-r ${cat.color} rounded-2xl p-6`}>
              <h2 className="text-lg font-bold text-white mb-2">Practice &amp; Learn</h2>
              <p className="text-white/70 text-sm mb-4">
                Build your {techItem.name} skills with structured worksheets, cheatsheet, and interview sheet.
              </p>
              <Link
                href={`/technologies/${tech}/${item}/resources`}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-full transition-colors text-sm"
              >
                Browse {techItem.name} worksheets →
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden">
              <div className={`bg-gradient-to-r ${cat.color} px-4 py-3 flex items-center gap-2`}>
                <span className="text-xl">{cat.icon}</span>
                <p className="text-white font-semibold text-sm">{cat.label}</p>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{cat.description}</p>
                <Link href={`/technologies/${cat.slug}`} className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors">
                  View all {cat.label} →
                </Link>
              </div>
            </div>

            {relatedItems.length > 0 && (
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Related — {sub.name}
                </h3>
                <div className="space-y-1">
                  {relatedItems.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/technologies/${cat.slug}/${rel.slug}`}
                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-700/60 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                      {rel.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Link
                href={`/technologies/${cat.slug}`}
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold px-4 py-2.5 rounded-full transition-colors border border-gray-700 text-sm"
              >
                ← {cat.label}
              </Link>
              <Link
                href="/technologies"
                className="flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-gray-200 font-semibold px-4 py-2.5 rounded-full transition-colors border border-gray-700/50 text-sm"
              >
                All Technologies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
