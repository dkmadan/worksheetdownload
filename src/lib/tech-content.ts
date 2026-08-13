export interface TechFAQ {
  q: string;
  a: string;
}

export interface TechPageContent {
  overview: string;
  whatsCovered: string[];
  whoIsItFor: string;
  faqs: TechFAQ[];
}

const SPECIFIC: Record<string, TechPageContent> = {
  "spring-boot": {
    overview:
      "Spring Boot is an opinionated extension of the Spring Framework that eliminates boilerplate configuration so you can go from code to running application in minutes. It provides auto-configuration, embedded servers (Tomcat, Jetty, Undertow), and production-ready features like metrics and health checks out of the box. Spring Boot is the de-facto standard for Java microservices.",
    whatsCovered: [
      "Auto-configuration mechanics and @SpringBootApplication anatomy",
      "Spring Boot Actuator endpoints for monitoring and health checks",
      "Externalized configuration with application.properties / YAML and profiles",
      "Spring Data JPA integration — repositories, queries, and transactions",
      "Embedded server configuration and packaging as a self-contained JAR",
    ],
    whoIsItFor:
      "Java developers building REST APIs, microservices, or enterprise applications who want to move fast without wrestling XML configuration.",
    faqs: [
      {
        q: "What is Spring Boot auto-configuration?",
        a: "Auto-configuration automatically sets up Spring beans based on JAR dependencies on the classpath. If spring-boot-starter-data-jpa is present, Spring Boot configures a DataSource, EntityManagerFactory, and transaction management with no XML needed.",
      },
      {
        q: "How do I create a REST endpoint in Spring Boot?",
        a: "Annotate a class with @RestController, then annotate methods with @GetMapping, @PostMapping, etc. Spring Boot's embedded Tomcat and Jackson auto-configuration handle routing and JSON serialization automatically.",
      },
      {
        q: "What is the difference between @Component, @Service, and @Repository?",
        a: "All three are specializations of @Component and are auto-detected by component scanning. @Service marks business logic, @Repository marks data-access layers and adds exception translation, @Component is the generic stereotype.",
      },
      {
        q: "How do you externalize configuration in Spring Boot?",
        a: "Use application.properties or application.yml for defaults, override with profile-specific files (application-prod.yml). Inject values with @Value or bind an entire prefix to a POJO with @ConfigurationProperties.",
      },
      {
        q: "What does Spring Boot Actuator expose?",
        a: "Actuator adds HTTP endpoints for observability: /actuator/health, /actuator/metrics, /actuator/info, /actuator/env. Most are disabled by default and must be explicitly enabled via management.endpoints.web.exposure.include.",
      },
    ],
  },

  "spring": {
    overview:
      "The Spring Framework is the foundational Java application framework providing dependency injection, aspect-oriented programming, and integration with virtually every Java technology. It is the backbone behind Spring Boot and powers the majority of enterprise Java applications globally.",
    whatsCovered: [
      "IoC container — ApplicationContext, bean lifecycle, and scope",
      "Dependency injection — constructor vs setter vs field injection",
      "AOP — @Aspect, pointcuts, advice types, and common use cases",
      "Spring MVC — DispatcherServlet, @Controller, and view resolution",
      "Transaction management — @Transactional, propagation, and isolation",
    ],
    whoIsItFor:
      "Java developers who want to understand the core container that powers Spring Boot and build maintainable, testable enterprise applications.",
    faqs: [
      {
        q: "What is Inversion of Control (IoC) in Spring?",
        a: "IoC means the framework (not the developer) controls object creation and wiring. You declare beans via annotations or XML; Spring's IoC container instantiates them and injects dependencies — removing hard-coded coupling between classes.",
      },
      {
        q: "What is the Spring ApplicationContext?",
        a: "ApplicationContext is the central Spring container. It loads bean definitions, resolves dependencies, manages lifecycle (init/destroy callbacks), and publishes events. AnnotationConfigApplicationContext and SpringApplication (Boot) are common implementations.",
      },
      {
        q: "When should you use AOP in Spring?",
        a: "Use AOP for cross-cutting concerns — logging, security, transactions, caching — that would otherwise be duplicated across many classes. @Transactional is itself implemented as AOP advice around method calls.",
      },
      {
        q: "What are the different Spring bean scopes?",
        a: "singleton (default, one instance per container), prototype (new instance per request), request (one per HTTP request), session (one per HTTP session), and application (one per ServletContext). Scope is set with @Scope('prototype') etc.",
      },
      {
        q: "How does Spring's transaction management work?",
        a: "@Transactional on a method wraps it in a transaction. Spring uses AOP to intercept the call, begin a transaction, commit on success, and roll back on unchecked exceptions. Propagation controls what happens when a transactional method calls another.",
      },
    ],
  },

  "spring-security": {
    overview:
      "Spring Security is the de-facto standard authentication and access-control framework for Spring applications. It provides comprehensive security services — HTTP security, OAuth2, JWT, method-level authorization, CSRF protection, and more — with a highly customizable filter-chain architecture.",
    whatsCovered: [
      "Security filter chain — ordering, custom filters, and override points",
      "Authentication providers — UserDetailsService, DaoAuthenticationProvider",
      "OAuth2 resource server and JWT validation configuration",
      "Method security — @PreAuthorize, @PostAuthorize, @Secured",
      "CSRF, CORS, session management, and secure headers",
    ],
    whoIsItFor:
      "Spring developers who need to secure web applications or REST APIs with authentication, authorization, and protection against common web vulnerabilities.",
    faqs: [
      {
        q: "How does the Spring Security filter chain work?",
        a: "Spring Security installs a chain of servlet filters before your application code. Each filter handles a specific concern (authentication, CSRF, session, etc.). SecurityFilterChain bean lets you configure which URLs require authentication and which filters are active.",
      },
      {
        q: "How do you implement JWT authentication in Spring Security?",
        a: "Configure an oauth2ResourceServer().jwt() DSL in your SecurityFilterChain. Spring Security validates the JWT signature and expiry using a JwtDecoder bean. Extract claims with @AuthenticationPrincipal Jwt in your controllers.",
      },
      {
        q: "What is the difference between authentication and authorization in Spring Security?",
        a: "Authentication verifies who the caller is (username/password, token). Authorization decides what the authenticated user may do (@PreAuthorize, http.authorizeHttpRequests). Spring Security always authenticates first, then applies authorization rules.",
      },
      {
        q: "How does @PreAuthorize work?",
        a: "@PreAuthorize evaluates a SpEL expression before the method runs. Example: @PreAuthorize(\"hasRole('ADMIN') or #id == principal.id\"). Enable it with @EnableMethodSecurity. The method is only called if the expression evaluates to true.",
      },
      {
        q: "When should CSRF protection be disabled?",
        a: "Disable CSRF only for stateless REST APIs consumed by non-browser clients (mobile apps, other services). Browser-based apps that use cookies must keep CSRF enabled. JWT-based APIs are stateless and do not use cookies, so CSRF is not applicable.",
      },
    ],
  },

  "django": {
    overview:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Its 'batteries-included' philosophy ships everything — ORM, admin panel, authentication, URL routing, and templating — out of the box. Django powers Instagram, Pinterest, and Disqus, proving it scales from side projects to billions of users.",
    whatsCovered: [
      "MVT architecture — Models, Views, and Templates explained",
      "Django ORM — querysets, lookups, aggregations, and migrations",
      "Class-based views vs. function-based views compared",
      "Django REST Framework serializers, viewsets, and routers",
      "Authentication, permissions, and the built-in admin interface",
    ],
    whoIsItFor:
      "Python developers building web applications who value convention over configuration and want a full-featured framework with minimal setup.",
    faqs: [
      {
        q: "What is Django's MVT architecture?",
        a: "MVT stands for Model-View-Template. Models define the data schema. Views contain business logic and return responses. Templates render HTML. Django's URL dispatcher routes requests to the correct view — it fills the Controller role automatically.",
      },
      {
        q: "How do Django migrations work?",
        a: "Run python manage.py makemigrations to generate a migration file describing model changes, then python manage.py migrate to apply it. Django tracks applied migrations in the django_migrations table, enabling version-controlled schema changes.",
      },
      {
        q: "What is the N+1 query problem and how does Django solve it?",
        a: "N+1 happens when accessing a related object triggers a separate query per row. Django solves it with select_related() for FK/OneToOne (SQL JOIN) and prefetch_related() for M2M or reverse FK relations (a separate optimized query).",
      },
      {
        q: "How does Django's authentication system work?",
        a: "Django ships a complete auth system: User model, login/logout views, session handling, and PBKDF2 password hashing. Use @login_required to protect views, LoginRequiredMixin for class-based views, and the permission framework for fine-grained access control.",
      },
      {
        q: "What is Django REST Framework and when should you use it?",
        a: "DRF is a toolkit for building APIs on top of Django. It provides serializers (model↔JSON), viewsets (CRUD in one class), routers (automatic URL generation), and authentication backends. Use it whenever building an API consumed by a frontend or mobile app.",
      },
    ],
  },

  "flask": {
    overview:
      "Flask is a lightweight WSGI Python web framework designed to make getting started quick and easy. Its minimalist core — routing, request handling, templating — gives developers full control over which components to add. Flask is widely used for REST APIs, prototypes, and microservices where Django's batteries would be unnecessary overhead.",
    whatsCovered: [
      "Application factory pattern and Blueprint-based modular routing",
      "Request context, application context, and the g object",
      "Flask-SQLAlchemy ORM integration and migrations with Alembic",
      "Flask-RESTful and Marshmallow for API validation and serialization",
      "Error handling, before/after request hooks, and custom error pages",
    ],
    whoIsItFor:
      "Python developers who prefer a minimal framework and want to choose their own database, ORM, and auth libraries rather than accepting framework defaults.",
    faqs: [
      {
        q: "What is the difference between Flask's application context and request context?",
        a: "The request context (per HTTP request) provides the request and session proxies. The application context provides current_app and g. g is a per-request namespace reset each request — use it to store resources like database connections opened in before_request.",
      },
      {
        q: "How do you structure a large Flask application?",
        a: "Use Blueprints to split the app into modules (auth, api, admin). Each blueprint owns its routes, templates, and static files. Wire everything together in a create_app() factory function to enable multiple app instances for testing.",
      },
      {
        q: "How does Flask handle database connections with SQLAlchemy?",
        a: "Flask-SQLAlchemy binds SQLAlchemy to the Flask app context. db.session is scoped to the request — it's automatically committed or rolled back at request end. Use db.init_app(app) with the factory pattern to avoid circular imports.",
      },
      {
        q: "How do you create a REST API with Flask?",
        a: "Use @app.route('/users/<int:id>', methods=['GET','PUT','DELETE']) and return jsonify(data). For larger APIs, Flask-RESTful adds Resource classes; Flask-Smorest adds OpenAPI schema generation and request validation via Marshmallow.",
      },
      {
        q: "How do you handle errors in Flask?",
        a: "Use @app.errorhandler(404) to register handlers for HTTP error codes. Call abort(404) from routes to trigger them. For JSON APIs, return jsonify({'error': 'Not found'}), status_code consistently. Register a catch-all @app.errorhandler(Exception) for unexpected errors.",
      },
    ],
  },

  "fastapi": {
    overview:
      "FastAPI is a modern, high-performance Python web framework for building APIs with Python 3.8+ based on standard type hints. Built on Starlette and Pydantic, it delivers automatic OpenAPI documentation, request validation, and serialization with zero boilerplate. Benchmarks consistently place FastAPI among the fastest Python frameworks.",
    whatsCovered: [
      "Path parameters, query params, and request body validation with Pydantic",
      "Dependency injection — reusable dependencies, DB sessions, auth",
      "Async endpoints with async/await and background tasks",
      "Automatic OpenAPI (Swagger UI + ReDoc) documentation generation",
      "OAuth2, JWT authentication, and security schemes",
    ],
    whoIsItFor:
      "Python developers building high-performance REST APIs who value auto-generated documentation, type safety, and async-first design.",
    faqs: [
      {
        q: "How does FastAPI generate documentation automatically?",
        a: "FastAPI reads Python type hints and Pydantic models from route signatures to generate an OpenAPI 3.0 schema at /openapi.json, then serves Swagger UI at /docs and ReDoc at /redoc — no extra configuration required.",
      },
      {
        q: "How does FastAPI's dependency injection work?",
        a: "Declare a function with Depends() as a route parameter. FastAPI calls it and injects the result. Use yield-based dependencies for DB sessions (automatically closed after the request). Dependencies can depend on other dependencies.",
      },
      {
        q: "When should you use async def vs def in FastAPI?",
        a: "Use async def for I/O-bound operations using async libraries (asyncpg, httpx). Use plain def for synchronous library calls — FastAPI runs these in a thread pool to avoid blocking the event loop. Mixing sync/async incorrectly causes performance problems.",
      },
      {
        q: "How does FastAPI validate request data?",
        a: "Define a Pydantic BaseModel and use it as a parameter type. FastAPI parses the JSON body, validates types and constraints, and returns a 422 Unprocessable Entity with detailed field-level error messages if validation fails.",
      },
      {
        q: "How does FastAPI compare to Flask?",
        a: "FastAPI is async-first and delivers 2-3x the throughput of synchronous Flask. It provides automatic validation and docs that Flask lacks. Choose FastAPI for new APIs; Flask when you need its mature ecosystem of extensions or simpler mental model.",
      },
    ],
  },

  "node-js": {
    overview:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables server-side JavaScript execution. Its event-driven, non-blocking I/O model makes it exceptionally efficient for real-time applications, REST APIs, and data streaming. With npm's two-million-package ecosystem, Node.js is the backbone of modern full-stack JavaScript development.",
    whatsCovered: [
      "Event loop mechanics — call stack, task queue, and microtask queue",
      "Core modules: fs, http, path, stream, EventEmitter, and cluster",
      "npm / package.json — scripts, dependencies, semver, and workspaces",
      "Async patterns: callbacks, Promises, async/await, and error handling",
      "Streams, Buffers, and child_process for system-level operations",
    ],
    whoIsItFor:
      "JavaScript developers building APIs, CLI tools, real-time applications, or server-side pipelines who want a single language across the full stack.",
    faqs: [
      {
        q: "How does the Node.js event loop work?",
        a: "Node.js runs on a single thread. Synchronous code runs first. Completed I/O callbacks queue for the event loop phases: timers → I/O callbacks → poll → check (setImmediate) → close callbacks. Promise microtasks are processed after each phase, before the next.",
      },
      {
        q: "What is the difference between require() and import in Node.js?",
        a: "require() is CommonJS — synchronous and the historic default. import is ESM — static, tree-shakeable, and the modern standard. Use ESM by setting \"type\": \"module\" in package.json or using .mjs extensions. Most new packages ship dual CJS/ESM builds.",
      },
      {
        q: "How do you handle errors in async Node.js code?",
        a: "With callbacks: check the first argument (if err). With Promises: .catch(). With async/await: try/catch. Add process.on('unhandledRejection', handler) as a global safety net. Never silently swallow errors.",
      },
      {
        q: "What is the difference between process.nextTick() and setImmediate()?",
        a: "process.nextTick() fires before the event loop moves to the next phase — after the current synchronous code, before any I/O. setImmediate() fires in the check phase, after I/O callbacks. nextTick is for deferred synchronous logic; setImmediate for deferring after I/O.",
      },
      {
        q: "How do you use multiple CPU cores in Node.js?",
        a: "Node.js is single-threaded, but the cluster module forks worker processes sharing a port. PM2 cluster mode automates this. For CPU-intensive tasks, use worker_threads. Stateless processes behind a load balancer is the most common production pattern.",
      },
    ],
  },

  "express-js": {
    overview:
      "Express.js is the minimal and flexible Node.js web framework that provides a thin layer of features without obscuring Node.js itself. Its middleware-based pipeline architecture and unopinionated design make it the most downloaded Node.js framework, with over 30 million weekly npm downloads. Express is the E in the MEAN and MERN stacks.",
    whatsCovered: [
      "Middleware pipeline — request lifecycle and next() chaining",
      "Routing — Router(), route parameters, query strings, and route grouping",
      "Error handling — the four-argument (err, req, res, next) signature",
      "Template engines (EJS, Pug) and static file serving with express.static",
      "Security essentials — helmet, cors, rate limiting, and input validation",
    ],
    whoIsItFor:
      "Node.js developers building REST APIs or web applications who want maximum flexibility to assemble their own middleware stack.",
    faqs: [
      {
        q: "What is Express middleware and how does the pipeline work?",
        a: "Middleware are functions with (req, res, next) signature. Express executes them in registration order. Call next() to pass control forward, next(err) to jump to error handlers, or end the cycle with res.send()/res.json(). Register with app.use() or on specific route methods.",
      },
      {
        q: "How do you create a modular routing structure in Express?",
        a: "Use express.Router() to create mini-apps with their own middleware and routes. Register routes on the router, then mount it: app.use('/api/users', userRouter). One Router per resource keeps route files focused.",
      },
      {
        q: "How does Express error handling work?",
        a: "Error middleware has four parameters: (err, req, res, next). Pass errors with next(err) from anywhere. Express skips regular middleware and goes straight to error handlers. Always define them last with app.use((err, req, res, next) => ...).",
      },
      {
        q: "How does Express handle async route errors?",
        a: "Express does not catch async errors automatically. Wrap async handlers in try/catch and call next(err), or use express-async-errors package which patches Express to handle unhandled rejections from async route handlers.",
      },
      {
        q: "What security middleware should every Express app use?",
        a: "helmet sets HTTP security headers. cors restricts cross-origin requests. express-rate-limit prevents brute force. express-validator sanitizes and validates input. Never trust req.body without validation, and always use HTTPS in production.",
      },
    ],
  },

  "nestjs": {
    overview:
      "NestJS is a progressive Node.js framework built with TypeScript, heavily inspired by Angular's architecture. It provides a strongly-opinionated structure through modules, decorators, and a powerful dependency injection container. NestJS supports REST, GraphQL, WebSockets, and microservices out of the box and is the dominant TypeScript Node.js framework for enterprise backends.",
    whatsCovered: [
      "Module system — @Module(), feature modules, imports, providers, exports",
      "Dependency injection — @Injectable(), custom providers, and scopes",
      "Guards, Interceptors, Pipes, and Exception Filters — the execution pipeline",
      "TypeORM and Prisma integration with repository and service patterns",
      "Microservices transport layers: TCP, Redis, NATS, and Kafka",
    ],
    whoIsItFor:
      "TypeScript developers building structured, testable Node.js backends who want Angular-like architecture with built-in support for microservices.",
    faqs: [
      {
        q: "What is NestJS's module system?",
        a: "Every NestJS app is a graph of modules. @Module() declares providers (services), controllers, imports (other modules), and exports (providers to share). Feature modules (UserModule, AuthModule) enforce encapsulation and explicit dependency boundaries.",
      },
      {
        q: "What is the request execution order in NestJS?",
        a: "Request → Middleware → Guards → Interceptors (before) → Pipes → Route Handler → Interceptors (after) → Exception Filters (on error). Guards control access. Pipes transform/validate input. Interceptors wrap the handler for logging, caching, or response mapping.",
      },
      {
        q: "How do you implement JWT auth in NestJS?",
        a: "Install @nestjs/passport and passport-jwt. Create a JwtStrategy extending PassportStrategy, register a JwtAuthGuard, and decorate protected routes with @UseGuards(JwtAuthGuard). Access the authenticated user via @Req() or a custom @User() decorator.",
      },
      {
        q: "How does dependency injection work in NestJS?",
        a: "Mark a class with @Injectable() and add it to a module's providers array. NestJS reads constructor parameter types via TypeScript metadata and resolves them. For non-class tokens use @Inject(TOKEN) with useValue, useFactory, or useClass providers.",
      },
      {
        q: "When should you use NestJS vs plain Express?",
        a: "Use NestJS for large, team-built applications that benefit from enforced structure, DI, and TypeScript throughout. Use Express for simple services where NestJS's module system is overkill. NestJS runs on Express (or Fastify) internally, so the runtime cost is minimal.",
      },
    ],
  },

  "laravel": {
    overview:
      "Laravel is the PHP framework for web artisans — elegant, expressive, and equipped with a full ecosystem: Eloquent ORM, Blade templating, Artisan CLI, queues, events, and first-party packages for auth, payments, and testing. Laravel consistently tops PHP developer satisfaction surveys and powers countless SaaS products worldwide.",
    whatsCovered: [
      "Eloquent ORM — models, relationships, eager loading, and query scopes",
      "Artisan CLI — generators, migrations, seeders, and custom commands",
      "Blade templating — directives, components, layouts, and slots",
      "Service container, service providers, and facades",
      "Queues, events, broadcasting, and scheduled tasks",
    ],
    whoIsItFor:
      "PHP developers building modern web applications who want an expressive, full-featured framework with an outstanding developer experience.",
    faqs: [
      {
        q: "What is Laravel's service container?",
        a: "The service container is an IoC container managing class dependencies. Bind interfaces to implementations with $app->bind(). Controllers and services receive dependencies via type-hinted constructor parameters automatically resolved by the container.",
      },
      {
        q: "How does Eloquent ORM handle relationships?",
        a: "Define relationships as methods: hasOne(), hasMany(), belongsTo(), belongsToMany(). Access them as properties (lazy loading) or eager load with ::with(['relation']) to avoid N+1 queries. Eloquent generates the correct SQL JOIN or separate query.",
      },
      {
        q: "What is the difference between Laravel gates and policies?",
        a: "Gates are closures in AuthServiceProvider for simple authorization (Gate::define). Policies are classes grouping authorization logic per model (UserPolicy::update). Use policies for model CRUD; gates for actions that don't map to a specific model.",
      },
      {
        q: "How does Laravel's queue system work?",
        a: "Dispatch a job class implementing ShouldQueue. Laravel serializes it and pushes it to the configured driver (Redis, SQS, database). Run php artisan queue:work to consume. Failed jobs go to the failed_jobs table and can be retried with artisan queue:retry.",
      },
      {
        q: "What is the difference between Sanctum and Passport?",
        a: "Sanctum provides simple API token authentication (personal access tokens stored in database) and SPA cookie-based auth. Passport is a full OAuth2 server implementation. Use Sanctum for most APIs and SPAs; Passport only when you need OAuth2 authorization server functionality.",
      },
    ],
  },

  "gin": {
    overview:
      "Gin is a high-performance HTTP web framework written in Go. It features a Martini-like API with much better performance — up to 40x faster — thanks to httprouter. Gin provides routing, middleware, JSON validation, rendering, and error management in a clean, minimalistic package that embraces Go's simplicity.",
    whatsCovered: [
      "Router groups, path parameters, and wildcard matching",
      "Middleware — gin.HandlerFunc, c.Next(), c.Abort(), and middleware scoping",
      "Request binding — ShouldBindJSON, ShouldBindQuery, and struct tag validation",
      "Context — gin.Context, JSON/XML/HTML rendering, and custom responses",
      "Error handling, recovery middleware, and graceful shutdown",
    ],
    whoIsItFor:
      "Go developers building high-performance REST APIs or microservices who want a fast, lightweight framework with minimal magic.",
    faqs: [
      {
        q: "How does Gin middleware work?",
        a: "Middleware are gin.HandlerFunc functions added with router.Use(). Call c.Next() to pass control to the next handler; c.Abort() to stop the chain. Middleware runs in registration order before the route handler, then in reverse after c.Next() returns.",
      },
      {
        q: "How do you bind and validate request data in Gin?",
        a: "Use c.ShouldBindJSON(&req) to bind JSON to a struct. Add validation tags (binding:\"required,email\") using go-playground/validator. ShouldBind returns an error without aborting; c.BindJSON aborts with 400 automatically on validation failure.",
      },
      {
        q: "What is the difference between gin.New() and gin.Default()?",
        a: "gin.Default() attaches Logger and Recovery middleware automatically — useful for most applications. gin.New() creates a bare engine with no middleware, giving you full control. Use Default() for development; consider New() when building a custom middleware stack.",
      },
      {
        q: "How do you implement JWT authentication in Gin?",
        a: "Parse the Authorization header in middleware, validate the token, and store claims in context with c.Set('userID', claims.Sub). Route handlers read it with c.MustGet('userID'). Apply the middleware to router groups that require authentication.",
      },
      {
        q: "How do you handle errors consistently across Gin routes?",
        a: "Use c.Error(err) to attach errors, then a final middleware reads c.Errors and formats the response uniformly. Alternatively define a helper that writes a consistent JSON error struct and call it from every route on error.",
      },
    ],
  },

  "ruby-on-rails": {
    overview:
      "Ruby on Rails is a full-stack web framework following MVC and two core principles: Convention over Configuration (CoC) and Don't Repeat Yourself (DRY). Rails pioneered modern web development practices — database migrations, RESTful routing, integrated testing, and scaffolding — and still powers GitHub, Shopify, and Basecamp.",
    whatsCovered: [
      "ActiveRecord ORM — migrations, associations, scopes, and callbacks",
      "RESTful routing — resources, nested routes, and custom actions",
      "Rails MVC — controllers, strong parameters, and before_action filters",
      "Action View — ERB templates, partials, layouts, and view helpers",
      "ActiveJob, Action Mailer, Active Storage, and Hotwire/Turbo",
    ],
    whoIsItFor:
      "Ruby developers building web applications who value rapid development, strong conventions, and a rich ecosystem for common functionality.",
    faqs: [
      {
        q: "What does 'Convention over Configuration' mean in Rails?",
        a: "Rails assumes sensible defaults — a User model maps to users table, its controller is UsersController, views live in app/views/users/. You only configure where you deviate. This eliminates boilerplate and lets teams focus on application logic.",
      },
      {
        q: "How do Rails migrations work?",
        a: "Migrations are versioned Ruby scripts describing schema changes (create_table, add_column). Run rails db:migrate to apply; rails db:rollback to reverse the latest. Rails tracks applied migrations in schema_migrations. Never edit schema.rb directly.",
      },
      {
        q: "What is ActiveRecord and how do associations work?",
        a: "ActiveRecord is Rails' ORM mapping Ruby objects to database rows. Declare associations with has_many :posts, belongs_to :user, etc. Use .includes(:association) for eager loading to prevent N+1 queries. Rails generates the correct SQL automatically.",
      },
      {
        q: "What are strong parameters?",
        a: "Strong parameters whitelist which attributes a controller accepts from user input, preventing mass-assignment vulnerabilities. Define them in a private method: params.require(:user).permit(:name, :email), then pass to model.create/update.",
      },
      {
        q: "What is Hotwire and how does it change Rails development?",
        a: "Hotwire (Turbo + Stimulus) enables SPA-like interactivity without writing much JavaScript. Turbo Drive intercepts navigations; Turbo Frames and Streams update parts of the page over a WebSocket. It lets Rails developers build reactive UIs while keeping logic on the server.",
      },
    ],
  },

  "hibernate": {
    overview:
      "Hibernate is the leading Java ORM framework that maps Java classes to database tables, letting developers interact with relational databases using object-oriented code instead of SQL. As the reference implementation of JPA, Hibernate handles caching (L1 and L2), lazy loading, cascade operations, and schema generation — and is used in the majority of Spring Boot applications.",
    whatsCovered: [
      "Entity mapping — @Entity, @Table, @Column, @Id, @GeneratedValue",
      "Association mapping — @OneToMany, @ManyToOne, @ManyToMany, fetch types",
      "HQL and Criteria API for type-safe, database-agnostic queries",
      "First-level and second-level caching with Ehcache or Redis",
      "N+1 detection, FetchType strategies, and JOIN FETCH solutions",
    ],
    whoIsItFor:
      "Java developers working with relational databases who want to avoid JDBC boilerplate and prefer working with entity objects instead of SQL result sets.",
    faqs: [
      {
        q: "What is the difference between Hibernate and JPA?",
        a: "JPA is a specification defining annotations and APIs for ORM in Java. Hibernate is the most widely used JPA implementation — it provides the actual SQL generation, caching, and database dialect support. You code to the JPA API; Hibernate is the runtime engine.",
      },
      {
        q: "What are the Hibernate entity lifecycle states?",
        a: "Transient: new object, not in any session. Persistent: associated with an open session, changes tracked. Detached: previously persistent, session closed, changes not tracked. Removed: marked for deletion on next flush. Transitions via persist(), merge(), remove().",
      },
      {
        q: "How does Hibernate's first-level cache work?",
        a: "The L1 cache is the Session cache — mandatory and always active. Within one Session, loading the same entity ID twice returns the cached instance without a second SQL query. The cache is cleared when the Session closes or via session.evict(entity).",
      },
      {
        q: "What causes the N+1 query problem?",
        a: "Loading N parent entities with LAZY fetch on a collection, then accessing each collection, fires 1 parent query + N child queries. Fix with JOIN FETCH in HQL: SELECT p FROM Post p JOIN FETCH p.comments, or use @EntityGraph or @BatchSize to batch the lazy loads.",
      },
      {
        q: "What is the difference between merge() and persist()?",
        a: "persist() makes a transient entity managed — fails if the entity already has a database ID. merge() copies a detached entity's state into a new managed instance — safe when you don't know if the entity is new. Use merge() in web apps where entities cross request boundaries.",
      },
    ],
  },

  "fastify": {
    overview:
      "Fastify is a high-performance Node.js web framework focused on developer experience and speed. It achieves 30,000+ requests/second via schema-based JSON serialization and a low-overhead plugin architecture. Fastify's plugin system, TypeScript support, and built-in logging via Pino make it a strong choice for performance-critical APIs.",
    whatsCovered: [
      "Plugin system — encapsulation, fastify-plugin, and scope isolation",
      "Schema-based validation and serialization with JSON Schema",
      "Hooks lifecycle — onRequest, preHandler, onSend, onClose",
      "Fastify decorators for extending request, reply, and the instance",
      "TypeScript integration and type-safe route definitions",
    ],
    whoIsItFor:
      "Node.js developers who need maximum performance in a structured framework with built-in schema validation and a clean plugin architecture.",
    faqs: [
      {
        q: "Why is Fastify faster than Express?",
        a: "Fastify uses JSON Schema to compile serializers at startup, avoiding per-request JSON.stringify overhead. Its internal request lifecycle and plugin system are designed for minimal allocations. These optimizations together yield 2-3x the throughput of Express in benchmarks.",
      },
      {
        q: "How does Fastify's plugin system work?",
        a: "Plugins are functions registered with fastify.register(). Each plugin runs in an encapsulated scope — decorators, routes, and hooks added inside are invisible outside. Use fastify-plugin to break encapsulation and share a plugin's additions with the parent scope.",
      },
      {
        q: "How does schema validation work in Fastify?",
        a: "Pass a schema object to route options: { schema: { body: { type: 'object', required: ['email'] }, response: { 200: UserSchema } } }. Fastify compiles validators with ajv at startup and returns 400 on validation failure automatically.",
      },
      {
        q: "What are Fastify decorators?",
        a: "Decorators extend the Fastify instance, request, or reply with new properties or methods: fastify.decorate('db', dbConnection). This is how database connections, authentication utilities, and shared services are attached and reused across plugins and routes.",
      },
      {
        q: "How does Fastify handle async errors?",
        a: "Fastify catches unhandled promise rejections from async route handlers automatically — no need for try/catch wrappers. Thrown errors are passed to the error handler. Define fastify.setErrorHandler() to customize how errors are serialized and logged.",
      },
    ],
  },

  "asp-net-core": {
    overview:
      "ASP.NET Core is Microsoft's open-source, cross-platform web framework for building modern web apps and APIs with C#. It runs on Windows, Linux, and macOS, delivers high throughput (consistently top-5 in TechEmpower benchmarks), and unifies MVC, Razor Pages, gRPC, SignalR, and Minimal APIs in a single framework.",
    whatsCovered: [
      "Middleware pipeline — app.Use, app.Map, and built-in middleware",
      "Dependency injection — IServiceCollection, lifetimes, and IOptions pattern",
      "Controllers vs. Minimal APIs — when to use each",
      "Authentication — JWT bearer, cookie auth, and ASP.NET Core Identity",
      "Configuration, environment variables, and appsettings.json hierarchy",
    ],
    whoIsItFor:
      "C# developers building REST APIs, web applications, or microservices on any platform who want a modern, high-performance .NET web framework.",
    faqs: [
      {
        q: "How does the ASP.NET Core middleware pipeline work?",
        a: "Middleware components are chained in Program.cs using app.Use(). Each component calls next() to pass the request forward. Middleware runs in registration order on the way in and in reverse on the way out. Order matters — authentication must precede authorization.",
      },
      {
        q: "What is the difference between Minimal APIs and Controller-based APIs?",
        a: "Minimal APIs (app.MapGet, app.MapPost) are concise, functional-style route definitions ideal for simple services. Controller-based APIs add structure with attributes, model binding, filters, and action results — better for larger APIs with complex logic.",
      },
      {
        q: "How does ASP.NET Core dependency injection work?",
        a: "Register services in Program.cs: builder.Services.AddScoped<IRepo, Repo>(). Three lifetimes: Transient (new per injection), Scoped (one per HTTP request), Singleton (one for app lifetime). Inject via constructor parameters — the framework resolves automatically.",
      },
      {
        q: "How do you implement JWT authentication in ASP.NET Core?",
        a: "Add AddAuthentication().AddJwtBearer() in Program.cs, configure the token parameters (issuer, audience, key). Add app.UseAuthentication() and app.UseAuthorization() in the pipeline. Decorate controllers or endpoints with [Authorize].",
      },
      {
        q: "What is the IOptions pattern?",
        a: "IOptions<T> binds a configuration section to a strongly-typed class. Register with builder.Services.Configure<MySettings>(builder.Configuration.GetSection('MySettings')). Inject IOptions<MySettings> into services and access settings.Value.SomeProp. Use IOptionsSnapshot for per-request reload.",
      },
    ],
  },

  "symfony": {
    overview:
      "Symfony is a PHP framework and set of reusable components that are the foundation for Laravel, Drupal, and many other PHP projects. Its emphasis on stability, long-term support, and enterprise-grade architecture has made it the framework of choice for complex, mission-critical PHP applications.",
    whatsCovered: [
      "Service container — autowiring, service definitions, and tags",
      "Routing — attributes-based routing and route parameters",
      "Doctrine ORM integration — entities, repositories, and migrations",
      "Security component — firewalls, voters, access control, and Guard",
      "Console component, Messenger (queues), and Event Dispatcher",
    ],
    whoIsItFor:
      "PHP developers building complex enterprise applications who need a stable, well-structured framework with guaranteed long-term support.",
    faqs: [
      {
        q: "What is Symfony's service container?",
        a: "The service container manages class instantiation and dependency injection. Autowiring reads constructor type-hints and resolves services automatically. Mark services as public, private, lazy, or tagged. bin/console debug:container lists all registered services.",
      },
      {
        q: "How does Symfony's security component work?",
        a: "Define firewalls in security.yaml mapping URL patterns to authentication providers. Voters implement authorization logic for specific permissions. Access control rules in security.yaml protect URL patterns by role. Guard Authenticators implement custom authentication flows.",
      },
      {
        q: "How does Symfony differ from Laravel?",
        a: "Symfony prioritizes stability (5-year LTS releases), strict architecture, and component reusability over developer convenience. Laravel provides more magic and faster scaffolding. Symfony is preferred for complex enterprise systems; Laravel for rapid product development.",
      },
      {
        q: "What is Symfony Messenger?",
        a: "Messenger is a message bus component for asynchronous processing. Dispatch a Message class; a Handler processes it. Configure transports (RabbitMQ, Doctrine, Redis) for async. Use synchronous transport for testing. Enables CQRS patterns and background job processing.",
      },
      {
        q: "How do you handle events in Symfony?",
        a: "The Event Dispatcher uses subscribe/listen patterns. Create an event class, dispatch it with $dispatcher->dispatch($event), and add listeners or subscribers. Kernel events (kernel.request, kernel.response) hook into the request lifecycle for middleware-like behavior.",
      },
    ],
  },

  "quarkus": {
    overview:
      "Quarkus is a Kubernetes-native Java framework optimized for GraalVM native image compilation and low-resource cloud deployments. It achieves sub-second startup times and a fraction of the memory footprint of Spring Boot, making it ideal for serverless functions, containers, and microservices.",
    whatsCovered: [
      "Build modes — JVM mode vs. native image compilation with GraalVM",
      "CDI dependency injection and @ApplicationScoped, @RequestScoped",
      "RESTEasy Reactive and Mutiny — reactive REST endpoints",
      "Panache ORM — simplified Hibernate with Active Record pattern",
      "Dev Mode — live reload, Dev UI, and Dev Services for zero-config local development",
    ],
    whoIsItFor:
      "Java developers building cloud-native microservices or serverless functions who need faster startup times and lower memory usage than traditional JVM frameworks.",
    faqs: [
      {
        q: "What makes Quarkus faster to start than Spring Boot?",
        a: "Quarkus moves most framework work to build time — dependency injection wiring, configuration resolution, and classpath scanning happen during the build, not at startup. This reduces runtime work to near zero, enabling millisecond startup vs. seconds for traditional JVM apps.",
      },
      {
        q: "What is GraalVM native image compilation in Quarkus?",
        a: "Native compilation converts the JVM app into a native binary with no JVM required. Run mvn package -Pnative to produce a native executable. It starts in under 100ms and uses 50-90% less memory, at the cost of longer build times and some JVM reflection limitations.",
      },
      {
        q: "What is Panache in Quarkus?",
        a: "Panache simplifies Hibernate usage with two patterns: Active Record (entity methods directly on the model class: Person.findById(id)) and Repository (separate repository class). Both reduce boilerplate compared to standard JPA repositories.",
      },
      {
        q: "What is Quarkus Dev Mode?",
        a: "Run quarkus dev to start live reload — source changes are picked up without restart. Dev UI at localhost:8080/q/dev provides extension dashboards. Dev Services automatically starts Docker containers for databases, Kafka, etc. — zero configuration for local development.",
      },
      {
        q: "When should you choose Quarkus over Spring Boot?",
        a: "Choose Quarkus when startup time and memory footprint matter — containerized microservices, serverless functions, or tight resource environments. Choose Spring Boot for rich ecosystem, team familiarity, or when native compilation constraints (reflection, proxies) are a concern.",
      },
    ],
  },

  "koa": {
    overview:
      "Koa is a next-generation Node.js web framework designed by the team behind Express. It uses async/await throughout its middleware system instead of callbacks, eliminating the need for try/catch in every handler. Koa's minimal footprint (no bundled middleware) makes it ideal for building lean, composable HTTP servers.",
    whatsCovered: [
      "async/await middleware cascade — ctx, next(), and upstream/downstream flow",
      "Context object (ctx) — request, response, state, and custom properties",
      "Router setup with @koa/router — named routes and route params",
      "Error handling with ctx.throw() and app.on('error', handler)",
      "Popular middleware: koa-bodyparser, koa-static, koa-session, koa-cors",
    ],
    whoIsItFor:
      "Node.js developers who prefer async/await-first middleware architecture and want a lightweight base without Express's callback-based legacy.",
    faqs: [
      {
        q: "How is Koa's middleware different from Express?",
        a: "Koa uses async functions and true upstream/downstream flow. After all downstream middleware runs, control flows back up through each middleware — enabling clean post-processing (logging response time, setting headers). Express uses callbacks where next() only goes downstream.",
      },
      {
        q: "What is the Koa context object?",
        a: "ctx is a per-request object combining the Node.js request and response. ctx.request / ctx.response provide Koa's higher-level API. ctx.state is a plain object for passing data between middleware. Set ctx.body to send a response.",
      },
      {
        q: "How do you handle errors in Koa?",
        a: "Use ctx.throw(400, 'Bad Request') to throw HTTP errors. Wrap your app's middleware chain in an outer error-handling middleware using try/catch around await next(). Listen to app.on('error', handler) for unhandled errors that escape to the app level.",
      },
      {
        q: "Does Koa include a router?",
        a: "No — Koa has no router by default. Install @koa/router for routing: router.get('/users/:id', async ctx => { ctx.body = await getUser(ctx.params.id) }). Mount with app.use(router.routes()).use(router.allowedMethods()).",
      },
      {
        q: "When would you choose Koa over Express or Fastify?",
        a: "Choose Koa for a clean, modern async middleware stack with no legacy callback baggage. Choose Express for the widest middleware ecosystem. Choose Fastify for maximum throughput. Koa sits between: cleaner than Express, more flexible than Fastify.",
      },
    ],
  },

  "entity-framework-core": {
    overview:
      "Entity Framework Core is Microsoft's modern, open-source ORM for .NET. It enables .NET developers to work with databases using .NET objects, eliminating most data-access code. EF Core supports Code-First migrations, LINQ queries, and multiple database providers (SQL Server, PostgreSQL, SQLite, MySQL).",
    whatsCovered: [
      "DbContext setup, entity configuration, and the Fluent API",
      "Code-First migrations — Add-Migration, Update-Database, and rollbacks",
      "LINQ queries — filtering, projection, joins, and eager loading",
      "Change tracking — how EF Core detects and persists changes",
      "Performance — AsNoTracking, compiled queries, and raw SQL when needed",
    ],
    whoIsItFor:
      "C# and .NET developers who want a productive ORM that eliminates boilerplate SQL while retaining full control over queries and schema.",
    faqs: [
      {
        q: "How does EF Core's change tracking work?",
        a: "When you load entities via DbContext, EF Core tracks their original values. Calling SaveChanges() detects what changed, generates the appropriate INSERT/UPDATE/DELETE SQL, and executes it in a transaction. Use AsNoTracking() for read-only queries to skip tracking overhead.",
      },
      {
        q: "What is the difference between eager and lazy loading in EF Core?",
        a: "Eager loading fetches related data in the same query using .Include(p => p.Orders). Lazy loading fetches related data on first access (requires virtual navigation properties and the Microsoft.EntityFrameworkCore.Proxies package). Eager loading is safer and avoids N+1 queries.",
      },
      {
        q: "How do EF Core migrations work?",
        a: "Run dotnet ef migrations add MigrationName to generate a migration file from model changes. Run dotnet ef database update to apply it. EF Core tracks applied migrations in __EFMigrationsHistory. Roll back with dotnet ef database update PreviousMigrationName.",
      },
      {
        q: "When should you use raw SQL in EF Core?",
        a: "Use FromSqlRaw() for complex queries that EF Core can't generate efficiently (CTEs, window functions, stored procedures). Use ExecuteSqlRaw() for non-query operations. Always parameterize values — never concatenate user input. EF Core's LINQ covers 90% of cases.",
      },
      {
        q: "How do you configure entity relationships in EF Core?",
        a: "Use data annotations (@ForeignKey, @Required) on entity properties, or the Fluent API in OnModelCreating: modelBuilder.Entity<Post>().HasOne(p => p.Blog).WithMany(b => b.Posts).HasForeignKey(p => p.BlogId). The Fluent API is more expressive for complex configurations.",
      },
    ],
  },

  "micronaut": {
    overview:
      "Micronaut is a JVM framework for building modular, easily testable microservice and serverless applications. Unlike Spring, Micronaut performs dependency injection and AOP at compile time using annotation processors — resulting in near-instant startup and minimal memory usage without requiring GraalVM.",
    whatsCovered: [
      "Compile-time DI — @Singleton, @Prototype, @Inject, and bean factories",
      "HTTP server and HTTP client with reactive support via Project Reactor / RxJava",
      "Data access — Micronaut Data (compile-time JPA repositories)",
      "Configuration — @ConfigurationProperties and environment-aware bindings",
      "Testing — @MicronautTest for fast integration tests",
    ],
    whoIsItFor:
      "Java/Kotlin/Groovy developers building microservices or serverless functions who need Spring-like DI with significantly faster startup and lower memory footprint.",
    faqs: [
      {
        q: "How is Micronaut's DI different from Spring's?",
        a: "Micronaut processes @Inject annotations at compile time using APT/KAPT, generating code that wires dependencies directly — no reflection at runtime. Spring scans and resolves beans at startup using reflection. Micronaut's approach eliminates startup reflection overhead and is GraalVM-native friendly.",
      },
      {
        q: "What is Micronaut Data?",
        a: "Micronaut Data is a compile-time data access toolkit similar to Spring Data. Define a repository interface with @Repository extending CrudRepository. Micronaut Data generates the SQL at compile time — no runtime reflection or dynamic proxies. Supports JPA, JDBC, and R2DBC.",
      },
      {
        q: "How does Micronaut handle configuration?",
        a: "Annotate a class with @ConfigurationProperties('myapp') and declare typed fields. Micronaut binds application.yml values to the class at startup. @Value injects individual properties. Environment-specific config files (application-prod.yml) override defaults.",
      },
      {
        q: "How do you test Micronaut applications?",
        a: "@MicronautTest starts a real Micronaut application context for integration tests. It's fast because Micronaut's startup is sub-second. Use @MockBean to replace specific beans with mocks. The embedded server allows full HTTP testing without deploying.",
      },
      {
        q: "When should you choose Micronaut over Spring Boot?",
        a: "Choose Micronaut for memory-constrained deployments, serverless functions, or when sub-second startup is critical. Choose Spring Boot for the richest ecosystem, team familiarity, and complex enterprise integrations. Both support GraalVM native, but Micronaut requires less configuration for native builds.",
      },
    ],
  },

  "echo": {
    overview:
      "Echo is a high-performance, extensible, minimalist Go web framework. It provides a fast router, middleware support, data binding, and template rendering — with a clean API that closely mirrors standard Go HTTP idioms. Echo is widely used for building REST APIs and microservices in Go.",
    whatsCovered: [
      "Routing — route groups, named routes, and path parameters",
      "Middleware — built-in middleware and custom middleware with e.Use()",
      "Request binding — BindJSON, BindQuery, and custom binders",
      "Error handling — HTTPError and custom error handler",
      "Context — echo.Context methods for reading requests and writing responses",
    ],
    whoIsItFor:
      "Go developers building REST APIs or microservices who want a feature-rich but lightweight framework with a gentle learning curve.",
    faqs: [
      {
        q: "How does Echo routing work?",
        a: "Register routes with e.GET('/users/:id', handler). Group related routes with g := e.Group('/api/v1') and add middleware to the group. Named routes allow URL generation with e.Reverse('routeName', params). Echo's router is based on a radix tree for fast matching.",
      },
      {
        q: "How do you bind request data in Echo?",
        a: "Use c.Bind(&req) to automatically bind JSON, form, or query params to a struct based on Content-Type. Add validate tags and call c.Validate(&req) with a registered validator (e.Validator = &CustomValidator{}) for input validation.",
      },
      {
        q: "How does Echo's error handling work?",
        a: "Return echo.NewHTTPError(http.StatusBadRequest, 'message') from handlers. Echo calls the registered error handler (e.HTTPErrorHandler) which formats the response. Set a custom handler for consistent JSON error responses across all routes.",
      },
      {
        q: "How do you add middleware in Echo?",
        a: "e.Use(middleware.Logger(), middleware.Recover()) adds global middleware. Apply to route groups with g.Use(authMiddleware). Apply to individual routes with e.GET('/protected', handler, authMiddleware). Echo middleware signature is func(echo.HandlerFunc) echo.HandlerFunc.",
      },
      {
        q: "How does Echo compare to Gin?",
        a: "Both are high-performance Go frameworks with similar benchmarks. Echo has a slightly cleaner API and better built-in support for HTTPS, HTTP/2, and WebSocket. Gin has more middleware in the ecosystem. The choice between them is largely preference.",
      },
    ],
  },

  "fiber": {
    overview:
      "Fiber is an Express-inspired Go web framework built on top of Fasthttp — the fastest HTTP engine for Go. It offers familiar Express-like syntax with Go's performance, making it a popular choice for developers transitioning from Node.js to Go who want to build high-throughput APIs.",
    whatsCovered: [
      "Express-like routing — app.Get, app.Post, app.Use, and route groups",
      "Middleware — built-in middleware and custom middleware with c.Next()",
      "ctx — Fiber's context for request parsing and response writing",
      "Template engines — HTML rendering with multiple engine support",
      "WebSocket, SSE, and built-in rate limiting",
    ],
    whoIsItFor:
      "Go developers (especially those from a Node.js/Express background) building high-throughput REST APIs who want familiar syntax with Go's performance.",
    faqs: [
      {
        q: "Why is Fiber fast?",
        a: "Fiber is built on Fasthttp rather than the standard net/http library. Fasthttp reuses memory allocations aggressively, avoiding GC pressure. The result is throughput that can be 10x higher than net/http-based frameworks for simple handlers.",
      },
      {
        q: "How does Fiber middleware work?",
        a: "Middleware functions receive *fiber.Ctx and call c.Next() to continue to the next handler. Register globally with app.Use() or on specific route groups. Fiber's built-in middleware covers logger, recover, compress, cache, limiter, CORS, and JWT.",
      },
      {
        q: "What are the caveats of using Fiber's Fasthttp?",
        a: "Fasthttp's Ctx is not compatible with the standard net/http Request/ResponseWriter interface. Libraries expecting standard http.Handler (OAuth2 clients, observability SDKs) need adapters. For standard library compatibility, Gin or Echo are more interoperable.",
      },
      {
        q: "How do you validate request input in Fiber?",
        a: "Use c.BodyParser(&req) to bind JSON/form/query to a struct, then validate with a library like go-playground/validator. Fiber doesn't include validation out of the box — it's intentionally minimal like Express.",
      },
      {
        q: "How does Fiber handle WebSockets?",
        a: "Import the websocket adapter: app.Get('/ws', websocket.New(func(c *websocket.Conn) { ... })). The handler runs in a goroutine per connection. Use c.ReadMessage() and c.WriteMessage() for bidirectional communication.",
      },
    ],
  },

  "chi": {
    overview:
      "Chi is a lightweight, idiomatic Go HTTP router built for composability. It uses only the standard library — no external dependencies — and follows Go's net/http conventions exactly, making it the favorite for developers who want routing without giving up standard http.Handler compatibility.",
    whatsCovered: [
      "Router setup — chi.NewRouter(), subrouters, and route nesting",
      "Middleware — chi.Use() and the middleware package built-ins",
      "URL parameters with chi.URLParam(r, 'id')",
      "Route groups and mounting sub-routers for modular code",
      "Context — passing values through middleware via context.WithValue",
    ],
    whoIsItFor:
      "Go developers who want idiomatic routing with zero framework lock-in, full standard library compatibility, and composable middleware.",
    faqs: [
      {
        q: "What makes Chi different from Gin and Fiber?",
        a: "Chi uses standard http.Handler and http.Request — zero custom types. Any middleware or library that works with net/http works with Chi. Gin and Fiber use custom context types for performance, trading compatibility for speed. Chi is the right choice when ecosystem compatibility matters.",
      },
      {
        q: "How does Chi routing work?",
        a: "r := chi.NewRouter(); r.Get('/users/{id}', handler). Access path params with chi.URLParam(r, 'id'). Group routes with r.Route('/api', func(r chi.Router) { r.Get('/users', ...) }). Mount sub-routers with r.Mount('/admin', adminRouter).",
      },
      {
        q: "How does Chi middleware work?",
        a: "Chi middleware are standard func(http.Handler) http.Handler wrappers. Register with r.Use(). Chi ships middleware for Logger, Recoverer, RealIP, RequestID, Timeout, Compress, Throttle, and JWT. Any net/http-compatible middleware package works.",
      },
      {
        q: "How do you pass data between Chi middleware and handlers?",
        a: "Use the standard context: ctx := context.WithValue(r.Context(), key, value) in middleware, then pass the updated request to next with r = r.WithContext(ctx). Handlers read with r.Context().Value(key). Define typed keys to avoid collisions.",
      },
      {
        q: "Is Chi suitable for large applications?",
        a: "Yes — Chi's sub-router and mounting system enables clean modular organization. Each feature area gets its own chi.Router, registered as a subrouter. The standard http.Handler interface means any Go HTTP library integrates without adapters.",
      },
    ],
  },

  "sinatra": {
    overview:
      "Sinatra is a minimal Ruby web framework (DSL) for building web applications and APIs quickly. Its simple, expressive route definitions make it ideal for small services, rapid prototyping, and learning web fundamentals — without Rails' conventions and overhead.",
    whatsCovered: [
      "Route definitions — get, post, put, patch, delete with block handlers",
      "Request and response — params, request object, and status/headers",
      "ERB templating, static files, and before/after filters",
      "Modular vs. classic application style",
      "Deployment with Rack and Puma/Thin",
    ],
    whoIsItFor:
      "Ruby developers building small APIs, microservices, or prototypes who want a lightweight alternative to Rails with minimal setup.",
    faqs: [
      {
        q: "How does Sinatra routing work?",
        a: "Routes are method + URL pattern + block: get '/users/:id' { User.find(params[:id]).to_json }. Patterns support named params (:id), splats (*), and regex. Routes are matched in definition order — first match wins.",
      },
      {
        q: "What is the difference between classic and modular Sinatra style?",
        a: "Classic style: require 'sinatra' and define routes at the top level — quick for scripts. Modular style: class App < Sinatra::Base — needed for mounting multiple apps, testing, and larger codebases. Modular is recommended for anything beyond a prototype.",
      },
      {
        q: "How do you use before and after filters in Sinatra?",
        a: "before { @user = authenticate! } runs before every route. before '/admin/*' {} scopes to a URL pattern. after {} runs after the route handler. Use them for authentication, logging, and setting common instance variables.",
      },
      {
        q: "How does Sinatra handle JSON APIs?",
        a: "Set content_type :json and return obj.to_json from routes. Use the sinatra-json helper or enable :json in settings. Parse incoming JSON with JSON.parse(request.body.read). For validation and serialization, add ActiveModel or dry-rb.",
      },
      {
        q: "How do you test Sinatra apps?",
        a: "Sinatra integrates with Rack::Test — include it in RSpec or Minitest. Use get '/path', {}, {'HTTP_AUTHORIZATION': ...} to make requests and assert on last_response.status and JSON.parse(last_response.body). No server needed.",
      },
    ],
  },

  "celery": {
    overview:
      "Celery is an asynchronous task queue/job queue for Python based on distributed message passing. It handles millions of tasks a day in production, integrating with brokers like Redis and RabbitMQ. Celery is the standard solution for offloading time-consuming operations — email sending, PDF generation, API calls — from web request handlers.",
    whatsCovered: [
      "Task definition with @app.celery.task and delay() / apply_async() dispatch",
      "Broker configuration — Redis vs. RabbitMQ tradeoffs",
      "Task retries, exponential backoff, and max_retries settings",
      "Celery Beat — periodic tasks and crontab scheduling",
      "Monitoring with Flower and task state inspection",
    ],
    whoIsItFor:
      "Python backend developers who need to run background jobs, periodic tasks, or distributed work queues alongside their web applications.",
    faqs: [
      {
        q: "How does Celery work?",
        a: "Your app sends a task message to a broker (Redis/RabbitMQ). Celery worker processes consume messages from the broker, execute the task function, and optionally store results in a result backend. Workers run as separate processes, independent of your web server.",
      },
      {
        q: "What is the difference between delay() and apply_async()?",
        a: "delay() is a shortcut for apply_async() with positional arguments: add.delay(2, 3). apply_async() accepts kwargs for advanced options: add.apply_async(args=[2, 3], countdown=10, retry=True, queue='high_priority'). Use apply_async() when you need control.",
      },
      {
        q: "How do you retry failed tasks in Celery?",
        a: "In the task, call self.retry(exc=exc, countdown=60, max_retries=3) inside an except block. Use autoretry_for=(Exception,) and retry_backoff=True on @app.task to retry automatically with exponential backoff. Failed tasks can also go to a dead-letter queue.",
      },
      {
        q: "What is Celery Beat?",
        a: "Celery Beat is a scheduler that sends periodic task messages. Define schedules in the beat_schedule config: {'add-every-30-seconds': {'task': 'tasks.add', 'schedule': 30.0}}. Run celery -A myapp beat alongside workers. Use crontab() for cron-style scheduling.",
      },
      {
        q: "How do you monitor Celery tasks in production?",
        a: "Flower is the standard Celery monitoring tool — run celery -A myapp flower for a web UI showing task status, worker state, and throughput. Integrate with Datadog or Prometheus via celery-exporter. Log task IDs on dispatch and check state with AsyncResult(task_id).state.",
      },
    ],
  },

  "codeigniter": {
    overview:
      "CodeIgniter is a powerful PHP framework with a very small footprint. Known for its simplicity, speed, and near-zero configuration, it remains popular for developers who need a lightweight, well-documented framework that runs on nearly any shared hosting environment.",
    whatsCovered: [
      "MVC structure — Controllers, Models, Views, and URI routing",
      "Query Builder for database operations without raw SQL",
      "Form validation library and input sanitization",
      "Session management, helpers, and libraries",
      "CodeIgniter 4 — namespaces, PSR compliance, and CLI commands",
    ],
    whoIsItFor:
      "PHP developers building web applications who need a simple, fast framework with minimal setup and broad shared-hosting compatibility.",
    faqs: [
      {
        q: "How does CodeIgniter routing work?",
        a: "CodeIgniter maps URLs to controllers by convention: /user/profile calls UserController::profile(). Define custom routes in app/Config/Routes.php: $routes->get('users/(:num)', 'Users::show/$1'). CodeIgniter 4 supports named routes and resource controllers.",
      },
      {
        q: "How does CodeIgniter's Query Builder work?",
        a: "Use $db->table('users')->where('active', 1)->get()->getResult() for SELECT. It builds parameterized queries automatically, protecting against SQL injection. Also supports insert(), update(), delete(), and join() with a fluent interface.",
      },
      {
        q: "How does form validation work in CodeIgniter?",
        a: "Load the validation library: $this->validate(['username' => 'required|min_length[3]']). Rules include required, min_length, max_length, valid_email, is_unique. Check validation_errors() in the view. CodeIgniter 4 uses Services::validation().",
      },
      {
        q: "What changed in CodeIgniter 4?",
        a: "CI4 adopts PSR-4 autoloading with namespaces, requires PHP 7.4+, adds a CLI (Spark), improves the routing system, adds a proper ORM (Entities + Models), and uses a service container. It's a near-complete rewrite while retaining CI's simplicity philosophy.",
      },
      {
        q: "How does CodeIgniter handle sessions?",
        a: "Sessions are managed by CodeIgniter's Session library, supporting multiple drivers: files (default), database, Redis, and Memcached. Set session data with $session->set(['user_id' => $id]); read with $session->get('user_id'). Supports flashdata for one-request data.",
      },
    ],
  },

  "blazor": {
    overview:
      "Blazor is Microsoft's framework for building interactive web UIs with C# instead of JavaScript. Blazor Server runs components on the server over a SignalR connection; Blazor WebAssembly runs the .NET runtime directly in the browser. Both let .NET developers build rich SPAs and interactive pages without switching languages.",
    whatsCovered: [
      "Component model — @code blocks, parameters, cascading values, and event callbacks",
      "Blazor Server vs. WebAssembly vs. Hybrid — tradeoffs and use cases",
      "Data binding — @bind, two-way binding, and @onchange",
      "Dependency injection in Blazor — @inject and service lifetimes",
      "JavaScript interop — IJSRuntime.InvokeAsync and calling .NET from JS",
    ],
    whoIsItFor:
      ".NET developers who want to build interactive web UIs without JavaScript, reusing existing C# skills, libraries, and server-side logic.",
    faqs: [
      {
        q: "What is the difference between Blazor Server and Blazor WebAssembly?",
        a: "Blazor Server runs C# on the server; UI events are sent over SignalR and DOM updates are pushed back. Blazor WASM downloads the .NET runtime to the browser and runs entirely client-side. Server is faster to start, WASM works offline. Blazor Hybrid embeds both for desktop/mobile apps.",
      },
      {
        q: "How does Blazor's component model work?",
        a: "Components are .razor files combining HTML markup with a @code { } block. Parameters are public properties with [Parameter] attribute. Child components receive values via parameter attributes. EventCallback<T> enables child-to-parent communication.",
      },
      {
        q: "How does dependency injection work in Blazor?",
        a: "Register services in Program.cs: builder.Services.AddScoped<IMyService, MyService>(). Inject in components with @inject IMyService MyService or in code-behind with [Inject] attribute. Blazor Server uses Scoped per-circuit; WASM uses Scoped per-app-lifetime.",
      },
      {
        q: "How do you call JavaScript from Blazor?",
        a: "Inject IJSRuntime and call await JSRuntime.InvokeAsync<string>('functionName', args). Define the JS function in wwwroot. Use ValueTask overloads to avoid unnecessary async overhead. IJSObjectReference handles JS module imports. Call .NET from JS via DotNet.invokeMethodAsync.",
      },
      {
        q: "What are the performance implications of Blazor Server?",
        a: "Blazor Server requires a persistent SignalR connection per user — every UI interaction roundtrips to the server. This limits scalability under high concurrent user loads. Use static rendering and streaming for read-heavy pages, and only Blazor interactive components where real interactivity is needed.",
      },
    ],
  },
};

function generic(
  name: string,
  categorySlug: string,
  categoryLabel: string
): TechPageContent {
  const s = categorySlug.toLowerCase();

  if (s.includes("database") || s.includes("sql") || s === "caching" || s.includes("cache") || s.includes("search")) {
    return {
      overview: `${name} is a data storage or query technology used by engineering teams to persist, retrieve, and manage data efficiently. Understanding ${name} fundamentals — its data model, query language, and indexing strategies — is essential for backend developers and data engineers.`,
      whatsCovered: [
        `${name} core concepts, data model, and architecture overview`,
        "CRUD operations, transactions, and consistency guarantees",
        "Indexing strategies and query optimization techniques",
        "Connection configuration, pooling, and security settings",
        "Common commands, CLI reference, and administration essentials",
      ],
      whoIsItFor: `Backend developers, data engineers, and DBAs who work with ${name} and need a quick reference for queries, configuration, and best practices.`,
      faqs: [
        {
          q: `What is ${name} primarily used for?`,
          a: `${name} is used to store, retrieve, and manage data in applications. It provides mechanisms for defining data structures, running queries, ensuring consistency through transactions, and scaling to handle production workloads.`,
        },
        {
          q: `How do you connect to ${name} from an application?`,
          a: `Most languages have official drivers or ORM integrations. Configure the connection string with host, port, database name, and credentials. Use connection pooling in production to reuse connections and avoid the overhead of establishing a new connection per request.`,
        },
        {
          q: `What are indexes and why do they matter in ${name}?`,
          a: `Indexes speed up data retrieval at the cost of storage and write overhead. Create indexes on fields used frequently in WHERE clauses, JOIN conditions, or sort operations. Missing indexes on large datasets are the most common cause of slow queries.`,
        },
        {
          q: `How does ${name} handle concurrent access and consistency?`,
          a: `${name} uses locking, MVCC (multi-version concurrency control), or eventual consistency models depending on its design. Understanding isolation levels and consistency guarantees helps you choose the right trade-off between consistency, availability, and performance for your use case.`,
        },
        {
          q: `What are best practices for securing ${name} in production?`,
          a: `Use strong credentials and the principle of least privilege. Keep ${name} in a private network — never expose it directly to the internet. Enable TLS for connections. Back up data regularly and test restores. Apply security patches promptly.`,
        },
      ],
    };
  }

  if (s.includes("cloud") || s.includes("platform")) {
    return {
      overview: `${name} is a cloud computing platform that provides on-demand infrastructure, platform services, and managed products. It enables teams to provision resources in minutes, scale automatically, and pay only for usage — without managing physical hardware.`,
      whatsCovered: [
        `${name} core services — compute, storage, networking, and managed databases`,
        "IAM — identities, roles, policies, and least-privilege access",
        "CLI and SDK usage for automation and infrastructure as code",
        "Cost optimization — pricing model, reserved capacity, and tagging",
        "Security, compliance, and monitoring fundamentals",
      ],
      whoIsItFor: `DevOps engineers, cloud architects, and developers who deploy and manage workloads on ${name} and need a quick command and concept reference.`,
      faqs: [
        {
          q: `What is ${name} and what problems does it solve?`,
          a: `${name} provides on-demand computing resources. Instead of buying servers, teams provision VMs, databases, and storage in minutes, scale automatically under load, and pay only for actual usage — eliminating capital expenditure on infrastructure.`,
        },
        {
          q: `How does ${name} handle identity and access management?`,
          a: `${name} uses IAM to control who can access which resources. Define users, groups, and roles with attached policies that grant specific permissions. Follow the principle of least privilege — grant only the permissions needed for each identity's job.`,
        },
        {
          q: `How do you achieve high availability on ${name}?`,
          a: `Deploy across multiple availability zones (physically separate data centers in the same region). Use load balancers to distribute traffic. Configure auto-scaling to replace failed instances. Multi-region active-active deployment provides the highest availability.`,
        },
        {
          q: `How do you manage costs on ${name}?`,
          a: `Tag all resources by team and project. Use reserved instances or committed use discounts for predictable workloads (up to 60% cheaper than on-demand). Set billing alerts. Review the cost explorer weekly. Right-size instances — over-provisioning is the most common waste.`,
        },
        {
          q: `What monitoring capabilities does ${name} provide?`,
          a: `Most cloud platforms include built-in metrics dashboards, log aggregation, and alerting. Enable platform-native monitoring for resource metrics and set alerts for CPU, memory, error rates, and latency. Add distributed tracing for microservices to diagnose latency across service boundaries.`,
        },
      ],
    };
  }

  if (
    s.includes("devops") ||
    s.includes("ci") ||
    s.includes("container") ||
    s.includes("kubernetes") ||
    s.includes("infra") ||
    s.includes("monitoring") ||
    s.includes("observ")
  ) {
    return {
      overview: `${name} is a DevOps or platform engineering tool used to automate, orchestrate, or monitor the software delivery lifecycle. It helps engineering teams build, deploy, and operate applications faster and more reliably.`,
      whatsCovered: [
        `${name} core concepts, architecture, and key abstractions`,
        "Installation, configuration, and environment setup",
        "CLI reference — most-used commands and flags",
        "Integration with CI/CD pipelines and deployment workflows",
        "Monitoring, logging, alerting, and troubleshooting techniques",
      ],
      whoIsItFor: `DevOps engineers, SREs, and platform engineers who use ${name} to manage deployments, container orchestration, or infrastructure automation.`,
      faqs: [
        {
          q: `What problem does ${name} solve?`,
          a: `${name} automates a specific part of the software delivery lifecycle — container orchestration, CI/CD, configuration management, or observability. It reduces manual toil, enforces consistency across environments, and speeds up the feedback loop from code to production.`,
        },
        {
          q: `How do you handle secrets and credentials in ${name}?`,
          a: `Never store secrets in configuration files or version control. Use a dedicated secrets manager (HashiCorp Vault, AWS Secrets Manager, or the platform's built-in store), inject environment variables at runtime, and rotate secrets regularly.`,
        },
        {
          q: `How does ${name} integrate with Kubernetes?`,
          a: `${name} typically integrates with Kubernetes via manifests, Helm charts, or a native operator. CI pipelines build images and push to a registry; CD pipelines update manifests and trigger Kubernetes rollouts. Many tools have native Kubernetes support or plugins.`,
        },
        {
          q: `What does good observability look like with ${name}?`,
          a: `The three pillars of observability are metrics (what is happening), logs (why it happened), and traces (where time is spent). Configure ${name} to emit structured logs, expose Prometheus metrics, and integrate with a tracing backend. Set alerts on error rates and latency SLOs.`,
        },
        {
          q: `How do you get started with ${name} in a new project?`,
          a: `Start with the quickstart guide, set up a minimal working pipeline or configuration, and validate it end-to-end before adding complexity. Most tools have local development modes — use them to iterate without affecting production. Add monitoring from day one.`,
        },
      ],
    };
  }

  if (
    s.includes("ai") ||
    s.includes("ml") ||
    s.includes("machine") ||
    s.includes("llm") ||
    s.includes("deep") ||
    s.includes("agent")
  ) {
    return {
      overview: `${name} is an AI or machine learning framework, library, or platform used for building intelligent systems. It provides abstractions for working with data, models, and inference pipelines — enabling developers and researchers to build AI-powered applications at scale.`,
      whatsCovered: [
        `${name} core concepts, API design, and fundamental abstractions`,
        "Data loading, preprocessing pipelines, and dataset management",
        "Model architecture definition and training loop essentials",
        "Inference, deployment patterns, and serving infrastructure",
        "Evaluation metrics, experiment tracking, and hyperparameter tuning",
      ],
      whoIsItFor: `Data scientists, ML engineers, and AI researchers who use ${name} to build, train, and deploy machine learning models or AI-powered applications.`,
      faqs: [
        {
          q: `What is ${name} used for?`,
          a: `${name} is used to build and deploy machine learning or AI systems. It provides high-level abstractions for model architectures, data pipelines, gradient computation, and optimization — letting practitioners focus on model design rather than low-level numerical code.`,
        },
        {
          q: `How does the training loop work in ${name}?`,
          a: `A training loop iterates over batches of data, computes forward-pass predictions, calculates loss against ground truth, runs backpropagation to compute gradients, then updates model weights with an optimizer. This repeats for multiple epochs until the model converges.`,
        },
        {
          q: `How do you evaluate a model?`,
          a: `Split data into train, validation, and test sets. Monitor validation metrics during training to detect overfitting (training improves but validation doesn't). Report final metrics on the held-out test set. Use task-appropriate metrics: accuracy, F1, RMSE, BLEU depending on the problem type.`,
        },
        {
          q: `How do you deploy a model to production?`,
          a: `Export the trained model to a serialized format (ONNX, TorchScript, SavedModel). Serve via a model server (Triton, TorchServe, TF Serving) or wrap in a REST API. Package in a Docker container. Monitor inference latency, throughput, and data drift in production.`,
        },
        {
          q: `What is overfitting and how do you prevent it?`,
          a: `Overfitting occurs when the model memorizes training data and fails to generalize. Prevention strategies: more training data, data augmentation, dropout layers, L1/L2 regularization, early stopping based on validation loss, or a simpler model architecture.`,
        },
      ],
    };
  }

  if (
    s.includes("frontend") ||
    s.includes("ui") ||
    s.includes("css") ||
    s.includes("mobile") ||
    s.includes("android") ||
    s.includes("ios")
  ) {
    return {
      overview: `${name} is a frontend or mobile development technology used to build user interfaces and interactive applications. It provides components, state management patterns, or styling utilities that help developers create performant, maintainable UIs.`,
      whatsCovered: [
        `${name} core concepts, component model, and rendering behavior`,
        "State management patterns and data flow",
        "Routing, navigation patterns, and code splitting",
        "Performance optimization — memoization, lazy loading, and profiling",
        "Testing — unit, component, and end-to-end testing approaches",
      ],
      whoIsItFor: `Frontend and full-stack developers building web or mobile UIs who need a quick reference for ${name} patterns, APIs, and best practices.`,
      faqs: [
        {
          q: `What is ${name} used for?`,
          a: `${name} is used to build user interfaces for web or mobile applications. It provides a component model for composing UIs from reusable pieces, manages rendering efficiently, and scales from simple pages to complex single-page or native applications.`,
        },
        {
          q: `How does ${name} handle state management?`,
          a: `${name} provides built-in state primitives for local component state. For shared state across components, use a state management library or the framework's built-in context or store API. Choose the simplest approach that meets your application's complexity.`,
        },
        {
          q: `How do you optimize performance in ${name}?`,
          a: `Avoid unnecessary re-renders through memoization and stable references. Code-split with dynamic imports for non-critical routes. Profile with browser DevTools. Server-side rendering or static generation improves initial load time. Use a CDN for static assets.`,
        },
        {
          q: `How does ${name} handle forms and validation?`,
          a: `Controlled components bind form state to component state, enabling real-time validation. Uncontrolled components use refs for DOM-level access. Form libraries reduce boilerplate for complex forms with many fields and validation rules.`,
        },
        {
          q: `How do you test ${name} applications?`,
          a: `Unit test utility functions in isolation. Component test by rendering components and asserting on user-visible behavior rather than implementation details. End-to-end test with a browser automation tool for critical user flows. Aim for a test pyramid with more unit tests and fewer E2E tests.`,
        },
      ],
    };
  }

  if (s.includes("security") || s.includes("crypto") || s.includes("auth")) {
    return {
      overview: `${name} is a security tool or framework for protecting applications, data, or infrastructure from threats. Mastering ${name} helps teams implement defense-in-depth strategies, comply with security standards, and detect vulnerabilities before attackers can exploit them.`,
      whatsCovered: [
        `${name} core concepts, threat models, and security primitives`,
        "Authentication and authorization — OAuth2, JWT, RBAC patterns",
        "Encryption, key management, and cryptographic best practices",
        "OWASP Top 10 vulnerabilities and mitigation techniques",
        "Audit logging, incident detection, and security monitoring",
      ],
      whoIsItFor: `Security engineers, backend developers, and DevSecOps practitioners who implement or audit security controls using ${name}.`,
      faqs: [
        {
          q: `What is ${name} primarily used for?`,
          a: `${name} addresses security challenges in applications or infrastructure — authentication, encryption, vulnerability scanning, or security configuration management. Understanding its focus area determines how and when to apply it in your security stack.`,
        },
        {
          q: `How should passwords be stored securely?`,
          a: `Never store plaintext passwords. Use a slow, password-specific hashing algorithm: bcrypt, scrypt, or Argon2id. Modern libraries add unique salts automatically. With bcrypt, a cost factor of 12 provides good security vs. performance balance as of 2025.`,
        },
        {
          q: `What is the difference between authentication and authorization?`,
          a: `Authentication verifies identity: who are you? Authorization determines access: what are you allowed to do? Always authenticate first, then enforce authorization on the specific resource being accessed. A common bug is authenticating without checking resource-level permissions.`,
        },
        {
          q: `How do you implement secure API authentication?`,
          a: `Use short-lived JWTs (15-minute access tokens plus longer refresh tokens). Store refresh tokens in httpOnly cookies or secure storage. Validate signature, expiry, issuer, and audience on every request. Implement token rotation on refresh and revocation on logout.`,
        },
        {
          q: `What are the most critical OWASP Top 10 vulnerabilities?`,
          a: `Injection (SQL, command), Broken Authentication, XSS, Insecure Direct Object Reference, Security Misconfiguration, and Broken Access Control are the most impactful. Parameterize queries, validate all input, use proper session management, and enforce least-privilege access.`,
        },
      ],
    };
  }

  if (
    s.includes("api") ||
    s.includes("graphql") ||
    s.includes("grpc") ||
    s.includes("rest") ||
    s.includes("gateway")
  ) {
    return {
      overview: `${name} is an API technology or protocol for communication between services and clients. Modern applications rely on well-designed APIs for frontend-backend communication, microservices integration, and third-party data exchange.`,
      whatsCovered: [
        `${name} core concepts, data format, and communication model`,
        "Authentication patterns — API keys, OAuth2, JWT, and mTLS",
        "Request/response structure, status codes, and error handling",
        "Versioning strategies and backwards compatibility",
        "Rate limiting, caching, and performance optimization",
      ],
      whoIsItFor: `Backend developers and API designers building or consuming APIs who need a quick reference for ${name} patterns, conventions, and tooling.`,
      faqs: [
        {
          q: `What is ${name} and what are its primary use cases?`,
          a: `${name} defines how systems exchange data and trigger actions. It specifies the contract between producer and consumer — what operations exist, what format requests take, and how errors are communicated. It's used for powering frontends, microservice communication, and third-party integrations.`,
        },
        {
          q: `How do you version an API?`,
          a: `Common strategies: URL path (/v1/users), request header (Accept: application/vnd.api+json;version=2), or query parameter (?version=2). URL versioning is the most discoverable. Keep old versions until clients migrate; deprecate with clear sunset dates in headers and documentation.`,
        },
        {
          q: `How should API error responses be structured?`,
          a: `Return a consistent error body: HTTP status code, a machine-readable error code for programmatic handling, a human-readable message, and optional context. Never expose stack traces. Document all possible error codes in your API reference.`,
        },
        {
          q: `How do you secure an API?`,
          a: `Use OAuth2 with bearer tokens (JWT) for user-facing APIs. Use API keys for server-to-server integrations. Always use HTTPS. Implement rate limiting to prevent abuse. Validate and sanitize all input. Never trust client-supplied data without server-side verification.`,
        },
        {
          q: `What is rate limiting and why is it important?`,
          a: `Rate limiting restricts how many requests a client can make in a time window, preventing DoS attacks and protecting backend resources. Return 429 Too Many Requests with a Retry-After header. Implement per-user and per-IP limits. Use a distributed counter (Redis) for multi-instance deployments.`,
        },
      ],
    };
  }

  if (
    s.includes("architecture") ||
    s.includes("design") ||
    s.includes("pattern")
  ) {
    return {
      overview: `${name} is a software architecture pattern or design approach that defines how to structure and scale software systems. Understanding ${name} helps engineers make informed design decisions, communicate system design clearly, and avoid common structural pitfalls as systems grow.`,
      whatsCovered: [
        `${name} core concepts, components, and their responsibilities`,
        "When to apply this pattern vs. alternative architectures",
        "Communication patterns — synchronous, async, and event-driven",
        "Data management — consistency models and storage strategies",
        "Operational concerns — deployment topology and failure handling",
      ],
      whoIsItFor: `Software architects, senior engineers, and technical leads making system design decisions or preparing for system design interviews.`,
      faqs: [
        {
          q: `What is ${name} and what problem does it solve?`,
          a: `${name} is an architectural approach that addresses specific challenges in building or scaling software systems. It defines component boundaries, responsibilities, and communication patterns. Every architecture makes tradeoffs — understanding those tradeoffs is essential for choosing it correctly.`,
        },
        {
          q: `What are the main advantages of ${name}?`,
          a: `Architectural patterns solve recurring design problems with proven solutions. The specific advantages of ${name} depend on the context — some enable independent deployment, others enforce separation of concerns, others simplify scaling. Apply it only where those advantages address your actual constraints.`,
        },
        {
          q: `What are the main challenges when implementing ${name}?`,
          a: `Every pattern introduces complexity somewhere. Distributed patterns add network failure handling and consistency challenges. Modular patterns require discipline in maintaining boundaries. The challenge is not the pattern itself, but aligning it with your team size, operational maturity, and actual requirements.`,
        },
        {
          q: `How do you decide when to use ${name}?`,
          a: `Start by understanding your constraints: team size, deployment frequency, scale requirements, and operational capabilities. Simpler architectures suit small teams and early products. Evolve toward more complex patterns only when concrete problems force it — don't design for hypothetical scale.`,
        },
        {
          q: `How does ${name} affect system testability?`,
          a: `Well-applied architectural patterns improve testability by enforcing clear boundaries and dependencies. Each component can be tested in isolation with mocks for its dependencies. Integration tests verify that components interact correctly. The architecture determines how easy or hard testing is.`,
        },
      ],
    };
  }

  if (
    s.includes("test") ||
    s.includes("qa") ||
    s.includes("quality") ||
    s.includes("build") ||
    s.includes("package")
  ) {
    return {
      overview: `${name} is a development tooling technology used for building, testing, or packaging software. It helps engineering teams maintain code quality, automate repetitive tasks, and deliver reliable software faster through consistent, reproducible processes.`,
      whatsCovered: [
        `${name} core concepts, configuration, and project setup`,
        "Most-used commands and flags for daily development",
        "Integration with CI/CD pipelines and automation",
        "Plugin or extension ecosystem for extending functionality",
        "Performance tuning, caching, and build optimization",
      ],
      whoIsItFor: `Software developers and DevOps engineers who use ${name} to automate builds, tests, or package management in their development workflow.`,
      faqs: [
        {
          q: `What is ${name} used for?`,
          a: `${name} handles a specific part of the software development workflow — building source code, running tests, managing dependencies, or packaging artifacts. It automates tasks that would otherwise be manual and error-prone, ensuring consistency across developer machines and CI environments.`,
        },
        {
          q: `How do you integrate ${name} with a CI/CD pipeline?`,
          a: `Define the ${name} commands in your CI configuration file (GitHub Actions, GitLab CI, Jenkins). The pipeline runs build, test, and package steps on every commit or pull request. Cache dependencies and build artifacts between runs to speed up CI execution.`,
        },
        {
          q: `How do you speed up ${name} builds?`,
          a: `Enable incremental builds (only rebuild changed files). Configure dependency caching in CI. Run independent tasks in parallel. Profile slow steps to identify bottlenecks. For large projects, split into smaller modules with independent build graphs.`,
        },
        {
          q: `How do you manage dependencies with ${name}?`,
          a: `Lock dependency versions in a lockfile to ensure reproducible builds across machines. Pin major versions and update deliberately. Audit dependencies for security vulnerabilities regularly. Avoid unnecessary dependencies — each adds maintenance burden and potential attack surface.`,
        },
        {
          q: `How do you structure a multi-module project in ${name}?`,
          a: `Organize into a root configuration with sub-modules for each logical component (library, service, app). Define shared configuration at the root; override per module. This enables building only affected modules on change, improving CI speed in large codebases.`,
        },
      ],
    };
  }

  // Default
  return {
    overview: `${name} is a technology in the ${categoryLabel} ecosystem used to address specific development or infrastructure challenges. Mastering ${name} fundamentals — its concepts, configuration, and integration patterns — is valuable for any engineer working in this domain.`,
    whatsCovered: [
      `${name} core concepts, key abstractions, and fundamental architecture`,
      "Installation, setup, and essential configuration options",
      "Most-used commands, APIs, and integration patterns",
      "Common pitfalls, anti-patterns, and best practices",
      "Testing, debugging, and performance optimization techniques",
    ],
    whoIsItFor: `Engineers and developers working in ${categoryLabel} who need a structured quick-reference for ${name} patterns and best practices.`,
    faqs: [
      {
        q: `What is ${name} primarily used for?`,
        a: `${name} is used in the ${categoryLabel} domain to address specific technical challenges. It provides a set of abstractions and tools that help developers build and operate systems more effectively within this technology area.`,
      },
      {
        q: `How do you get started with ${name}?`,
        a: `Start with the official documentation and install the core package or SDK. Build a minimal working example to understand the basic API before adding complexity. Explore the conventions and project structure, then expand from there.`,
      },
      {
        q: `What are the most important concepts to understand in ${name}?`,
        a: `Focus on the core abstractions and design principles first. Understanding why the tool is designed the way it is makes configuration, debugging, and extending it far more intuitive than memorizing commands in isolation.`,
      },
      {
        q: `How does ${name} integrate with the broader ecosystem?`,
        a: `${name} integrates with the ${categoryLabel} ecosystem through standard interfaces, plugins, or protocol adapters. Understanding its integration points — how it connects to other tools in your stack — is key to using it effectively in real projects.`,
      },
      {
        q: `What are common mistakes developers make with ${name}?`,
        a: `Skipping the official docs in favor of outdated tutorials, misconfiguring security or performance settings, and not testing in a production-like environment are the most common pitfalls. Build a minimal working example first, then incrementally add complexity.`,
      },
    ],
  };
}

export function getTechPageContent(
  slug: string,
  name: string,
  categorySlug: string,
  categoryLabel: string
): TechPageContent {
  return SPECIFIC[slug] ?? generic(name, categorySlug, categoryLabel);
}
