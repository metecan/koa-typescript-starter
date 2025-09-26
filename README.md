# Koa.js + TypeScript Starter

A modern, production-ready backend template built with Koa.js and TypeScript. This starter provides a solid foundation for building scalable web APIs with clean architecture and developer-friendly tooling.

## 🚀 Features

- **Koa.js** - Fast, lightweight, and expressive web framework for Node.js
- **TypeScript** - Full type safety and modern JavaScript features
- **ESBuild** - Lightning-fast bundling and compilation
- **Path Aliases** - Clean imports with `@/` prefix
- **Hot Reload** - Development server with automatic restart on file changes
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
├── nodemon.json             # Development server configuration
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
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure your environment variables:
   ```env
   PORT=3000
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

   The server will start at `http://localhost:3000`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build the project for production |
| `pnpm start` | Start the production server |

## 🔌 Example API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/v1/auth/register` | User registration endpoint |

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
- Multi-stage build optimization
- Non-root user for security
- Health checks
- Production dependencies only

## 🔧 Configuration

### Environment Variables
- `PORT` - Server port (default: 3000)

### TypeScript Configuration
- Path aliases configured with `@/*` pointing to `src/*`
- Modern ES2022 target with NodeNext module resolution
- Strict type checking enabled

### ESBuild Configuration
- Fast bundling with source maps
- External dependencies optimization
- Custom path alias resolution

## 🏗️ Architecture

This starter follows a modular architecture pattern:

- **Controllers** - Handle HTTP requests and responses
- **Middleware** - Cross-cutting concerns (logging, auth, etc.)
- **Types** - TypeScript type definitions
- **Config** - Centralized configuration management

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