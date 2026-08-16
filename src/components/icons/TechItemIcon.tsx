import React from "react";
import {
  siPostman, siGraphql, siReact, siNodedotjs, siPython, siDocker, siKubernetes,
  siPostgresql, siMysql, siMongodb, siRedis, siGit, siGithub, siGitlab,
  siTypescript, siJavascript, siTerraform, siAnsible, siJenkins, siNginx,
  siTensorflow, siPytorch, siDjango, siFlask, siFastapi, siSpringboot, siSpring,
  siSpringsecurity, siLaravel, siSymfony, siCodeigniter, siRubyonrails,
  siKotlin, siSwift, siFlutter, siAngular, siVuedotjs, siSvelte, siNextdotjs,
  siAstro, siRemix, siNuxt, siLit, siSolid,
  siGooglecloud, siKong, siTraefikproxy, siSwagger, siOpenapiinitiative, siInsomnia,
  siElasticsearch, siApachekafka, siRabbitmq, siWordpress, siDrupal, siNeo4j,
  siGrafana, siPrometheus, siElectron, siBootstrap, siTailwindcss, siSass,
  siBitbucket, siHelm, siIstio, siAuth0, siOkta, siDatadog,
  siSqlite, siMariadb, siSnowflake, siDatabricks, siInfluxdb,
  siFastify, siNestjs, siQuarkus, siGin, siDotnet, siBlazor,
  siLangchain, siHuggingface, siMilvus, siQdrant,
  siRaspberrypi, siArduino, siMqtt,
  siPulumi, siCircleci, siGithubactions,
  siPhp, siRuby, siGo, siRust, siHaskell, siElixir, siDart, siScala,
  siSap, siJunit5, siSelenium, siCypress, siJest, siVitest, siK6,
  siBitcoin, siEthereum, siSolana, siSolidity,
  siNpm, siYarn, siPnpm, siGradle, siApachemaven,
  siContentful, siStrapi, siSanity, siCloudflare, siVercel, siNetlify,
  siLinux, siUbuntu, siDebian, siAlpinelinux, siRedhat, siRedhatopenshift,
  siMlflow, siApacheairflow, siDvc, siWeightsandbiases,
  siCelery, siScikitlearn, siNumpy, siPandas, siJupyter,
  siApachehadoop, siApachespark, siApacheflink, siApachepulsar, siApachenifi,
  siClickhouse, siVault, siKeycloak, siSnyk, siCheckmarx,
  siNewrelic, siDynatrace, siSentry, siOpentelemetry, siJaeger, siFluentd,
  siSupabase, siPrisma, siArangodb,
  siBun, siVite, siWebpack, siEsbuild, siDeno,
  siGatling, siLocust,
  siExpress, siKoa, siMui, siAntdesign, siChakraui,
  siDigitalocean, siHashicorp, siEtcd, siLinkerd,
  siApachejmeter, siSonar,
  siIntellijidea, siPycharm, siXcode, siAndroidstudio, siGithubcopilot, siCursor,
} from "simple-icons";

// ── luminance helper ──────────────────────────────────────────────────────────
function fg(hex: string): string {
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  const lin = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  const lum = 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
  return lum > 0.35 ? "#000000" : "#ffffff";
}

// ── Simple Icons map: lowercase tech name → SI icon ───────────────────────────
type SI = { path: string; hex: string };
const SI_MAP: Record<string, SI> = {
  // API styles & tools
  "graphql":               siGraphql,
  "postman":               siPostman,
  "swagger/openapi":       siSwagger,
  "openapi":               siOpenapiinitiative,
  "insomnia":              siInsomnia,
  "graphql playground":    siGraphql,
  "kong":                  siKong,
  "nginx":                 siNginx,
  "traefik":               siTraefikproxy,

  // Backend — JS/TS
  "node.js":               siNodedotjs,
  "express.js":            siExpress,
  "nestjs":                siNestjs,
  "fastify":               siFastify,
  "koa":                   siKoa,
  "deno":                  siDeno,
  "bun":                   siBun,

  // Backend — Python
  "python":                siPython,
  "django":                siDjango,
  "flask":                 siFlask,
  "fastapi":               siFastapi,
  "celery":                siCelery,

  // Backend — Java
  "spring":                siSpring,
  "spring boot":           siSpringboot,
  "spring cloud":          siSpring,
  "spring security":       siSpringsecurity,
  "quarkus":               siQuarkus,

  // Backend — .NET
  ".net":                  siDotnet,
  "asp.net core":          siDotnet,
  "entity framework core": siDotnet,
  "blazor":                siBlazor,

  // Backend — Go
  "go":                    siGo,
  "gin":                   siGin,

  // Backend — PHP
  "php":                   siPhp,
  "laravel":               siLaravel,
  "symfony":               siSymfony,
  "codeigniter":           siCodeigniter,

  // Backend — Ruby
  "ruby":                  siRuby,
  "ruby on rails":         siRubyonrails,

  // Web frontend
  "react":                 siReact,
  "react native":          siReact,
  "angular":               siAngular,
  "vue.js":                siVuedotjs,
  "svelte":                siSvelte,
  "next.js":               siNextdotjs,
  "nuxt":                  siNuxt,
  "astro":                 siAstro,
  "remix":                 siRemix,
  "lit":                   siLit,
  "solidjs":               siSolid,

  // CSS / UI
  "bootstrap":             siBootstrap,
  "tailwind css":          siTailwindcss,
  "sass":                  siSass,
  "material ui":           siMui,
  "ant design":            siAntdesign,
  "chakra ui":             siChakraui,

  // Build / bundlers
  "vite":                  siVite,
  "webpack":               siWebpack,
  "esbuild":               siEsbuild,

  // Package managers
  "npm":                   siNpm,
  "yarn":                  siYarn,
  "pnpm":                  siPnpm,
  "gradle":                siGradle,
  "maven":                 siApachemaven,
  "apache maven":          siApachemaven,

  // Languages
  "javascript":            siJavascript,
  "typescript":            siTypescript,
  "kotlin":                siKotlin,
  "swift":                 siSwift,
  "dart":                  siDart,
  "rust":                  siRust,
  "haskell":               siHaskell,
  "elixir":                siElixir,
  "scala":                 siScala,
  "ruby (lang)":           siRuby,

  // Mobile
  "flutter":               siFlutter,
  "android studio":        siAndroidstudio,

  // Cloud
  "google cloud":          siGooglecloud,
  "cloudflare":            siCloudflare,
  "vercel":                siVercel,
  "netlify":               siNetlify,
  "digitalocean":          siDigitalocean,

  // Databases — SQL
  "postgresql":            siPostgresql,
  "mysql":                 siMysql,
  "mariadb":               siMariadb,
  "sqlite":                siSqlite,

  // Databases — NoSQL
  "mongodb":               siMongodb,
  "redis":                 siRedis,
  "neo4j":                 siNeo4j,
  "influxdb":              siInfluxdb,
  "arangodb":              siArangodb,
  "supabase":              siSupabase,
  "prisma":                siPrisma,

  // Data / analytics
  "snowflake":             siSnowflake,
  "databricks":            siDatabricks,
  "clickhouse":            siClickhouse,
  "apache spark":          siApachespark,
  "apache hadoop":         siApachehadoop,
  "apache flink":          siApacheflink,
  "apache pulsar":         siApachepulsar,
  "apache nifi":           siApachenifi,
  "apache airflow":        siApacheairflow,
  "airflow":               siApacheairflow,
  "pandas":                siPandas,
  "numpy":                 siNumpy,
  "jupyter":               siJupyter,

  // ML / AI
  "tensorflow":            siTensorflow,
  "pytorch":               siPytorch,
  "scikit-learn":          siScikitlearn,
  "keras":                 siTensorflow,
  "langchain":             siLangchain,
  "hugging face":          siHuggingface,
  "milvus":                siMilvus,
  "qdrant":                siQdrant,
  "openai agents sdk":     siGithubcopilot,

  // MLOps
  "mlflow":                siMlflow,
  "dvc":                   siDvc,
  "weights & biases":      siWeightsandbiases,
  "airflow (mlops)":       siApacheairflow,

  // DevOps
  "docker":                siDocker,
  "kubernetes":            siKubernetes,
  "helm":                  siHelm,
  "istio":                 siIstio,
  "linkerd":               siLinkerd,
  "jenkins":               siJenkins,
  "github actions":        siGithubactions,
  "gitlab ci/cd":          siGitlab,
  "circleci":              siCircleci,
  "terraform":             siTerraform,
  "ansible":               siAnsible,
  "pulumi":                siPulumi,
  "openshift":             siRedhatopenshift,
  "hashicorp":             siHashicorp,

  // Security
  "auth0":                 siAuth0,
  "okta":                  siOkta,
  "keycloak":              siKeycloak,
  "hashicorp vault":       siVault,
  "vault":                 siVault,
  "snyk":                  siSnyk,
  "checkmarx":             siCheckmarx,

  // Messaging
  "apache kafka":          siApachekafka,
  "kafka":                 siApachekafka,
  "rabbitmq":              siRabbitmq,
  "mqtt":                  siMqtt,

  // Observability
  "grafana":               siGrafana,
  "prometheus":            siPrometheus,
  "datadog":               siDatadog,
  "new relic":             siNewrelic,
  "dynatrace":             siDynatrace,
  "sentry":                siSentry,
  "opentelemetry":         siOpentelemetry,
  "jaeger":                siJaeger,
  "fluentd":               siFluentd,
  "elasticsearch":         siElasticsearch,
  "logstash":              siElasticsearch,
  "kibana":                siElasticsearch,
  "etcd":                  siEtcd,

  // OS / Linux
  "linux":                 siLinux,
  "ubuntu":                siUbuntu,
  "debian":                siDebian,
  "alpine":                siAlpinelinux,
  "red hat":               siRedhat,
  "red hat enterprise linux": siRedhat,

  // Version control
  "git":                   siGit,
  "github":                siGithub,
  "gitlab":                siGitlab,
  "bitbucket":             siBitbucket,

  // Testing
  "jest":                  siJest,
  "vitest":                siVitest,
  "cypress":               siCypress,
  "selenium":              siSelenium,
  "k6":                    siK6,
  "gatling":               siGatling,
  "locust":                siLocust,
  "junit":                 siJunit5,

  // Blockchain
  "bitcoin":               siBitcoin,
  "ethereum":              siEthereum,
  "solana":                siSolana,
  "solidity":              siSolidity,

  // CMS
  "wordpress":             siWordpress,
  "drupal":                siDrupal,
  "contentful":            siContentful,
  "strapi":                siStrapi,
  "sanity":                siSanity,

  // Enterprise
  "sap":                   siSap,

  // Dev tools
  "intellij idea":         siIntellijidea,
  "pycharm":               siPycharm,
  "xcode":                 siXcode,
  "github copilot":        siGithubcopilot,
  "cursor":                siCursor,

  // Desktop
  "electron":              siElectron,

  // IoT
  "raspberry pi":          siRaspberrypi,
  "arduino":               siArduino,

  // Misc
  "sonarqube":             siSonar,
  "apache jmeter":         siApachejmeter,
};

// ── Text-badge fallback: covers protocols, concepts, and logo-less techs ──────
// [bgColor, fgColor, label]
type Badge = [string, string, string];
const BADGE_MAP: Record<string, Badge> = {
  // API protocols (no official logo)
  "rest":                  ["#009688", "#ffffff", "REST"],
  "soap":                  ["#F59E0B", "#000000", "SOAP"],
  "grpc":                  ["#244C5A", "#ffffff", "gRPC"],
  "websocket":             ["#4A90D9", "#ffffff", "WS"],
  "server-sent events":    ["#6366F1", "#ffffff", "SSE"],
  "webhooks":              ["#7C3AED", "#ffffff", "WH"],
  "graphql playground":    ["#E10098", "#ffffff", "GP"],
  "apache apisix":         ["#E0234E", "#ffffff", "AP"],
  "aws api gateway":       ["#FF9900", "#000000", "AG"],
  "azure api management":  ["#0078D4", "#ffffff", "AM"],
  "apigee":                ["#4285F4", "#ffffff", "Ap"],

  // Architecture concepts
  "monolithic architecture":   ["#455A64", "#ffffff", "Mon"],
  "modular monolith":          ["#546E7A", "#ffffff", "MM"],
  "microservices":             ["#3F51B5", "#ffffff", "MS"],
  "serverless":                ["#FF9900", "#000000", "SLS"],
  "event-driven architecture": ["#E91E63", "#ffffff", "EDA"],
  "distributed systems":       ["#1565C0", "#ffffff", "DS"],
  "soa":                       ["#00ACC1", "#ffffff", "SOA"],
  "hexagonal architecture":    ["#607D8B", "#ffffff", "Hex"],
  "clean architecture":        ["#546E7A", "#ffffff", "CA"],
  "layered architecture":      ["#607D8B", "#ffffff", "LA"],
  "domain-driven design":      ["#673AB7", "#ffffff", "DDD"],
  "cqrs":                      ["#9C27B0", "#ffffff", "CQRS"],
  "event sourcing":            ["#3F51B5", "#ffffff", "ES"],
  "saga":                      ["#26A69A", "#ffffff", "Sg"],
  "strangler pattern":         ["#5D4037", "#ffffff", "SP"],
  "api gateway":               ["#FF9900", "#000000", "AG"],
  "backend for frontend":      ["#374151", "#ffffff", "BFF"],
  "strangler fig":             ["#5D4037", "#ffffff", "SF"],

  // AI/ML concepts (no logo)
  "ai agents":             ["#4F46E5", "#ffffff", "AI"],
  "agentic ai":            ["#7C3AED", "#ffffff", "Ag"],
  "tool calling":          ["#2563EB", "#ffffff", "TC"],
  "function calling":      ["#1D4ED8", "#ffffff", "FC"],
  "mcp":                   ["#374151", "#ffffff", "MCP"],
  "multi-agent systems":   ["#059669", "#ffffff", "MAS"],
  "agent memory":          ["#7C3AED", "#ffffff", "AM"],
  "planning":              ["#0891B2", "#ffffff", "Pl"],
  "reasoning":             ["#DB2777", "#ffffff", "Rz"],
  "react":                 ["#20232A", "#61DAFB", "⚛"],  // AI Agents ReAct pattern
  "langgraph":             ["#1C3C3C", "#22C55E", "LG"],
  "crewai":                ["#0F172A", "#F59E0B", "CA"],
  "autogen":               ["#2563EB", "#ffffff", "AG"],
  "semantic kernel":       ["#5C2D91", "#ffffff", "SK"],
  "llamaindex":            ["#FF6B6B", "#ffffff", "LI"],
  "cnn":                   ["#E91E63", "#ffffff", "CNN"],
  "rnn":                   ["#9C27B0", "#ffffff", "RNN"],
  "lstm":                  ["#673AB7", "#ffffff", "LSTM"],
  "gru":                   ["#3F51B5", "#ffffff", "GRU"],
  "transformer":           ["#FF6B35", "#ffffff", "TR"],
  "gan":                   ["#2196F3", "#ffffff", "GAN"],
  "autoencoder":           ["#00BCD4", "#ffffff", "AE"],
  "diffusion models":      ["#03A9F4", "#ffffff", "DM"],
  "llm":                   ["#5B21B6", "#ffffff", "LLM"],
  "slm":                   ["#795548", "#ffffff", "SLM"],
  "generative ai":         ["#FF5722", "#ffffff", "GenAI"],
  "multimodal ai":         ["#FFC107", "#000000", "MM"],
  "computer vision":       ["#8BC34A", "#000000", "CV"],
  "nlp":                   ["#FFEB3B", "#000000", "NLP"],
  "speech ai":             ["#FF9800", "#ffffff", "SA"],
  "reinforcement learning":["#00BCD4", "#ffffff", "RL"],
  "fine-tuning":           ["#009688", "#ffffff", "FT"],
  "distillation":          ["#4CAF50", "#ffffff", "Di"],
  "quantization":          ["#8BC34A", "#000000", "Qn"],
  "rag":                   ["#7C3AED", "#ffffff", "RAG"],
  "hybrid search":         ["#6366F1", "#ffffff", "HS"],
  "semantic search":       ["#8B5CF6", "#ffffff", "Sm"],
  "embeddings":            ["#1E40AF", "#ffffff", "Em"],
  "reranking":             ["#6D28D9", "#ffffff", "Rr"],
  "prompt engineering":    ["#7C3AED", "#ffffff", "PE"],
  "context engineering":   ["#0F766E", "#ffffff", "CE"],
  "agentic rag":           ["#4F46E5", "#ffffff", "AR"],
  "pinecone":              ["#000000", "#00B285", "Pi"],
  "weaviate":              ["#fa0171", "#ffffff", "Wv"],
  "chroma":                ["#F97316", "#ffffff", "Ch"],
  "pgvector":              ["#336791", "#ffffff", "pgV"],
  "chunking":              ["#374151", "#ffffff", "Ch"],
  "gpt":                   ["#412991", "#ffffff", "GPT"],
  "claude":                ["#D4702B", "#ffffff", "Cl"],
  "gemini":                ["#4285F4", "#ffffff", "Gem"],
  "llama":                 ["#7C3AED", "#ffffff", "Ll"],
  "mistral":               ["#F54E42", "#ffffff", "Mi"],
  "qwen":                  ["#7346EE", "#ffffff", "Qw"],
  "deepseek":              ["#4A90D9", "#ffffff", "DS"],
  "dspy":                  ["#2563EB", "#ffffff", "DS"],
  "haystack":              ["#1A1A1A", "#6AB187", "Hy"],
  "opensearch":            ["#005EB8", "#ffffff", "OS"],

  // Distributed systems concepts
  "distributed databases": ["#1565C0", "#ffffff", "DDB"],
  "distributed caching":   ["#DC382D", "#ffffff", "DC"],
  "distributed transactions": ["#1565C0", "#ffffff", "DT"],
  "consensus":             ["#374151", "#ffffff", "Cs"],
  "leader election":       ["#374151", "#ffffff", "LE"],
  "replication":           ["#374151", "#ffffff", "Rep"],
  "sharding":              ["#374151", "#ffffff", "Sh"],
  "cap theorem":           ["#374151", "#ffffff", "CAP"],
  "eventual consistency":  ["#374151", "#ffffff", "EC"],
  "fault tolerance":       ["#374151", "#ffffff", "FT"],
  "load balancing":        ["#374151", "#ffffff", "LB"],
  "zookeeper":             ["#E24829", "#ffffff", "ZK"],
  "consul":                ["#CA2171", "#ffffff", "Co"],

  // Cloud providers (AWS/Azure don't have clean SI entries)
  "aws":                   ["#232F3E", "#FF9900", "AWS"],
  "azure":                 ["#0078D4", "#ffffff", "Az"],
  "ec2":                   ["#FF9900", "#000000", "EC2"],
  "ecs":                   ["#FF9900", "#000000", "ECS"],
  "eks":                   ["#FF9900", "#000000", "EKS"],
  "lambda":                ["#FF9900", "#000000", "λ"],
  "s3":                    ["#FF9900", "#000000", "S3"],
  "rds":                   ["#FF9900", "#000000", "RDS"],
  "dynamodb":              ["#FF9900", "#000000", "DDB"],
  "aurora":                ["#FF9900", "#000000", "Au"],
  "cloudfront":            ["#FF9900", "#000000", "CF"],
  "sqs":                   ["#FF9900", "#000000", "SQS"],
  "sns":                   ["#FF9900", "#000000", "SNS"],
  "kinesis":               ["#FF9900", "#000000", "Ki"],
  "eventbridge":           ["#FF9900", "#000000", "EB"],
  "cloudformation":        ["#FF9900", "#000000", "CFn"],
  "bedrock":               ["#FF9900", "#000000", "BR"],
  "azure vm":              ["#0078D4", "#ffffff", "VM"],
  "aks":                   ["#0078D4", "#ffffff", "AKS"],
  "azure functions":       ["#0062AD", "#ffffff", "AF"],
  "blob storage":          ["#0078D4", "#ffffff", "BS"],
  "cosmos db":             ["#0078D4", "#ffffff", "Cos"],
  "azure sql":             ["#0078D4", "#ffffff", "SQL"],
  "service bus":           ["#0078D4", "#ffffff", "SB"],
  "event hubs":            ["#0078D4", "#ffffff", "EH"],
  "azure devops":          ["#0078D4", "#ffffff", "ADO"],
  "azure openai":          ["#0078D4", "#ffffff", "AOI"],
  "api management":        ["#0078D4", "#ffffff", "APM"],
  "compute engine":        ["#4285F4", "#ffffff", "CE"],
  "gke":                   ["#4285F4", "#ffffff", "GKE"],
  "cloud run":             ["#4285F4", "#ffffff", "CR"],
  "cloud functions":       ["#4285F4", "#ffffff", "CF"],
  "cloud storage":         ["#4285F4", "#ffffff", "CS"],
  "cloud sql":             ["#4285F4", "#ffffff", "SQL"],
  "bigquery":              ["#4285F4", "#ffffff", "BQ"],
  "pub/sub":               ["#4285F4", "#ffffff", "P/S"],
  "vertex ai":             ["#4285F4", "#ffffff", "VAI"],

  // Databases without SI
  "oracle database":       ["#F80000", "#ffffff", "Or"],
  "oracle":                ["#F80000", "#ffffff", "Or"],
  "microsoft sql server":  ["#CC2927", "#ffffff", "SQL"],
  "ibm db2":               ["#1F70C1", "#ffffff", "DB2"],
  "cockroachdb":           ["#6933FF", "#ffffff", "CR"],
  "couchdb":               ["#E42528", "#ffffff", "Co"],
  "amazon documentdb":     ["#FF9900", "#000000", "DDB"],
  "firebase firestore":    ["#FFCA28", "#000000", "FS"],
  "amazon dynamodb":       ["#FF9900", "#000000", "DDB"],
  "amazon neptune":        ["#FF9900", "#000000", "Nep"],
  "google bigtable":       ["#4285F4", "#ffffff", "BT"],
  "janusgraph":            ["#6A55F2", "#ffffff", "JG"],
  "scylladb":              ["#6CD5E7", "#000000", "Sc"],
  "hbase":                 ["#FF0000", "#ffffff", "HB"],
  "timescaledb":           ["#FDB515", "#000000", "TS"],
  "opentsdb":              ["#4A90D9", "#ffffff", "OTS"],
  "riak":                  ["#FF7D47", "#ffffff", "Ri"],
  "apache cassandra":      ["#1287B1", "#ffffff", "Cs"],
  "cassandra":             ["#1287B1", "#ffffff", "Cs"],
  "sql":                   ["#336791", "#ffffff", "SQL"],
  "pl/sql":                ["#F80000", "#ffffff", "PL/"],
  "t-sql":                 ["#CC2927", "#ffffff", "T-SQL"],
  "jdbc":                  ["#007396", "#ffffff", "JDB"],
  "odbc":                  ["#0078D4", "#ffffff", "ODB"],
  "jpa":                   ["#4A90D9", "#ffffff", "JPA"],
  "hibernate":             ["#59666C", "#ffffff", "Hi"],

  // Backend (no SI)
  "jakarta ee":            ["#4285F4", "#ffffff", "JE"],
  "micronaut":             ["#09AFE5", "#ffffff", "Mn"],
  "echo":                  ["#00ADD8", "#ffffff", "Ec"],
  "fiber":                 ["#00ADD8", "#ffffff", "Fi"],
  "chi":                   ["#00ADD8", "#ffffff", "χ"],
  "sinatra":               ["#1C1C1C", "#ffffff", "Si"],
  "tornado":               ["#F97316", "#ffffff", "To"],
  "spring cloud":          ["#6DB33F", "#ffffff", "SC"],

  // Mobile (no SI)
  "java":                  ["#007396", "#ffffff", "Jv"],
  "android sdk":           ["#3DDC84", "#000000", "SDK"],
  "jetpack compose":       ["#4285F4", "#ffffff", "JC"],
  "swiftui":               ["#FA7343", "#ffffff", "SwUI"],
  "objective-c":           ["#438EFF", "#ffffff", "OC"],
  ".net maui":             ["#512BD4", "#ffffff", "MAUI"],
  "ionic":                 ["#3880FF", "#ffffff", "Io"],
  "kotlin multiplatform":  ["#7F52FF", "#ffffff", "KMP"],

  // MLOps concepts
  "prompt management":     ["#7C3AED", "#ffffff", "PM"],
  "model evaluation":      ["#7C3AED", "#ffffff", "ME"],
  "llm observability":     ["#7C3AED", "#ffffff", "LO"],
  "token monitoring":      ["#7C3AED", "#ffffff", "TM"],
  "guardrails":            ["#7C3AED", "#ffffff", "GR"],
  "ai safety":             ["#7C3AED", "#ffffff", "AS"],
  "model gateway":         ["#7C3AED", "#ffffff", "MG"],
  "model routing":         ["#7C3AED", "#ffffff", "MR"],
  "rag evaluation":        ["#7C3AED", "#ffffff", "RE"],
  "bentoml":               ["#000000", "#ffffff", "BML"],
  "ray":                   ["#029CF5", "#000000", "Ray"],
  "nvidia triton":         ["#76B900", "#000000", "NvT"],
  "kserve":                ["#326CE5", "#ffffff", "KSv"],
  "feast":                 ["#2496ED", "#ffffff", "Fs"],
  "kubeflow":              ["#326CE5", "#ffffff", "KF"],

  // Networking concepts
  "tcp/ip":                ["#374151", "#ffffff", "TCP"],
  "http/https":            ["#374151", "#ffffff", "HTTP"],
  "dns":                   ["#374151", "#ffffff", "DNS"],
  "dhcp":                  ["#374151", "#ffffff", "DHCP"],
  "ftp/sftp":              ["#374151", "#ffffff", "FTP"],
  "smtp":                  ["#374151", "#ffffff", "SMTP"],
  "ssh":                   ["#374151", "#ffffff", "SSH"],
  "tls":                   ["#374151", "#ffffff", "TLS"],
  "udp":                   ["#374151", "#ffffff", "UDP"],
  "quic":                  ["#374151", "#ffffff", "QUIC"],
  "load balancer":         ["#374151", "#ffffff", "LB"],
  "reverse proxy":         ["#374151", "#ffffff", "RP"],
  "vpn":                   ["#374151", "#ffffff", "VPN"],
  "sdn":                   ["#374151", "#ffffff", "SDN"],
  "service mesh":          ["#374151", "#ffffff", "SM"],
  "haproxy":               ["#374151", "#ffffff", "HA"],
  "f5":                    ["#E4002B", "#ffffff", "F5"],
  "cdn":                   ["#F38020", "#ffffff", "CDN"],

  // Security concepts
  "oauth 2.0":             ["#EB5424", "#ffffff", "OA"],
  "openid connect":        ["#F78C40", "#000000", "OID"],
  "saml":                  ["#B03A2E", "#ffffff", "SAML"],
  "jwt":                   ["#000000", "#fb015b", "JWT"],
  "ldap":                  ["#00439C", "#ffffff", "LDAP"],
  "active directory":      ["#0078D4", "#ffffff", "AD"],
  "waf":                   ["#232F3E", "#FF9900", "WAF"],
  "iam":                   ["#232F3E", "#FF9900", "IAM"],
  "zero trust":            ["#374151", "#ffffff", "ZT"],
  "siem":                  ["#374151", "#ffffff", "SIEM"],
  "secrets management":    ["#374151", "#ffffff", "SM"],
  "encryption":            ["#374151", "#ffffff", "Enc"],
  "pki":                   ["#374151", "#ffffff", "PKI"],
  "tls/ssl":               ["#374151", "#ffffff", "TLS"],
  "mtls":                  ["#374151", "#ffffff", "mTLS"],
  "cyberark":              ["#274B7A", "#ffffff", "CA"],
  "fortify":               ["#00ABE5", "#ffffff", "Fo"],

  // Testing (no SI)
  "mockito":               ["#C5D928", "#000000", "Mo"],
  "nunit":                 ["#239120", "#ffffff", "NU"],
  "xunit":                 ["#512BD4", "#ffffff", "xU"],
  "rest assured":          ["#374151", "#ffffff", "RA"],
  "karate":                ["#374151", "#ffffff", "Ka"],
  "soapui":                ["#F47920", "#ffffff", "SUI"],
  "playwright":            ["#45BA4B", "#ffffff", "Pw"],
  "webdriverio":           ["#EA5906", "#ffffff", "WIO"],
  "jmeter":                ["#D22128", "#ffffff", "JM"],
  "owasp zap":             ["#00549E", "#ffffff", "ZAP"],
  "burp suite":            ["#F47421", "#ffffff", "BS"],

  // Version control
  "svn":                   ["#809CC9", "#ffffff", "SVN"],
  "perforce":              ["#F26724", "#ffffff", "P4"],
  "azure repos":           ["#0078D4", "#ffffff", "AR"],

  // OS
  "macos":                 ["#000000", "#ffffff", "Mac"],
  "windows":               ["#0078D4", "#ffffff", "Win"],
  "unix":                  ["#374151", "#ffffff", "Unix"],
  "ios":                   ["#000000", "#ffffff", "iOS"],
  "android":               ["#3DDC84", "#000000", "And"],
  "rocky linux":           ["#10B981", "#ffffff", "RL"],
  "centos stream":         ["#262577", "#ffffff", "CS"],

  // CMS
  "adobe experience manager": ["#FF0000", "#ffffff", "AEM"],
  "sitecore":              ["#EB3C00", "#ffffff", "SC"],
  "optimizely":            ["#003DFF", "#ffffff", "Op"],
  "edge delivery services":["#374151", "#ffffff", "EDS"],
  "headless cms":          ["#374151", "#ffffff", "HCMS"],
  "jamstack":              ["#F0047F", "#ffffff", "JAM"],

  // Enterprise
  "servicenow":            ["#62D84E", "#000000", "SN"],
  "microsoft dynamics":    ["#0078D4", "#ffffff", "MD"],
  "mulesoft":              ["#00A1DF", "#ffffff", "MS"],
  "boomi":                 ["#2196F3", "#ffffff", "Bm"],
  "ibm websphere":         ["#1F70C1", "#ffffff", "WS"],
  "pega":                  ["#00A2DD", "#ffffff", "Pg"],
  "salesforce":            ["#00A1E0", "#ffffff", "SF"],

  // BI
  "power bi":              ["#F2C811", "#000000", "PBI"],
  "tableau":               ["#E97627", "#ffffff", "Ta"],
  "looker":                ["#4285F4", "#ffffff", "Lo"],
  "qlik":                  ["#009845", "#ffffff", "Qk"],
  "apache superset":       ["#20A7C9", "#ffffff", "AS"],

  // Blockchain
  "smart contracts":       ["#F7931A", "#ffffff", "SC"],
  "nfts":                  ["#9945FF", "#ffffff", "NFT"],
  "defi":                  ["#06B6D4", "#ffffff", "DeFi"],
  "web3":                  ["#F6851B", "#ffffff", "W3"],
  "wallets":               ["#374151", "#ffffff", "Wl"],
  "distributed ledger":    ["#374151", "#ffffff", "DL"],
  "hyperledger":           ["#2F3134", "#ffffff", "HL"],
  "move":                  ["#4F46E5", "#ffffff", "Mv"],

  // Build
  "make":                  ["#374151", "#ffffff", "Mk"],
  "cmake":                 ["#064F8C", "#ffffff", "CM"],
  "conan":                 ["#6699CB", "#ffffff", "Co"],
  "vcpkg":                 ["#0078D4", "#ffffff", "VP"],
  "pip":                   ["#3775A9", "#ffffff", "pip"],
  "poetry":                ["#60A5FA", "#000000", "Po"],
  "uv":                    ["#DE5FE9", "#ffffff", "uv"],
  "conda":                 ["#44A833", "#ffffff", "Cn"],
  "nuget":                 ["#004880", "#ffffff", "NuG"],

  // Caching
  "memcached":             ["#6CB4E4", "#ffffff", "Mc"],
  "hazelcast":             ["#FF6600", "#ffffff", "Hz"],
  "ehcache":               ["#0033A0", "#ffffff", "EhC"],
  "caffeine":              ["#6DB33F", "#ffffff", "Caf"],
  "varnish":               ["#1A1A1A", "#ffffff", "Va"],

  // Data engineering
  "dbt":                   ["#FF694A", "#ffffff", "dbt"],
  "aws glue":              ["#FF9900", "#000000", "Gl"],
  "azure data factory":    ["#0078D4", "#ffffff", "ADF"],
  "google dataflow":       ["#4285F4", "#ffffff", "DF"],
  "hive":                  ["#FDEE21", "#000000", "Hv"],
  "presto":                ["#5890FF", "#ffffff", "Pr"],
  "trino":                 ["#DD00A1", "#ffffff", "Tr"],
  "pyspark":               ["#E25A1C", "#ffffff", "PyS"],
  "spark sql":             ["#E25A1C", "#ffffff", "SQL"],
  "kafka streams":         ["#231F20", "#ffffff", "KS"],
  "polars":                ["#CD792C", "#ffffff", "Pl"],

  // Data platforms
  "google bigquery":       ["#4285F4", "#ffffff", "BQ"],
  "amazon redshift":       ["#FF9900", "#000000", "RS"],
  "azure synapse":         ["#0078D4", "#ffffff", "Sy"],
  "teradata":              ["#F37440", "#ffffff", "TD"],
  "databricks sql":        ["#FF3621", "#ffffff", "DBS"],
  "delta lake":            ["#003087", "#ffffff", "DL"],
  "apache iceberg":        ["#005F73", "#ffffff", "Ice"],
  "apache hudi":           ["#00B4D8", "#ffffff", "Hu"],
  "amazon s3":             ["#FF9900", "#000000", "S3"],
  "azure data lake storage": ["#0078D4", "#ffffff", "ADLS"],
  "google cloud storage":  ["#4285F4", "#ffffff", "GCS"],

  // Desktop
  ".net/wpf":              ["#512BD4", "#ffffff", "WPF"],
  "winui":                 ["#0078D4", "#ffffff", "WUI"],
  "windows forms":         ["#0078D4", "#ffffff", "WF"],
  "javafx":                ["#007396", "#ffffff", "JFX"],
  "qt":                    ["#41CD52", "#000000", "Qt"],
  "gtk":                   ["#7FE719", "#000000", "GTK"],
  "tauri":                 ["#FFC131", "#000000", "Ta"],

  // Emerging tech
  "quantum computing":     ["#374151", "#ffffff", "QC"],
  "spatial computing":     ["#374151", "#ffffff", "SC"],
  "digital twins":         ["#374151", "#ffffff", "DT"],
  "neuromorphic computing":["#374151", "#ffffff", "NC"],
  "confidential computing":["#374151", "#ffffff", "CC"],
  "homomorphic encryption":["#374151", "#ffffff", "HE"],
  "ai coding":             ["#374151", "#ffffff", "AIC"],
  "edge ai":               ["#374151", "#ffffff", "EA"],
  "edge computing":        ["#374151", "#ffffff", "Edge"],
  "webassembly":           ["#654FF0", "#ffffff", "WA"],

  // IoT
  "esp32":                 ["#E7352C", "#ffffff", "E32"],
  "nvidia jetson":         ["#76B900", "#000000", "Jts"],
  "arm":                   ["#00979D", "#ffffff", "ARM"],
  "coap":                  ["#6366F1", "#ffffff", "CoAP"],
  "opc-ua":                ["#0032A0", "#ffffff", "OPC"],
  "embedded c/c++":        ["#00599C", "#ffffff", "EC"],

  // Microservices patterns
  "service discovery":     ["#374151", "#ffffff", "SD"],
  "circuit breaker":       ["#374151", "#ffffff", "CB"],
  "bulkhead":              ["#374151", "#ffffff", "BH"],
  "retry":                 ["#374151", "#ffffff", "RT"],
  "rate limiting":         ["#374151", "#ffffff", "RL"],
  "openfeign":             ["#374151", "#ffffff", "OF"],
  "eureka":                ["#374151", "#ffffff", "Eu"],

  // Kubernetes ecosystem
  "kustomize":             ["#326CE5", "#ffffff", "Kz"],
  "argo cd":               ["#EF7B4D", "#ffffff", "AC"],
  "argo rollouts":         ["#EF7B4D", "#ffffff", "AR"],
  "fluent bit":            ["#00B6C3", "#ffffff", "FB"],
  "rancher":               ["#0075A8", "#ffffff", "Rn"],
  "envoy":                 ["#AC6199", "#ffffff", "En"],
  "openshift":             ["#EE0000", "#ffffff", "OS"],

  // Robotics
  "ros/ros2":              ["#22314E", "#ffffff", "ROS"],
  "nvidia isaac":          ["#76B900", "#000000", "Isa"],
  "gazebo":                ["#374151", "#ffffff", "Gz"],
  "slam":                  ["#374151", "#ffffff", "SLAM"],
  "motion planning":       ["#374151", "#ffffff", "MP"],

  // Programming languages (no SI)
  "c":                     ["#A8B9CC", "#000000", "C"],
  "c++":                   ["#00599C", "#ffffff", "C++"],
  "c#":                    ["#239120", "#ffffff", "C#"],
  "f#":                    ["#378BBA", "#ffffff", "F#"],
  "clojure":               ["#5881D8", "#ffffff", "Cl"],
  "erlang":                ["#A90533", "#ffffff", "Er"],
  "julia":                 ["#9558B2", "#ffffff", "Jl"],
  "matlab":                ["#0076A8", "#ffffff", "ML"],
  "r":                     ["#276DC3", "#ffffff", "R"],
  "cobol":                 ["#005CA5", "#ffffff", "CO"],
  "fortran":               ["#734F96", "#ffffff", "Fo"],
  "pl/i":                  ["#005CA5", "#ffffff", "PL/I"],
  "rpg":                   ["#0066CC", "#ffffff", "RPG"],

  // Messaging
  "amazon sqs":            ["#FF9900", "#000000", "SQS"],
  "azure service bus":     ["#0078D4", "#ffffff", "SB"],
  "google pub/sub":        ["#4285F4", "#ffffff", "P/S"],
  "amazon kinesis":        ["#FF9900", "#000000", "Kn"],
  "redpanda":              ["#E84142", "#ffffff", "RP"],
  "kafka connect":         ["#231F20", "#ffffff", "KC"],
  "schema registry":       ["#231F20", "#ffffff", "SR"],
  "ksqldb":                ["#231F20", "#ffffff", "KSQL"],
  "apache activemq":       ["#D3280C", "#ffffff", "AMQ"],

  // Observability
  "loki":                  ["#F46800", "#ffffff", "Lk"],
  "zipkin":                ["#FF6600", "#ffffff", "Zi"],
  "appdynamics":           ["#00A1DF", "#ffffff", "AD"],
  "new relic (apm)":       ["#008C99", "#ffffff", "NR"],

  // Search
  "apache solr":           ["#D9411E", "#ffffff", "So"],
  "algolia":               ["#003DFF", "#ffffff", "Al"],
  "typesense":             ["#E35E0D", "#ffffff", "Ts"],
  "meilisearch":           ["#FF5CAA", "#ffffff", "Me"],

  // Misc
  "partitioning":          ["#374151", "#ffffff", "Par"],
};

// ── Component ─────────────────────────────────────────────────────────────────
interface TechItemIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TechItemIcon({ name, size = 32, className, style }: TechItemIconProps) {
  const key = name.toLowerCase();
  const radius = Math.max(4, Math.round(size * 0.22));
  const iconSize = Math.round(size * 0.58);

  // Try Simple Icons first (actual brand logo)
  const siIcon = SI_MAP[key];
  if (siIcon) {
    const bg = `#${siIcon.hex}`;
    const iconColor = fg(siIcon.hex);
    return (
      <div
        className={className}
        style={{ width: size, height: size, backgroundColor: bg, borderRadius: radius, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...style }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill={iconColor}
          style={{ width: iconSize, height: iconSize }}
          aria-label={name}
        >
          <path d={siIcon.path} />
        </svg>
      </div>
    );
  }

  // Text badge fallback
  const badge = BADGE_MAP[key];
  const bg  = badge ? badge[0] : "#374151";
  const fgColor = badge ? badge[1] : "#ffffff";
  const label = badge ? badge[2] : name.charAt(0).toUpperCase();

  const fontSize =
    label.length <= 2 ? Math.round(size * 0.38) :
    label.length === 3 ? Math.round(size * 0.3) :
    label.length === 4 ? Math.round(size * 0.24) :
    Math.round(size * 0.19);

  return (
    <div
      className={className}
      style={{
        width: size, height: size, backgroundColor: bg, borderRadius: radius,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        fontWeight: 800, color: fgColor, fontSize,
        letterSpacing: label.length >= 3 ? "-0.04em" : "0",
        lineHeight: "1", userSelect: "none",
        ...style,
      }}
    >
      {label}
    </div>
  );
}
