import type { InterviewSheetSpec } from "../interview-pdf-builder";

// ── Category accent colors ────────────────────────────────────────────────
const ACCENT: Record<string, string> = {
  "programming-languages": "#3178C6",
  "databases":             "#0EA5E9",
  "cloud":                 "#0284C7",
  "devops":                "#F97316",
  "kubernetes":            "#326CE5",
  "ai-ml":                 "#8B5CF6",
  "generative-ai":         "#7C3AED",
  "mlops-llmops":          "#6D28D9",
  "ai-agents":             "#7C3AED",
  "frontend":              "#EC4899",
  "mobile":                "#14B8A6",
  "api-technologies":      "#0891B2",
  "security":              "#DC2626",
  "testing":               "#16A34A",
  "data-engineering":      "#0D9488",
  "messaging":             "#7C3AED",
  "caching":               "#F59E0B",
  "search":                "#6366F1",
  "monitoring":            "#0EA5E9",
  "infrastructure":        "#6B7280",
  "version-control":       "#F97316",
  "web-servers":           "#1E40AF",
  "default":               "#4F46E5",
};

function getAccent(categorySlug: string): string {
  for (const key of Object.keys(ACCENT)) {
    if (categorySlug.includes(key) || key.includes(categorySlug)) return ACCENT[key];
  }
  return ACCENT.default;
}

// ── Question sets by category ─────────────────────────────────────────────

function langQuestions(name: string): string[] {
  return [
    `What are the core design goals and primary use cases for ${name}?`,
    `Explain the type system in ${name}: static vs dynamic typing, type inference, and type safety.`,
    `How does ${name} handle memory management: manual, garbage collection, or reference counting?`,
    `Describe the concurrency model in ${name}: threads, async/await, coroutines, or actors.`,
    `What are the key data structures in ${name}'s standard library and when do you use each?`,
    `How does ${name} implement object-oriented programming, functional programming, or both?`,
    `Explain error handling in ${name}: exceptions, Result/Either types, or error codes.`,
    `How does ${name}'s package/module system work and what is the standard build tool?`,
    `What are common performance optimization techniques specific to ${name}?`,
    `How do you write unit tests and measure code coverage in a ${name} project?`,
  ];
}

function dbQuestions(name: string): string[] {
  return [
    `What type of database is ${name} (relational, document, key-value, graph, time-series) and what are its strengths?`,
    `Explain how ${name} handles ACID properties or the consistency model it provides.`,
    `How does indexing work in ${name}? What index types are available and how do you choose one?`,
    `What is the data model in ${name} and how do you design a schema for a typical use case?`,
    `How does ${name} handle scaling: vertical scaling, horizontal sharding, or replication?`,
    `Describe the read/write performance characteristics of ${name} and how to tune them.`,
    `How do you handle transactions in ${name}? What isolation levels or guarantees are supported?`,
    `What backup and point-in-time recovery strategies does ${name} support?`,
    `How do you monitor and diagnose slow queries or performance issues in ${name}?`,
    `What are common anti-patterns or pitfalls to avoid when using ${name} in production?`,
  ];
}

function cloudQuestions(name: string): string[] {
  return [
    `What is ${name} and what is its primary value proposition within its cloud ecosystem?`,
    `How does ${name} handle identity and access management (IAM)? Explain roles, policies, and permissions.`,
    `What networking primitives does ${name} use (VPC, subnets, security groups, load balancers)?`,
    `Explain the storage options available in ${name} and when you would choose each.`,
    `How does ${name} handle autoscaling and how do you configure it for cost efficiency?`,
    `What monitoring and observability tools does ${name} provide (metrics, logs, tracing)?`,
    `Explain how ${name} handles high availability and disaster recovery.`,
    `How do you manage secrets and configuration in ${name} (secret managers, parameter stores)?`,
    `What are the key cost drivers when using ${name} and how do you optimize spend?`,
    `How do you implement CI/CD pipelines that deploy to ${name}?`,
  ];
}

function devopsQuestions(name: string): string[] {
  return [
    `What is ${name} and what problem in the DevOps or infrastructure space does it solve?`,
    `Explain the core architecture or components of ${name} and how they interact.`,
    `How do you define infrastructure or configuration as code in ${name}?`,
    `How does ${name} handle state management, idempotency, and convergence?`,
    `What is ${name}'s approach to secrets management and sensitive configuration?`,
    `How does ${name} integrate with CI/CD pipelines for automated deployments?`,
    `How do you debug failures or rollback a bad deployment in ${name}?`,
    `What are the security best practices when using ${name} in a production environment?`,
    `How does ${name} scale for large or complex infrastructure across multiple environments?`,
    `What are common pitfalls or gotchas teams encounter when adopting ${name}?`,
  ];
}

function aiMlQuestions(name: string): string[] {
  return [
    `What is ${name} and what machine learning or AI problems is it designed to solve?`,
    `Explain the core abstractions or APIs in ${name} (models, tensors, pipelines, agents).`,
    `How does ${name} handle training: defining a model, specifying a loss, and running optimization?`,
    `What is ${name}'s approach to data ingestion, preprocessing, and batching?`,
    `How do you evaluate model performance in ${name} (metrics, validation sets, cross-validation)?`,
    `How does ${name} support model deployment and serving in a production environment?`,
    `What hardware acceleration does ${name} support (GPU, TPU) and how do you configure it?`,
    `How does ${name} handle distributed or multi-GPU training?`,
    `What are common debugging techniques for model training issues in ${name}?`,
    `How do you version and experiment-track models in a ${name}-based ML workflow?`,
  ];
}

function frontendQuestions(name: string): string[] {
  return [
    `What is ${name} and what UI problem or paradigm does it address?`,
    `Explain the component model in ${name} and how components communicate with each other.`,
    `How does ${name} handle state management for complex applications?`,
    `What is ${name}'s rendering strategy (CSR, SSR, SSG, ISR) and what are the tradeoffs?`,
    `How does ${name} handle routing and navigation in a single-page application?`,
    `How do you fetch data and handle loading/error states in a ${name} application?`,
    `What performance optimization techniques are specific to ${name} (memoization, virtualization, code splitting)?`,
    `How do you test components in ${name} (unit, integration, snapshot, e2e)?`,
    `How do you handle forms and form validation in ${name}?`,
    `What accessibility (a11y) practices should you follow when building UI with ${name}?`,
  ];
}

function apiQuestions(name: string): string[] {
  return [
    `What is ${name} and what problem in API design or communication does it address?`,
    `Explain the core protocol or schema definition in ${name}.`,
    `How does ${name} handle authentication and authorization for API consumers?`,
    `What are the error handling and status code conventions in ${name}?`,
    `How does ${name} handle versioning and backward compatibility?`,
    `Explain how ${name} handles performance: caching, batching, or pagination.`,
    `How do you document and generate client SDKs from a ${name} API?`,
    `What are the security considerations (injection, rate limiting, CORS) for a ${name} API?`,
    `How do you test a ${name} API (contract tests, integration tests, load tests)?`,
    `What monitoring and observability practices apply to a ${name} API in production?`,
  ];
}

function securityQuestions(name: string): string[] {
  return [
    `What is ${name} and what security threat or domain does it address?`,
    `Explain the core mechanism or model that ${name} uses to provide security.`,
    `How do you configure ${name} for a typical production web application?`,
    `What are common misconfigurations or pitfalls when using ${name}?`,
    `How does ${name} integrate with identity providers or authentication systems?`,
    `Explain how ${name} handles key management, certificate rotation, or credential lifecycle.`,
    `How do you audit and monitor events in ${name} to detect anomalies?`,
    `How does ${name} support compliance requirements (SOC 2, PCI-DSS, GDPR)?`,
    `How do you test ${name} configurations for vulnerabilities or weaknesses?`,
    `What are the performance implications of ${name} and how do you minimize overhead?`,
  ];
}

function defaultQuestions(name: string, category: string): string[] {
  return [
    `What is ${name} and what primary problem does it solve in the ${category} space?`,
    `Explain the core architecture or components of ${name} and how they work together.`,
    `What are the main alternatives to ${name} and when would you choose it over them?`,
    `How do you install, configure, and get started with ${name} for a new project?`,
    `What are the key configuration options or settings that affect ${name}'s behavior in production?`,
    `How does ${name} handle scalability, reliability, and high availability?`,
    `What observability does ${name} provide: metrics, logs, traces, or health endpoints?`,
    `What are the common performance bottlenecks in ${name} and how do you address them?`,
    `What security best practices should you follow when deploying ${name}?`,
    `What are the most common pitfalls or mistakes teams make when adopting ${name}?`,
  ];
}

// ── Public generator ──────────────────────────────────────────────────────

export function generateGenericInterviewSheet(
  name: string,
  slug: string,
  categorySlug: string,
  categoryLabel: string,
): InterviewSheetSpec {
  const accentHex = getAccent(categorySlug);
  const subtitle  = `Top 10 ${name} Interview Questions - ${categoryLabel}`;

  let questions: string[];
  const c = categorySlug.toLowerCase();

  if (c.includes("language") || c === "programming-languages") {
    questions = langQuestions(name);
  } else if (c.includes("database") || c.includes("db") || c.includes("data-store") || c.includes("sql") || c.includes("nosql")) {
    questions = dbQuestions(name);
  } else if (c.includes("cloud")) {
    questions = cloudQuestions(name);
  } else if (c.includes("devops") || c.includes("kubernetes") || c.includes("infrastructure") || c.includes("ci-cd")) {
    questions = devopsQuestions(name);
  } else if (c.includes("ai") || c.includes("ml") || c.includes("llm") || c.includes("generative")) {
    questions = aiMlQuestions(name);
  } else if (c.includes("frontend") || c.includes("mobile") || c.includes("ui")) {
    questions = frontendQuestions(name);
  } else if (c.includes("api") || c.includes("graphql") || c.includes("grpc") || c.includes("rest")) {
    questions = apiQuestions(name);
  } else if (c.includes("security") || c.includes("auth")) {
    questions = securityQuestions(name);
  } else {
    questions = defaultQuestions(name, categoryLabel);
  }

  return { name, subtitle, accentHex, questions };
}
