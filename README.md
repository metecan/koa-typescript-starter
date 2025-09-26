# Koa.js + TypeScript Starter

A modern, production-ready backend template built with Koa.js and TypeScript. This starter provides a solid foundation for building scalable web APIs with clean architecture and developer-friendly tooling.

**Version:** 1.0.0

## 🚀 Features

- **Koa.js** - Fast, lightweight, and expressive web framework for Node.js
- **TypeScript** - Full type safety and modern JavaScript features
- **ESBuild** - Lightning-fast production bundling and compilation
- **ts-node-dev** - Development server with TypeScript support and hot reload
- **Path Aliases** - Clean imports with `@/` prefix
- **Body Parser** - Built-in request body parsing with `@koa/bodyparser`
- **Docker Support** - Production-ready containerization
- **Structured Routing** - Modular and organized route management
- **Custom Middleware** - Built-in logging middleware
- **Environment Configuration** - Easy configuration management

## 📁 Project Structure

```
├── src/
│   ├── index.ts              # Application entry point
│   ├── routes.ts             # Route definitions
│   ├── lib/
│   │   ├── config.ts         # Configuration management
│   │   └── paths.ts          # API path definitions
│   ├── middleware/
│   │   └── logger.ts         # Custom logging middleware
│   ├── modules/
│   │   └── auth/
│   │       └── auth.controller.ts  # Auth controller
│   └── types/
│       └── router.types.ts   # TypeScript type definitions
├── build.ts                  # ESBuild configuration
├── Dockerfile               # Docker configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Prerequisites

- **Node.js** (v18 or higher)
- **pnpm** (recommended) or npm/yarn

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd koa-typescript-starter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   
   Configure your environment by setting the `PORT` variable or use the default port 3000.

4. **Start development server**
   ```bash
   pnpm dev
   ```

   The server will start at `http://localhost:3000`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload using ts-node-dev |
| `pnpm build` | Build the project for production using ESBuild |
| `pnpm start` | Start the production server from built files |

## 🔌 API Endpoints

The API uses versioned endpoints with the base path `/api/v1/`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/auth/register` | User registration endpoint |

All endpoints are automatically prefixed with the version defined in `CONFIG.API_VERSION`.

## 🐳 Docker Support

### Development
```bash
# Build the image
docker build -t koa-typescript-starter .

# Run the container
docker run -p 3000:3000 koa-typescript-starter
```

### Production
The Dockerfile includes:
- Multi-stage build with Node.js 22.2.0 Alpine
- PNPM package manager with frozen lockfile
- Non-root user (nodejs) for security
- Health checks for container monitoring
- Production dependencies only (dev dependencies pruned)
- Exposed port 3000

## 🔧 Configuration

### Environment Variables
- `PORT` - Server port (default: 3000, configured in `src/lib/config.ts`)

### Development Tools
- **ts-node-dev** - Development server with TypeScript compilation and hot reload
- **ESBuild** - Production bundling with source maps and external dependency optimization

### TypeScript Configuration
- Path aliases configured with `@/*` pointing to `src/*`
- Modern ES2022 target with NodeNext module resolution
- Strict type checking enabled

### Key Dependencies
- **@koa/bodyparser** - Request body parsing middleware
- **@koa/router** - Routing middleware for Koa.js

### Development Dependencies
- **TypeScript** - Type safety and modern JavaScript features
- **ts-node-dev** - Development server with TypeScript support
- **ESBuild** - Fast production bundling
- **tsconfig-paths** - Path mapping support for development

## 🏗️ Architecture

This starter follows a modular architecture pattern:

- **Controllers** - Handle HTTP requests and responses (see `modules/auth/`)
- **Middleware** - Cross-cutting concerns like logging and body parsing
- **Types** - TypeScript type definitions for better code organization
- **Config** - Centralized configuration management
- **Path Management** - Organized API endpoint definitions in `lib/paths.ts`

The application uses:
- **Koa.js** as the web framework
- **@koa/router** for routing
- **@koa/bodyparser** for parsing request bodies
- **Custom middleware** for logging requests

## 🚀 Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

3. **Or use Docker**
   ```bash
   docker build -t koa-app .
   docker run -p 3000:3000 koa-app
   ```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙋‍♂️ Support

If you have any questions or need help, please open an issue or contact the maintainers.

---

**Happy coding!** 🎉