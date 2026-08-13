import type { PracticeSheetSpec, QAPair } from "../practice-pdf-builder";

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
  "default":               "#4F46E5",
};

function getAccent(slug: string): string {
  for (const k of Object.keys(ACCENT)) {
    if (slug.includes(k) || k.includes(slug)) return ACCENT[k];
  }
  return ACCENT.default;
}

// ── Category-specific Q&A sets ─────────────────────────────────────────────

function langPairs(n: string): QAPair[] {
  return [
    { q: `What are the primary design goals of ${n}?`,
      a: `${n} was designed with specific priorities around performance, safety, or developer productivity depending on its domain. These goals shape its syntax, type system, and standard library choices.` },
    { q: `How does ${n} handle type checking: static or dynamic?`,
      a: `${n} uses its type system to catch errors at compile time (static) or at runtime (dynamic). This affects refactoring safety, tooling support, and the kinds of bugs that reach production.` },
    { q: `How does ${n} manage memory?`,
      a: `${n} uses one of three approaches: manual allocation/deallocation, a garbage collector that periodically reclaims unreachable objects, or automatic reference counting. Each has different latency and throughput tradeoffs.` },
    { q: `What is ${n}'s concurrency model?`,
      a: `${n} supports concurrency through threads, coroutines, async/await, or an actor model. The choice determines how I/O-bound and CPU-bound workloads are scaled and how shared state is safely accessed.` },
    { q: `How are packages and dependencies managed in ${n}?`,
      a: `${n} uses a package manager and a manifest file to declare dependencies and version constraints. A lock file pins exact versions to ensure reproducible builds across environments.` },
    { q: `How does ${n} implement object-oriented or functional programming?`,
      a: `${n} supports classes and inheritance for OOP, or first-class functions and immutability for FP, or both. Many modern ${n} programs blend both paradigms depending on the problem.` },
    { q: `How does ${n} handle errors?`,
      a: `${n} surfaces errors via exceptions, Result/Either types, or error return values. The choice impacts whether errors are checked at compile time and how calling code is structured.` },
    { q: `What testing tools are commonly used in ${n}?`,
      a: `${n} has a standard or widely adopted test runner and assertion library. Tests are typically organized into unit, integration, and end-to-end layers with coverage reporting built in or via plugins.` },
    { q: `What makes ${n} well-suited for its target domain?`,
      a: `${n} excels in its domain due to a combination of performance characteristics, ecosystem maturity, language ergonomics, and community support that makes common tasks simple.` },
    { q: `What are common performance pitfalls in ${n}?`,
      a: `Typical performance issues in ${n} include excessive allocations, blocking the main thread or event loop, O(n^2) data structures, and missing caching. Profiling and benchmarking tools are available to diagnose them.` },
  ];
}

function dbPairs(n: string): QAPair[] {
  return [
    { q: `What type of database is ${n} and what are its core strengths?`,
      a: `${n} is a relational, document, key-value, graph, or time-series store. Its strengths — such as ACID guarantees, horizontal scale, or flexible schema — guide the workloads it is best suited for.` },
    { q: `How does ${n} guarantee consistency and handle transactions?`,
      a: `${n} provides either full ACID transactions or eventual consistency depending on its CAP theorem positioning. Transaction support varies from none (simple K/V stores) to serializable isolation (relational DBs).` },
    { q: `What index types does ${n} support and when do you use each?`,
      a: `${n} offers B-tree, hash, full-text, spatial, or composite indexes depending on the engine. Choose based on query patterns: B-tree for range queries, hash for equality lookups, full-text for search.` },
    { q: `How do you design a schema or data model in ${n}?`,
      a: `Schema design in ${n} involves normalizing relations (relational DB) or denormalizing for access patterns (document/key-value). Understanding query needs upfront prevents costly migrations later.` },
    { q: `How does ${n} scale horizontally?`,
      a: `${n} scales via replication (read replicas) for read-heavy workloads and sharding (partitioning data by key) for write-heavy ones. Some ${n} implementations handle this automatically; others require manual configuration.` },
    { q: `How do you monitor and tune slow queries in ${n}?`,
      a: `${n} provides a slow query log, explain/explain plan, or profiling tools to surface inefficient queries. Common fixes include adding indexes, rewriting queries, or increasing cache size.` },
    { q: `What backup and restore strategies does ${n} support?`,
      a: `${n} supports logical backups (export SQL or BSON), physical backups (filesystem snapshot), and continuous replication to a standby. Point-in-time recovery requires WAL/oplog archiving on top of backups.` },
    { q: `How do you handle schema migrations in ${n}?`,
      a: `Schema migrations in ${n} are managed with versioned migration files applied in order by a migration tool. Migrations should be idempotent and tested in staging before production to avoid downtime.` },
    { q: `What security features does ${n} provide?`,
      a: `${n} supports role-based access control, encrypted connections (TLS), encryption at rest, and audit logging. Always restrict user privileges to the minimum needed and disable anonymous access in production.` },
    { q: `What are common anti-patterns when using ${n} in production?`,
      a: `Common mistakes include selecting all columns instead of needed fields, missing indexes on frequently queried columns, running migrations without backups, and storing large blobs directly in the database instead of object storage.` },
  ];
}

function cloudPairs(n: string): QAPair[] {
  return [
    { q: `What is ${n} and what is its primary purpose in its cloud ecosystem?`,
      a: `${n} is a managed cloud service that handles a specific infrastructure concern (compute, storage, messaging, AI). Using it shifts operational burden to the cloud provider while you focus on application logic.` },
    { q: `How does IAM work with ${n}?`,
      a: `Access to ${n} is controlled via IAM roles and policies. Attach the minimum required permissions to a service account or role. Avoid long-lived access keys; use instance roles or Workload Identity Federation instead.` },
    { q: `How do you monitor ${n} in production?`,
      a: `${n} emits metrics to the cloud provider's monitoring service (CloudWatch, Cloud Monitoring, Azure Monitor). Set alerts on key metrics (error rate, latency, capacity). Use distributed tracing to correlate across services.` },
    { q: `How do you scale ${n} to handle variable load?`,
      a: `${n} supports auto-scaling policies based on CPU, queue depth, or custom metrics. Set minimum and maximum capacity. Horizontal scaling (more instances) is generally preferred over vertical for cloud workloads.` },
    { q: `How do you secure ${n} in production?`,
      a: `Place ${n} in a private subnet with no public endpoint where possible. Use VPC security groups or firewall rules to allow only required traffic. Encrypt data at rest and in transit. Rotate credentials regularly.` },
    { q: `How do you manage configuration and secrets for ${n}?`,
      a: `Store sensitive values in a managed secret store (AWS Secrets Manager, GCP Secret Manager, Azure Key Vault). Inject secrets as environment variables at runtime, never bake them into container images or source code.` },
    { q: `What are the main cost drivers for ${n} and how do you optimize them?`,
      a: `Cost in ${n} typically comes from compute hours, data transfer, storage, and request counts. Right-size instances, use reserved capacity for steady-state workloads, and enable lifecycle policies to expire old data.` },
    { q: `How do you implement high availability with ${n}?`,
      a: `Deploy ${n} across multiple availability zones. Use managed replicas or active-active configurations. Implement health checks and automatic failover. Test resilience regularly with chaos engineering or failover drills.` },
    { q: `How does ${n} integrate with a CI/CD pipeline?`,
      a: `CI/CD pipelines use the cloud CLI or SDK to deploy updates to ${n} after tests pass. Infrastructure-as-code (Terraform, CDK) defines ${n} configuration as version-controlled code deployed via the pipeline.` },
    { q: `What are common pitfalls when first adopting ${n}?`,
      a: `Common mistakes include misconfigured IAM policies (too permissive), no cost alerting, deploying only in one availability zone, and missing backups. Read the service SLA carefully to understand what the cloud provider guarantees.` },
  ];
}

function devopsPairs(n: string): QAPair[] {
  return [
    { q: `What problem does ${n} solve in DevOps or infrastructure?`,
      a: `${n} addresses a specific concern — provisioning, configuration management, orchestration, or CI/CD — by automating manual steps that are error-prone, slow, or not reproducible when done by hand.` },
    { q: `What is ${n}'s core architecture?`,
      a: `${n} has a control plane that stores desired state and a data plane (agents or push-based SSH) that enforces it. Understanding this distinction clarifies where configuration is evaluated and where changes are applied.` },
    { q: `How does ${n} define infrastructure or configuration as code?`,
      a: `${n} uses declarative files (YAML, HCL, or a DSL) to express desired state. A plan/diff phase shows what will change before applying. Version-controlling these files enables peer review and rollback.` },
    { q: `How does ${n} ensure idempotency?`,
      a: `${n} operations are designed to produce the same result when run multiple times. Applying the same config twice converges to the desired state rather than creating duplicate resources. This makes automation safe to re-run.` },
    { q: `How do you handle secrets in ${n}?`,
      a: `Secrets should never be stored in plain text in ${n} config files. Use a secrets backend (Vault, AWS Secrets Manager) and inject values at runtime via environment variables or encrypted vaults supported by the tool.` },
    { q: `How does ${n} integrate with CI/CD pipelines?`,
      a: `CI/CD pipelines call ${n} in automated steps: plan on a pull request to preview changes and apply on merge to main. Approval gates can require a human to review the plan before changes go to production.` },
    { q: `How do you debug a failed ${n} deployment?`,
      a: `Check ${n}'s logs for the specific error message and the resource that failed. For infrastructure tools, re-run with increased verbosity (-v, --debug). Review the state file or event history to understand what changed before the failure.` },
    { q: `What are security best practices for ${n}?`,
      a: `Rotate credentials used by ${n}, restrict network access to its control plane, enable audit logging of all operations, and use least-privilege service accounts. Never run ${n} with admin credentials in production.` },
    { q: `How does ${n} scale for large environments?`,
      a: `Large ${n} deployments use workspaces or namespaces to isolate environments, remote state backends for team collaboration, and modular code to avoid a single monolithic config that is slow to plan/apply.` },
    { q: `What are common mistakes teams make when adopting ${n}?`,
      a: `Common pitfalls include storing secrets in plain text config, skipping the plan step before apply, not reviewing state drift, and not having a rollback strategy when a deployment fails partway through.` },
  ];
}

function aiMlPairs(n: string): QAPair[] {
  return [
    { q: `What is ${n} and what AI/ML use case is it designed for?`,
      a: `${n} is a framework or service targeting a specific AI/ML domain — training neural networks, building LLM pipelines, deploying models, or orchestrating agents. Understanding its scope helps you know when to use it vs alternatives.` },
    { q: `What are the core abstractions in ${n}?`,
      a: `${n} organizes work around abstractions like models, tensors, pipelines, agents, or embeddings. Learning these core types is the first step to using the framework effectively.` },
    { q: `How does ${n} handle training or inference?`,
      a: `For training, ${n} defines a model architecture, a loss function, and an optimizer. For inference, a trained model processes input data and returns predictions. Batch processing and hardware acceleration are key performance levers.` },
    { q: `How does ${n} manage data preprocessing?`,
      a: `${n} provides data loaders, tokenizers, or pipeline components that transform raw data into the tensor or embedding format the model expects. Proper preprocessing is critical for model correctness and training speed.` },
    { q: `How does ${n} support GPU/TPU acceleration?`,
      a: `${n} detects available accelerators and moves computation to them. Specify the device explicitly (cuda, mps, tpu) to avoid accidentally running expensive operations on CPU. Mixed-precision (fp16/bf16) further reduces memory and increases throughput.` },
    { q: `How do you evaluate a model's performance in ${n}?`,
      a: `Evaluation uses a held-out validation set and metrics (accuracy, F1, BLEU, perplexity) appropriate to the task. Monitor both training and validation metrics to detect overfitting. Use a test set only at the very end to report final results.` },
    { q: `How do you deploy a model trained with ${n}?`,
      a: `Export the model to a portable format (ONNX, TorchScript, SavedModel). Serve it via a model server (TorchServe, TF Serving, Triton) or embed it in an API endpoint. Monitor inference latency and drift in production.` },
    { q: `How does ${n} handle distributed or multi-GPU training?`,
      a: `${n} provides data-parallel or model-parallel strategies to split work across GPUs. Data parallelism replicates the model on each GPU and averages gradients. Model parallelism splits layers across devices for models too large for one GPU.` },
    { q: `How do you track experiments and versions in ${n}?`,
      a: `Use an experiment tracker (MLflow, Weights & Biases, Comet) alongside ${n} to log hyperparameters, metrics, and artifacts. Track the code version and data version for full reproducibility.` },
    { q: `What are common pitfalls when using ${n} in production?`,
      a: `Common issues include training-serving skew (different preprocessing), missing input validation, no latency SLA enforcement, models not versioned, and no process to retrain on drifted data distributions.` },
  ];
}

function frontendPairs(n: string): QAPair[] {
  return [
    { q: `What is ${n} and what UI problem does it address?`,
      a: `${n} is a component-based library or framework for building interactive user interfaces. It provides a reactive programming model where UI updates automatically when underlying state changes, reducing imperative DOM manipulation.` },
    { q: `How do components communicate in ${n}?`,
      a: `Parent-to-child communication uses props (one-way data flow). Child-to-parent uses events or callbacks. Siblings share state via a common parent or a global store (Redux, Pinia, Signals). Avoid prop-drilling by using context or state management.` },
    { q: `How does ${n} manage state for complex applications?`,
      a: `Local component state handles UI-only concerns. Shared state (user auth, cart) lives in a global store with a predictable update pattern (actions, reducers, or mutations). Server state (API data) is managed by libraries like React Query or SWR.` },
    { q: `What rendering strategies does ${n} support?`,
      a: `${n} supports CSR (browser renders), SSR (server renders HTML on each request), SSG (pages generated at build time), and ISR (pages regenerated on a schedule or on-demand). Choose based on SEO requirements and data freshness needs.` },
    { q: `How does ${n} handle client-side routing?`,
      a: `${n}'s router (built-in or a library like React Router) maps URL paths to components without page reloads. Dynamic segments (/users/:id) are parsed and passed as params. Guards or middleware can protect routes requiring authentication.` },
    { q: `How do you fetch data and handle loading/error states in ${n}?`,
      a: `Use a data fetching hook or library that returns { data, isLoading, error }. Show a skeleton or spinner while loading, an error message on failure, and the data on success. Avoid fetching in render to prevent waterfalls.` },
    { q: `What performance techniques apply to ${n} applications?`,
      a: `Code splitting loads only the code needed for the current route. Memoization (useMemo, React.memo) prevents unnecessary re-renders. Virtualization renders only visible list items. Images use lazy loading and next-gen formats (WebP, AVIF).` },
    { q: `How do you handle forms and validation in ${n}?`,
      a: `${n} manages form state with controlled inputs or a form library (React Hook Form, VeeValidate). Validation runs on blur or submit, displaying field-level error messages. Schema libraries (Zod, Yup) define validation rules declaratively.` },
    { q: `How do you test ${n} components?`,
      a: `Unit tests check individual component rendering and interactions using a component testing library. Integration tests verify multi-component flows. End-to-end tests (Playwright, Cypress) simulate real user journeys in a browser.` },
    { q: `What accessibility (a11y) practices are essential in ${n}?`,
      a: `Use semantic HTML (button, nav, main) instead of divs with click handlers. Ensure keyboard navigability (tab order, focus management). Add ARIA roles and labels for dynamic content. Test with a screen reader and run axe or Lighthouse audits.` },
  ];
}

function apiPairs(n: string): QAPair[] {
  return [
    { q: `What is ${n} and what API communication problem does it solve?`,
      a: `${n} defines a protocol or standard for structured communication between services. It addresses concerns like schema definition, payload format, versioning, or transport efficiency that plain HTTP with ad-hoc JSON does not solve on its own.` },
    { q: `How does ${n} define its schema or contract?`,
      a: `${n} uses an IDL or schema language to declare types, operations, and their inputs and outputs. This schema is the single source of truth from which documentation, validation, and client SDKs can be auto-generated.` },
    { q: `How does ${n} handle authentication?`,
      a: `${n} APIs commonly use Bearer tokens (JWT/OAuth2) in the Authorization header or API keys in custom headers. Transport-level security (TLS) is always required. Additional mechanisms (mTLS, HMAC) apply to high-trust scenarios.` },
    { q: `How does ${n} handle API versioning?`,
      a: `Common versioning strategies include URL path (/v1/users), request headers (Accept: application/vnd.api+v2+json), and query params (?version=2). ${n} prefers one strategy and maintains backward compatibility within a major version.` },
    { q: `How does ${n} handle errors and status codes?`,
      a: `${n} uses HTTP status codes (200 OK, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Internal Server Error) combined with a structured error body containing a code, message, and optional details field.` },
    { q: `How do you implement pagination in a ${n} API?`,
      a: `Cursor-based pagination (next_cursor token) is preferred for large or frequently-updated datasets because it is stable. Offset-based pagination (page, limit) is simpler but can skip or duplicate rows if data changes between requests.` },
    { q: `How do you document a ${n} API?`,
      a: `${n} APIs use an API specification (OpenAPI, AsyncAPI, GraphQL SDL) to generate interactive documentation (Swagger UI, ReDoc, GraphiQL). Good docs include examples, error codes, and authentication instructions.` },
    { q: `How do you test a ${n} API?`,
      a: `Contract testing (Pact) verifies the provider matches the consumer's schema. Integration tests call real endpoints against a test environment. Load tests (k6, Gatling) verify performance under production-like concurrency.` },
    { q: `How do you protect a ${n} API from abuse?`,
      a: `Rate limiting (tokens per IP per minute) prevents DoS. Input validation rejects malformed requests before they reach business logic. Output filtering (response schema) prevents accidental data leakage. Monitor for anomalous usage patterns.` },
    { q: `What monitoring and observability should a ${n} API have?`,
      a: `Instrument request count, latency histograms, and error rate with Prometheus or a cloud metrics system. Add distributed tracing with OpenTelemetry. Log structured request/response data. Set SLOs and alert when SLIs breach them.` },
  ];
}

function securityPairs(n: string): QAPair[] {
  return [
    { q: `What is ${n} and what security threat does it address?`,
      a: `${n} is a security tool, protocol, or service that mitigates a specific class of threats — authentication bypass, data exfiltration, network intrusion, or credential theft. Understanding the threat model is prerequisite to correct configuration.` },
    { q: `What is the core mechanism ${n} uses to provide security?`,
      a: `${n} uses one or more security primitives: asymmetric cryptography, symmetric encryption, certificate chains, role-based access control, or anomaly detection. These primitives are combined to provide the claimed security properties.` },
    { q: `How do you configure ${n} for a production web application?`,
      a: `Production configuration requires strong cipher suites, certificate rotation, revocation checking, and minimal permission grants. Use a well-reviewed configuration reference (CIS Benchmark, OWASP) rather than default settings.` },
    { q: `What are the most common ${n} misconfigurations to avoid?`,
      a: `Common mistakes include using outdated algorithms (MD5, SHA1, RC4), leaving default credentials, ignoring certificate expiry, granting excessive permissions, and not testing the config before going live in production.` },
    { q: `How does ${n} integrate with identity providers?`,
      a: `${n} delegates identity verification to an IdP via SAML, OIDC, or LDAP. Users authenticate once (SSO) and receive a token that ${n} validates. This centralizes user management and avoids duplicating auth logic across services.` },
    { q: `How do you audit and monitor ${n} events?`,
      a: `Enable ${n}'s audit log and stream it to a SIEM (Splunk, Elastic SIEM). Define alert rules for high-severity events: repeated failed logins, privilege escalation, and unusual access patterns. Review logs regularly.` },
    { q: `How does ${n} handle key or credential rotation?`,
      a: `Automate rotation using a secrets manager that generates new credentials and updates consumers transparently. Test rotation in staging. Have a break-glass procedure for emergency rotation when a credential is compromised.` },
    { q: `How does ${n} help meet compliance requirements?`,
      a: `${n} generates audit trails, enforces access policies, and provides encryption that satisfy controls required by SOC 2, PCI-DSS, HIPAA, and GDPR. Map ${n}'s capabilities to the specific framework controls in your compliance program.` },
    { q: `How do you test your ${n} configuration for weaknesses?`,
      a: `Run an automated scanner (SSL Labs for TLS, ScoutSuite for cloud IAM, OWASP ZAP for web app auth) against your ${n} config. Conduct penetration tests annually and after significant config changes.` },
    { q: `What are the performance implications of ${n} and how do you minimize them?`,
      a: `Cryptographic operations, token validation, and authorization checks add latency. Mitigate with session caching, hardware-accelerated TLS (AES-NI), connection reuse, and async authorization where possible.` },
  ];
}

function defaultPairs(n: string, category: string): QAPair[] {
  return [
    { q: `What is ${n} and what problem in ${category} does it solve?`,
      a: `${n} is a tool or platform that automates or simplifies a specific concern in the ${category} domain, reducing manual effort and operational complexity for engineering teams.` },
    { q: `What are the core components or concepts in ${n}?`,
      a: `${n} has key building blocks that work together: a configuration layer defines intent, a runtime layer enforces it, and an API or CLI layer allows operators to manage and observe the system.` },
    { q: `How does ${n} compare to its main alternatives?`,
      a: `${n} trades off simplicity against feature richness differently than its alternatives. Choose ${n} when its specific strengths — performance, ecosystem, or ease of use — align with your team's primary constraints.` },
    { q: `How do you get started with ${n} for a new project?`,
      a: `Install ${n} via its package manager or binary release. Follow the quickstart to initialize a project, configure the minimal required settings, and run the default command to verify the setup works end-to-end.` },
    { q: `What configuration options most affect ${n}'s behavior in production?`,
      a: `Production-critical settings typically include concurrency limits, timeout values, retry policies, resource limits, and logging levels. Review the official production hardening guide before deploying.` },
    { q: `How does ${n} handle reliability and high availability?`,
      a: `${n} provides HA through leader election, replication, or stateless horizontal scaling. Deploy at least two instances across availability zones and configure health checks for automatic failover.` },
    { q: `What observability does ${n} provide out of the box?`,
      a: `${n} exposes metrics (Prometheus endpoint or built-in dashboard), structured logs, and optionally distributed traces. Define SLOs on the key metrics and alert before users are affected.` },
    { q: `What are common performance bottlenecks in ${n}?`,
      a: `Performance bottlenecks typically stem from misconfigured connection pools, large payload sizes, insufficient worker threads, or missing caches. Profile with built-in diagnostics before optimizing.` },
    { q: `What security best practices apply when running ${n}?`,
      a: `Run ${n} with the principle of least privilege, enable TLS for all communication, use a secrets manager for credentials, and keep the software patched to the latest stable release.` },
    { q: `What mistakes do teams commonly make when adopting ${n}?`,
      a: `Common pitfalls include skipping the documentation and learning the API by trial and error, using default configurations in production, lacking a runbook for operational issues, and not testing failover scenarios.` },
  ];
}

// ── Public generator ──────────────────────────────────────────────────────

export function generateGenericPracticeSheet(
  name: string,
  slug: string,
  categorySlug: string,
  categoryLabel: string,
): PracticeSheetSpec {
  const accentHex = getAccent(categorySlug);
  const subtitle  = `10 conceptual Q&A — ${categoryLabel}`;
  const c = categorySlug.toLowerCase();

  let pairs: QAPair[];
  if (c.includes("language") || c === "programming-languages") {
    pairs = langPairs(name);
  } else if (c.includes("database") || c.includes("db") || c.includes("sql") || c.includes("nosql")) {
    pairs = dbPairs(name);
  } else if (c.includes("cloud")) {
    pairs = cloudPairs(name);
  } else if (c.includes("devops") || c.includes("kubernetes") || c.includes("infrastructure") || c.includes("ci")) {
    pairs = devopsPairs(name);
  } else if (c.includes("ai") || c.includes("ml") || c.includes("llm") || c.includes("generative")) {
    pairs = aiMlPairs(name);
  } else if (c.includes("frontend") || c.includes("mobile") || c.includes("ui")) {
    pairs = frontendPairs(name);
  } else if (c.includes("api") || c.includes("graphql") || c.includes("grpc")) {
    pairs = apiPairs(name);
  } else if (c.includes("security") || c.includes("auth")) {
    pairs = securityPairs(name);
  } else {
    pairs = defaultPairs(name, categoryLabel);
  }

  return { name, subtitle, accentHex, pairs };
}
