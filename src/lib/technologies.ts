export interface TechItem {
  name: string;
  slug: string;
}

export interface TechSubcategory {
  name: string;
  items: TechItem[];
}

export interface TechCategory {
  label: string;
  slug: string;
  icon: string;
  color: string;        // Tailwind gradient classes
  description: string;
  subcategories: TechSubcategory[];
}

export function slugifyTech(name: string): string {
  return name
    .toLowerCase()
    .replace(/\+\+/g, "pp")
    .replace(/#/g, "sharp")
    .replace(/[./&]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function i(name: string): TechItem {
  return { name, slug: slugifyTech(name) };
}

export const TECH_DATA: TechCategory[] = [
  {
    label: "AI Agents",
    slug: "ai-agents",
    icon: "🤖",
    color: "from-blue-600 to-indigo-700",
    description: "Autonomous AI systems that perceive, reason, plan, and act using tools and external APIs to accomplish complex goals.",
    subcategories: [
      { name: "Concepts", items: [i("AI Agents"), i("Agentic AI"), i("Tool Calling"), i("Function Calling"), i("MCP"), i("Multi-Agent Systems"), i("Agent Memory"), i("Planning"), i("Reasoning"), i("ReAct")] },
      { name: "Frameworks", items: [i("LangGraph"), i("CrewAI"), i("AutoGen"), i("Semantic Kernel"), i("OpenAI Agents SDK"), i("LlamaIndex")] },
    ],
  },
  {
    label: "AI/ML",
    slug: "ai-ml",
    icon: "🧠",
    color: "from-violet-600 to-purple-700",
    description: "Machine learning frameworks, deep learning architectures, and AI technologies powering modern intelligent systems.",
    subcategories: [
      { name: "ML Frameworks", items: [i("TensorFlow"), i("PyTorch"), i("Scikit-learn"), i("XGBoost"), i("LightGBM"), i("Keras")] },
      { name: "Deep Learning", items: [i("CNN"), i("RNN"), i("LSTM"), i("GRU"), i("Transformer"), i("GAN"), i("Autoencoder"), i("Diffusion Models")] },
      { name: "AI Technologies", items: [i("LLM"), i("SLM"), i("Generative AI"), i("Multimodal AI"), i("Computer Vision"), i("NLP"), i("Speech AI"), i("Reinforcement Learning"), i("Fine-tuning"), i("Distillation"), i("Quantization")] },
    ],
  },
  {
    label: "API Technologies",
    slug: "api-technologies",
    icon: "🔌",
    color: "from-orange-500 to-amber-600",
    description: "API styles, tools, and gateways that enable communication between services and power modern integration architectures.",
    subcategories: [
      { name: "API Styles", items: [i("REST"), i("SOAP"), i("GraphQL"), i("gRPC"), i("WebSocket"), i("Server-Sent Events"), i("Webhooks")] },
      { name: "API Tools", items: [i("Postman"), i("Swagger/OpenAPI"), i("Insomnia"), i("GraphQL Playground")] },
      { name: "API Gateways", items: [i("Kong"), i("Apache APISIX"), i("NGINX"), i("AWS API Gateway"), i("Azure API Management"), i("Apigee"), i("Traefik")] },
    ],
  },
  {
    label: "Architecture",
    slug: "architecture",
    icon: "🏗️",
    color: "from-slate-600 to-gray-700",
    description: "Software architecture patterns and enterprise design principles for building scalable, maintainable systems.",
    subcategories: [
      { name: "Application Architecture", items: [i("Monolithic Architecture"), i("Modular Monolith"), i("Microservices"), i("Serverless"), i("Event-Driven Architecture"), i("Distributed Systems"), i("SOA"), i("Hexagonal Architecture"), i("Clean Architecture"), i("Layered Architecture")] },
      { name: "Enterprise Patterns", items: [i("Domain-Driven Design"), i("CQRS"), i("Event Sourcing"), i("Saga"), i("Strangler Pattern"), i("API Gateway"), i("Backend for Frontend"), i("Event-Driven Architecture")] },
    ],
  },
  {
    label: "BI & Visualization",
    slug: "bi-visualization",
    icon: "📊",
    color: "from-pink-600 to-rose-700",
    description: "Business intelligence platforms and data visualization tools that turn raw data into actionable insights and dashboards.",
    subcategories: [
      { name: "BI Platforms", items: [i("Power BI"), i("Tableau"), i("Looker"), i("Qlik"), i("Apache Superset")] },
      { name: "Monitoring & Visualization", items: [i("Grafana"), i("Kibana")] },
    ],
  },
  {
    label: "Backend Technologies",
    slug: "backend-technologies",
    icon: "⚙️",
    color: "from-green-600 to-teal-700",
    description: "Server-side frameworks and libraries across Java, Python, Node.js, .NET, Go, PHP, and Ruby for building robust APIs and services.",
    subcategories: [
      { name: "Java", items: [i("Spring"), i("Spring Boot"), i("Spring Cloud"), i("Spring Security"), i("Hibernate"), i("JPA"), i("Jakarta EE"), i("Quarkus"), i("Micronaut")] },
      { name: "Python", items: [i("Django"), i("Flask"), i("FastAPI"), i("Tornado"), i("Celery")] },
      { name: "JavaScript / TypeScript", items: [i("Node.js"), i("Express.js"), i("NestJS"), i("Fastify"), i("Koa")] },
      { name: ".NET", items: [i("ASP.NET Core"), i(".NET"), i("Entity Framework Core"), i("Blazor")] },
      { name: "Go", items: [i("Gin"), i("Echo"), i("Fiber"), i("Chi")] },
      { name: "PHP", items: [i("Laravel"), i("Symfony"), i("CodeIgniter")] },
      { name: "Ruby", items: [i("Ruby on Rails"), i("Sinatra")] },
    ],
  },
  {
    label: "Blockchain/Web3",
    slug: "blockchain-web3",
    icon: "⛓️",
    color: "from-yellow-500 to-orange-600",
    description: "Distributed ledger platforms, smart contract development, and decentralized application technologies.",
    subcategories: [
      { name: "Platforms", items: [i("Bitcoin"), i("Ethereum"), i("Solana"), i("Hyperledger")] },
      { name: "Development", items: [i("Solidity")] },
      { name: "Concepts", items: [i("Smart Contracts"), i("NFTs"), i("DeFi"), i("Web3"), i("Wallets"), i("Distributed Ledger")] },
    ],
  },
  {
    label: "Build & Package Management",
    slug: "build-package-management",
    icon: "📦",
    color: "from-stone-500 to-amber-700",
    description: "Build tools and package managers across Java, JavaScript, Python, .NET, and C/C++ ecosystems.",
    subcategories: [
      { name: "Java", items: [i("Maven"), i("Gradle")] },
      { name: "JavaScript", items: [i("npm"), i("Yarn"), i("pnpm"), i("Bun")] },
      { name: "Python", items: [i("pip"), i("Poetry"), i("uv"), i("Conda")] },
      { name: ".NET", items: [i("NuGet")] },
      { name: "C/C++", items: [i("CMake"), i("Make"), i("Conan"), i("vcpkg")] },
    ],
  },
  {
    label: "Caching",
    slug: "caching",
    icon: "⚡",
    color: "from-red-500 to-orange-600",
    description: "In-memory caching solutions and distributed cache systems that accelerate application performance.",
    subcategories: [
      { name: "Caching Technologies", items: [i("Redis"), i("Memcached"), i("Hazelcast"), i("Ehcache"), i("Caffeine"), i("Varnish")] },
    ],
  },
  {
    label: "Cloud",
    slug: "cloud",
    icon: "☁️",
    color: "from-cyan-600 to-blue-700",
    description: "Cloud platforms and managed services from AWS, Azure, and Google Cloud for compute, storage, data, and AI workloads.",
    subcategories: [
      { name: "AWS", items: [i("EC2"), i("ECS"), i("EKS"), i("Lambda"), i("S3"), i("RDS"), i("DynamoDB"), i("Aurora"), i("ElastiCache"), i("CloudFront"), i("API Gateway"), i("SQS"), i("SNS"), i("Kinesis"), i("EventBridge"), i("CloudFormation"), i("Bedrock")] },
      { name: "Azure", items: [i("Azure VM"), i("AKS"), i("Azure Functions"), i("Blob Storage"), i("Azure SQL"), i("Cosmos DB"), i("Service Bus"), i("Event Hubs"), i("Azure DevOps"), i("Azure OpenAI"), i("API Management")] },
      { name: "Google Cloud", items: [i("Compute Engine"), i("GKE"), i("Cloud Run"), i("Cloud Functions"), i("Cloud Storage"), i("Cloud SQL"), i("BigQuery"), i("Pub/Sub"), i("Vertex AI"), i("Apigee")] },
    ],
  },
  {
    label: "Content Management",
    slug: "content-management",
    icon: "📝",
    color: "from-teal-600 to-green-700",
    description: "CMS platforms and modern web delivery approaches for managing and publishing digital content at scale.",
    subcategories: [
      { name: "CMS", items: [i("WordPress"), i("Drupal"), i("Adobe Experience Manager"), i("Contentful"), i("Strapi"), i("Sanity"), i("Sitecore"), i("Optimizely")] },
      { name: "Modern Web", items: [i("Edge Delivery Services"), i("Headless CMS"), i("Jamstack"), i("CDN"), i("Serverless"), i("Edge Computing")] },
    ],
  },
  {
    label: "Data Engineering",
    slug: "data-engineering",
    icon: "🔧",
    color: "from-indigo-600 to-blue-700",
    description: "ETL/ELT pipelines, big data processing frameworks, and data transformation tools for building reliable data infrastructure.",
    subcategories: [
      { name: "ETL / ELT", items: [i("Apache Airflow"), i("Apache NiFi"), i("Talend"), i("Informatica"), i("dbt"), i("AWS Glue"), i("Azure Data Factory"), i("Google Dataflow")] },
      { name: "Big Data", items: [i("Apache Hadoop"), i("Apache Spark"), i("Apache Flink"), i("Apache Beam"), i("Hive"), i("Presto"), i("Trino")] },
      { name: "Data Processing", items: [i("PySpark"), i("Spark SQL"), i("Kafka Streams"), i("Flink"), i("Pandas"), i("Polars"), i("NumPy")] },
    ],
  },
  {
    label: "Data Platforms",
    slug: "data-platforms",
    icon: "🗄️",
    color: "from-blue-600 to-cyan-700",
    description: "Cloud data warehouses and data lake/lakehouse platforms for storing, querying, and analyzing large-scale datasets.",
    subcategories: [
      { name: "Data Warehouse", items: [i("Snowflake"), i("Google BigQuery"), i("Amazon Redshift"), i("Azure Synapse"), i("Teradata"), i("Databricks SQL")] },
      { name: "Data Lake / Lakehouse", items: [i("Databricks"), i("Delta Lake"), i("Apache Iceberg"), i("Apache Hudi"), i("Amazon S3"), i("Azure Data Lake Storage"), i("Google Cloud Storage")] },
    ],
  },
  {
    label: "Databases",
    slug: "databases",
    icon: "💾",
    color: "from-emerald-600 to-teal-700",
    description: "Relational and NoSQL databases spanning SQL, document, key-value, wide-column, graph, and time-series storage models.",
    subcategories: [
      { name: "Relational / SQL", items: [i("PostgreSQL"), i("MySQL"), i("MariaDB"), i("Oracle Database"), i("Microsoft SQL Server"), i("IBM Db2"), i("SQLite"), i("CockroachDB")] },
      { name: "SQL Technologies", items: [i("SQL"), i("PL/SQL"), i("T-SQL"), i("JDBC"), i("ODBC"), i("JPA"), i("Hibernate")] },
      { name: "NoSQL — Document", items: [i("MongoDB"), i("CouchDB"), i("Amazon DocumentDB"), i("Firebase Firestore")] },
      { name: "NoSQL — Key-Value", items: [i("Redis"), i("Amazon DynamoDB"), i("Riak")] },
      { name: "NoSQL — Wide Column", items: [i("Apache Cassandra"), i("ScyllaDB"), i("HBase"), i("Google Bigtable")] },
      { name: "NoSQL — Graph", items: [i("Neo4j"), i("Amazon Neptune"), i("JanusGraph"), i("ArangoDB")] },
      { name: "NoSQL — Time Series", items: [i("InfluxDB"), i("TimescaleDB"), i("OpenTSDB")] },
    ],
  },
  {
    label: "Desktop",
    slug: "desktop",
    icon: "🖥️",
    color: "from-gray-600 to-slate-700",
    description: "Frameworks and toolkits for building native and cross-platform desktop applications on Windows, macOS, and Linux.",
    subcategories: [
      { name: "Desktop Development", items: [i(".NET/WPF"), i("WinUI"), i("Windows Forms"), i("JavaFX"), i("Electron"), i("Qt"), i("GTK"), i("Tauri")] },
    ],
  },
  {
    label: "DevOps",
    slug: "devops",
    icon: "🔄",
    color: "from-rose-600 to-red-700",
    description: "Container runtimes, orchestration platforms, CI/CD pipelines, and infrastructure-as-code tools for modern DevOps workflows.",
    subcategories: [
      { name: "Containers", items: [i("Docker"), i("Podman"), i("containerd"), i("CRI-O")] },
      { name: "Orchestration", items: [i("Kubernetes"), i("OpenShift"), i("Amazon EKS"), i("Azure AKS"), i("Google GKE")] },
      { name: "CI / CD", items: [i("Jenkins"), i("GitHub Actions"), i("GitLab CI/CD"), i("Azure DevOps"), i("CircleCI"), i("Argo CD"), i("Tekton")] },
      { name: "Infrastructure as Code", items: [i("Terraform"), i("OpenTofu"), i("AWS CloudFormation"), i("Azure Bicep"), i("Pulumi"), i("Ansible")] },
    ],
  },
  {
    label: "Developer Tools",
    slug: "developer-tools",
    icon: "🛠️",
    color: "from-purple-600 to-violet-700",
    description: "IDEs, code editors, and AI-powered coding assistants that boost developer productivity.",
    subcategories: [
      { name: "IDE / Editors", items: [i("IntelliJ IDEA"), i("Visual Studio"), i("Visual Studio Code"), i("Eclipse"), i("PyCharm"), i("Android Studio"), i("Xcode")] },
      { name: "AI Coding", items: [i("Cursor"), i("GitHub Copilot")] },
    ],
  },
  {
    label: "Distributed Systems",
    slug: "distributed-systems",
    icon: "🌐",
    color: "from-sky-600 to-blue-700",
    description: "Concepts and technologies for building fault-tolerant, scalable distributed computing systems.",
    subcategories: [
      { name: "Concepts", items: [i("Distributed Databases"), i("Distributed Caching"), i("Distributed Transactions"), i("Consensus"), i("Leader Election"), i("Replication"), i("Sharding"), i("Partitioning"), i("CAP Theorem"), i("Eventual Consistency"), i("Fault Tolerance"), i("Load Balancing")] },
      { name: "Technologies", items: [i("Kubernetes"), i("Kafka"), i("Redis"), i("Cassandra"), i("ZooKeeper"), i("etcd"), i("Consul")] },
    ],
  },
  {
    label: "Emerging Technologies",
    slug: "emerging-technologies",
    icon: "🚀",
    color: "from-fuchsia-600 to-pink-700",
    description: "Cutting-edge technologies shaping the future — from generative AI and quantum computing to spatial and edge computing.",
    subcategories: [
      { name: "AI", items: [i("Generative AI"), i("Agentic AI"), i("AI Agents"), i("MCP"), i("Multimodal AI"), i("AI Coding"), i("Edge AI")] },
      { name: "Computing", items: [i("Quantum Computing"), i("Spatial Computing"), i("Digital Twins"), i("Edge Computing"), i("Neuromorphic Computing")] },
      { name: "Web", items: [i("WebAssembly")] },
      { name: "Cloud", items: [i("Serverless")] },
      { name: "Security", items: [i("Confidential Computing"), i("Homomorphic Encryption")] },
    ],
  },
  {
    label: "Enterprise",
    slug: "enterprise",
    icon: "🏢",
    color: "from-slate-600 to-gray-800",
    description: "Enterprise software platforms for ERP, CRM, integration, and business process management at scale.",
    subcategories: [
      { name: "Enterprise Platforms", items: [i("SAP"), i("Salesforce"), i("ServiceNow"), i("Oracle"), i("Microsoft Dynamics"), i("Adobe Experience Manager"), i("MuleSoft"), i("Boomi"), i("IBM WebSphere"), i("Red Hat"), i("Pega")] },
    ],
  },
  {
    label: "Generative AI",
    slug: "generative-ai",
    icon: "✨",
    color: "from-amber-500 to-yellow-600",
    description: "Large language models, LLM orchestration frameworks, RAG techniques, and vector databases powering generative AI applications.",
    subcategories: [
      { name: "LLM Models", items: [i("GPT"), i("Claude"), i("Gemini"), i("Llama"), i("Mistral"), i("Qwen"), i("DeepSeek")] },
      { name: "LLM Frameworks", items: [i("LangChain"), i("LlamaIndex"), i("Haystack"), i("Semantic Kernel"), i("DSPy")] },
      { name: "RAG", items: [i("RAG"), i("Hybrid Search"), i("Semantic Search"), i("Chunking"), i("Embeddings"), i("Reranking"), i("Context Engineering"), i("Prompt Engineering"), i("Agentic RAG")] },
      { name: "Vector Databases", items: [i("Pinecone"), i("Milvus"), i("Weaviate"), i("Qdrant"), i("Chroma"), i("pgvector"), i("Elasticsearch"), i("OpenSearch")] },
    ],
  },
  {
    label: "IoT & Edge",
    slug: "iot-edge",
    icon: "📡",
    color: "from-lime-600 to-green-700",
    description: "Hardware platforms, communication protocols, and edge computing concepts for Internet of Things applications.",
    subcategories: [
      { name: "Hardware / Platforms", items: [i("Raspberry Pi"), i("Arduino"), i("ESP32"), i("NVIDIA Jetson"), i("ARM")] },
      { name: "Programming", items: [i("Embedded C/C++")] },
      { name: "Protocols", items: [i("MQTT"), i("CoAP"), i("OPC-UA")] },
      { name: "Concepts", items: [i("Edge Computing")] },
    ],
  },
  {
    label: "Kubernetes",
    slug: "kubernetes",
    icon: "🎛️",
    color: "from-blue-600 to-indigo-700",
    description: "The full Kubernetes ecosystem — service meshes, GitOps tools, observability, and Kubernetes distributions.",
    subcategories: [
      { name: "Kubernetes Ecosystem", items: [i("Kubernetes"), i("Helm"), i("Kustomize"), i("Istio"), i("Linkerd"), i("Envoy"), i("Argo CD"), i("Argo Rollouts"), i("Prometheus"), i("Grafana"), i("Fluent Bit"), i("OpenTelemetry"), i("Rancher"), i("OpenShift")] },
    ],
  },
  {
    label: "MLOps/LLMOps",
    slug: "mlops-llmops",
    icon: "🔬",
    color: "from-violet-600 to-blue-700",
    description: "ML lifecycle management, model serving, and LLM operations tools for productionizing AI and machine learning models.",
    subcategories: [
      { name: "MLOps", items: [i("MLflow"), i("Kubeflow"), i("Weights & Biases"), i("DVC"), i("Airflow"), i("Feast"), i("BentoML"), i("Ray"), i("NVIDIA Triton"), i("KServe")] },
      { name: "LLMOps", items: [i("Prompt Management"), i("Model Evaluation"), i("LLM Observability"), i("Token Monitoring"), i("Guardrails"), i("AI Safety"), i("Model Gateway"), i("Model Routing"), i("Fine-tuning"), i("RAG Evaluation")] },
    ],
  },
  {
    label: "Messaging & Streaming",
    slug: "messaging-streaming",
    icon: "📨",
    color: "from-orange-600 to-red-700",
    description: "Message brokers, event streaming platforms, and Kafka ecosystem tools for asynchronous communication and real-time data pipelines.",
    subcategories: [
      { name: "Message Brokers", items: [i("RabbitMQ"), i("Apache ActiveMQ"), i("Amazon SQS"), i("Azure Service Bus"), i("Google Pub/Sub")] },
      { name: "Event Streaming", items: [i("Apache Kafka"), i("Apache Pulsar"), i("Amazon Kinesis"), i("Redpanda")] },
      { name: "Kafka Ecosystem", items: [i("Kafka Connect"), i("Kafka Streams"), i("Schema Registry"), i("ksqlDB")] },
    ],
  },
  {
    label: "Microservices",
    slug: "microservices",
    icon: "🧩",
    color: "from-teal-600 to-cyan-700",
    description: "Frameworks, service mesh tools, and architectural patterns for building and orchestrating microservices architectures.",
    subcategories: [
      { name: "Frameworks / Platforms", items: [i("Spring Boot"), i("Spring Cloud"), i("Kubernetes"), i("Docker"), i("Istio"), i("Envoy"), i("Consul"), i("Eureka"), i("OpenFeign"), i("gRPC"), i("Kafka"), i("RabbitMQ")] },
      { name: "Patterns", items: [i("API Gateway"), i("Service Discovery"), i("Circuit Breaker"), i("Saga"), i("CQRS"), i("Event Sourcing"), i("Strangler Fig"), i("Bulkhead"), i("Retry"), i("Rate Limiting")] },
    ],
  },
  {
    label: "Mobile",
    slug: "mobile",
    icon: "📱",
    color: "from-indigo-600 to-purple-700",
    description: "Native Android and iOS development tools and cross-platform frameworks for building mobile applications.",
    subcategories: [
      { name: "Android", items: [i("Kotlin"), i("Java"), i("Android SDK"), i("Jetpack Compose")] },
      { name: "iOS", items: [i("Swift"), i("SwiftUI"), i("Objective-C"), i("Xcode")] },
      { name: "Cross Platform", items: [i("Flutter"), i("React Native"), i(".NET MAUI"), i("Ionic"), i("Kotlin Multiplatform")] },
    ],
  },
  {
    label: "Networking",
    slug: "networking",
    icon: "🔗",
    color: "from-sky-600 to-teal-700",
    description: "Network protocols, traffic management technologies, and networking tools for building reliable and secure infrastructure.",
    subcategories: [
      { name: "Protocols", items: [i("TCP/IP"), i("HTTP/HTTPS"), i("DNS"), i("DHCP"), i("FTP/SFTP"), i("SMTP"), i("SSH"), i("TLS"), i("UDP"), i("QUIC")] },
      { name: "Technologies", items: [i("Load Balancer"), i("Reverse Proxy"), i("CDN"), i("Firewall"), i("VPN"), i("SDN"), i("Service Mesh"), i("API Gateway")] },
      { name: "Tools", items: [i("NGINX"), i("HAProxy"), i("Envoy"), i("Cloudflare"), i("F5")] },
    ],
  },
  {
    label: "Observability",
    slug: "observability",
    icon: "👁️",
    color: "from-yellow-600 to-amber-700",
    description: "Metrics, logging, tracing, and APM tools for monitoring distributed systems and maintaining production reliability.",
    subcategories: [
      { name: "Metrics", items: [i("Prometheus"), i("Grafana"), i("Datadog"), i("New Relic")] },
      { name: "Logging", items: [i("Elasticsearch"), i("Logstash"), i("Kibana"), i("Fluentd"), i("Fluent Bit"), i("Loki")] },
      { name: "Tracing", items: [i("OpenTelemetry"), i("Jaeger"), i("Zipkin")] },
      { name: "APM", items: [i("Dynatrace"), i("New Relic"), i("Datadog"), i("AppDynamics")] },
    ],
  },
  {
    label: "Operating Systems",
    slug: "operating-systems",
    icon: "💻",
    color: "from-zinc-600 to-gray-700",
    description: "Core operating systems and Linux distributions that form the foundation of modern software infrastructure.",
    subcategories: [
      { name: "Operating Systems", items: [i("Linux"), i("Windows"), i("macOS"), i("Unix"), i("Android"), i("iOS")] },
      { name: "Linux Distributions", items: [i("Ubuntu"), i("Red Hat Enterprise Linux"), i("Rocky Linux"), i("Debian"), i("Alpine"), i("CentOS Stream")] },
    ],
  },
  {
    label: "Programming Languages",
    slug: "programming-languages",
    icon: "💡",
    color: "from-blue-600 to-purple-700",
    description: "General-purpose, web, mobile, data/AI, functional, legacy, and smart contract programming languages.",
    subcategories: [
      { name: "General Purpose", items: [i("Java"), i("Python"), i("C"), i("C++"), i("C#"), i("Go"), i("Rust")] },
      { name: "Web", items: [i("JavaScript"), i("TypeScript"), i("PHP"), i("Ruby")] },
      { name: "Mobile", items: [i("Kotlin"), i("Swift"), i("Dart"), i("Objective-C")] },
      { name: "Data / AI", items: [i("R"), i("Julia"), i("MATLAB")] },
      { name: "Functional", items: [i("Haskell"), i("Erlang"), i("Elixir"), i("F#"), i("Clojure")] },
      { name: "Legacy / Mainframe", items: [i("COBOL"), i("Fortran"), i("PL/I"), i("RPG")] },
      { name: "Smart Contracts", items: [i("Solidity"), i("Move")] },
    ],
  },
  {
    label: "Robotics",
    slug: "robotics",
    icon: "🦾",
    color: "from-green-600 to-emerald-700",
    description: "Robotics frameworks, simulation tools, hardware platforms, and AI techniques for building autonomous robotic systems.",
    subcategories: [
      { name: "Frameworks", items: [i("ROS/ROS2"), i("NVIDIA Isaac")] },
      { name: "Simulation", items: [i("Gazebo")] },
      { name: "Hardware", items: [i("Arduino"), i("Raspberry Pi")] },
      { name: "Programming", items: [i("Python"), i("C++")] },
      { name: "AI", items: [i("Computer Vision"), i("SLAM"), i("Motion Planning"), i("Reinforcement Learning")] },
    ],
  },
  {
    label: "Search",
    slug: "search",
    icon: "🔍",
    color: "from-pink-600 to-fuchsia-700",
    description: "Full-text and vector search engines for building fast, relevant, and scalable search experiences.",
    subcategories: [
      { name: "Search Engines", items: [i("Elasticsearch"), i("OpenSearch"), i("Apache Solr"), i("Algolia"), i("Typesense"), i("Meilisearch")] },
    ],
  },
  {
    label: "Security",
    slug: "security",
    icon: "🔐",
    color: "from-red-600 to-rose-700",
    description: "Identity and access management, security protocols, and tools for protecting applications and infrastructure.",
    subcategories: [
      { name: "Identity & Access", items: [i("OAuth 2.0"), i("OpenID Connect"), i("SAML"), i("JWT"), i("LDAP"), i("Active Directory"), i("Keycloak"), i("Auth0"), i("Okta")] },
      { name: "Security Technologies", items: [i("WAF"), i("IAM"), i("Zero Trust"), i("SIEM"), i("Secrets Management"), i("Encryption"), i("PKI"), i("TLS/SSL"), i("mTLS")] },
      { name: "Security Tools", items: [i("HashiCorp Vault"), i("CyberArk"), i("SonarQube"), i("Snyk"), i("Checkmarx"), i("Fortify")] },
    ],
  },
  {
    label: "Testing",
    slug: "testing",
    icon: "✅",
    color: "from-green-600 to-lime-700",
    description: "Unit, integration, API, UI, performance, and security testing frameworks and tools across all major tech stacks.",
    subcategories: [
      { name: "Unit Testing", items: [i("JUnit"), i("Mockito"), i("Jest"), i("Vitest"), i("PyTest"), i("NUnit"), i("xUnit")] },
      { name: "API Testing", items: [i("Postman"), i("REST Assured"), i("Karate"), i("SoapUI")] },
      { name: "UI Testing", items: [i("Selenium"), i("Playwright"), i("Cypress"), i("WebdriverIO")] },
      { name: "Performance Testing", items: [i("JMeter"), i("Gatling"), i("k6"), i("Locust")] },
      { name: "Security Testing", items: [i("OWASP ZAP"), i("Burp Suite"), i("SonarQube"), i("Snyk")] },
    ],
  },
  {
    label: "Version Control",
    slug: "version-control",
    icon: "📂",
    color: "from-orange-600 to-amber-700",
    description: "Version control systems and hosting platforms for collaborative software development and code management.",
    subcategories: [
      { name: "Version Control", items: [i("Git")] },
      { name: "Platforms", items: [i("GitHub"), i("GitLab"), i("Bitbucket"), i("Azure Repos")] },
      { name: "Legacy / Other", items: [i("SVN"), i("Perforce")] },
    ],
  },
  {
    label: "Web Technologies",
    slug: "web-technologies",
    icon: "🌍",
    color: "from-cyan-600 to-teal-700",
    description: "Core web standards, modern frontend frameworks, and CSS/UI libraries for building rich web applications.",
    subcategories: [
      { name: "Core Web", items: [i("HTML"), i("CSS"), i("Web Components"), i("WebAssembly"), i("AJAX"), i("JSON"), i("XML")] },
      { name: "Frontend Frameworks", items: [i("React"), i("Angular"), i("Vue.js"), i("Svelte"), i("Next.js"), i("Nuxt"), i("Astro"), i("Remix"), i("Lit"), i("SolidJS")] },
      { name: "CSS / UI", items: [i("Bootstrap"), i("Tailwind CSS"), i("Material UI"), i("Ant Design"), i("Sass"), i("Less"), i("Chakra UI")] },
    ],
  },
];

// Backward-compatible flat list
export const TECHNOLOGIES = TECH_DATA.map((c) => c.label);

export function findCategory(slug: string): TechCategory | null {
  return TECH_DATA.find((c) => c.slug === slug) ?? null;
}

export function findSubcategoryForItem(
  category: TechCategory,
  itemSlug: string
): TechSubcategory | null {
  return category.subcategories.find((s) => s.items.some((it) => it.slug === itemSlug)) ?? null;
}

export function findTechItem(
  categorySlug: string,
  itemSlug: string
): { category: TechCategory; subcategory: TechSubcategory; item: TechItem } | null {
  const cat = findCategory(categorySlug);
  if (!cat) return null;
  for (const sub of cat.subcategories) {
    const found = sub.items.find((it) => it.slug === itemSlug);
    if (found) return { category: cat, subcategory: sub, item: found };
  }
  return null;
}

export function getAllItemsForCategory(categorySlug: string): TechItem[] {
  const cat = findCategory(categorySlug);
  if (!cat) return [];
  return cat.subcategories.flatMap((s) => s.items);
}

export function totalItemCount(): number {
  return TECH_DATA.reduce((sum, cat) => sum + cat.subcategories.reduce((s2, sub) => s2 + sub.items.length, 0), 0);
}
