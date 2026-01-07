# 🚀 Automated API Software Testing in Node.js

[![Tests](https://img.shields.io/badge/tests-3%2F3%20passing-brightgreen)](https://github.com/gulcannce/Automated-API-Software-Testing-in-Node)
[![Node.js](https://img.shields.io/badge/Node.js-18+-blue)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-1.0+-purple)](https://vitest.dev/)

Modern, scalable ve enterprise-grade API test otomasyon framework'ü. Domain-driven architecture ile organize edilmiş, TypeScript tabanlı comprehensive testing suite.

## ✨ Özellikler

- **🏗️ Domain-Driven Architecture**: Testleri domain'lere göre organize edilmiş
- **🔒 Type-Safe Testing**: Full TypeScript desteği ile type safety
- **🎭 HTTP Mocking**: Nock ile external API'leri mocklama
- **📋 Schema Validation**: Zod ile request/response validation
- **⚡ Fast Execution**: Vitest ile paralel test çalıştırma
- **🔧 Configurable**: Environment-specific konfigürasyonlar
- **📊 Multiple Test Types**: Integration, E2E, Regression test desteği
- **🎯 Clean Code**: Professional project structure 

## 🛠️ Teknoloji Stack

- **Runtime**: Node.js 18+
- **Language**: TypeScript 5.3+
- **Test Framework**: Vitest 1.0+
- **HTTP Client**: Fetch API (Node.js built-in)
- **Mocking**: Nock 14+
- **Schema Validation**: Zod 3.22+
- **Type Definitions**: @types/node 20+

## 📦 Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/gulcannce/Automated-API-Software-Testing-in-Node.git
cd automated-api-software-testing-in-node

# Dependencies'leri yükleyin
npm install

# Testleri çalıştırın
npm test
```

## 🚀 Kullanım

### Test Çalıştırma

```bash
# Tüm testleri çalıştır (watch mode)
npm test

# Integration testleri çalıştır
npm run test:integration

# E2E testleri çalıştır
npm run test:e2e

# Regression testleri çalıştır
npm run test:regression

# Belirli config ile test çalıştırma
npm run test:api
npm run test:api:e2e
npm run test:api:integration
```

### Environment Variables

Test ortamları için environment variables ayarlayın:

```bash
# Development
API_BASE_URL=http://localhost:3000

# Staging
API_BASE_URL=https://api-staging.example.com

# Production
API_BASE_URL=https://api.example.com
```

## 📁 Proje Yapısı

```
├── tests/
│   ├── config/                 # Konfigürasyon dosyaları
│   │   ├── endpoints.ts        # API endpoints
│   │   ├── timeouts.ts         # Timeout ayarları
│   │   └── capabilities.ts     # Test capabilities
│   ├── contracts/              # Schema validation
│   │   ├── schemas/           # Zod schemas
│   │   │   ├── user.schema.ts
│   │   │   ├── listing.schema.ts
│   │   │   └── common.schema.ts
│   │   └── validate.ts        # Validation helpers
│   ├── domains/               # Domain-specific tests
│   │   └── auth/              # Authentication domain
│   │       ├── auth.api.ts    # API functions
│   │       ├── auth.contracts.ts # Request/Response contracts
│   │       └── auth.spec.ts   # Test specs
│   ├── mocks/                 # Mock implementations
│   │   └── http-mock.ts       # HTTP mocking utilities
│   ├── setup/                 # Test setup files
│   │   ├── global-setup.ts    # Global test setup
│   │   ├── global-teardown.ts # Global test teardown
│   │   ├── test-setup.ts      # Per-test setup
│   │   └── vitest.d.ts        # TypeScript declarations
│   ├── suites/                # Test suites
│   │   └── integration/       # Integration tests
│   │       ├── auth.spec.ts   # Auth integration tests
│   │       └── health.spec.ts # Health check tests
│   ├── utils/                 # Utility functions
│   │   ├── http/              # HTTP utilities
│   │   │   ├── api-client.ts  # API client
│   │   │   ├── assertions.ts  # Custom assertions
│   │   │   └── auth.ts        # Auth utilities
│   │   ├── db/                # Database utilities
│   │   ├── data/              # Test data generation
│   │   └── helpers/           # Helper functions
│   ├── vitest.config.ts       # Vitest configuration
│   └── tsconfig.json          # TypeScript configuration
├── package.json               # Project dependencies
├── README.md                  # This file
└── .gitignore                 # Git ignore rules
```

## 🧪 Test Örnekleri

### Authentication Test

```typescript
import { describe, it, expect } from 'vitest'
import { ApiClient } from '../utils/http/api-client'
import { login, register } from '../domains/auth/auth.api'

describe('Authentication', () => {
  const client = new ApiClient('http://localhost:3000')

  it('should login successfully', async () => {
    const response = await login(client, {
      email: 'test@example.com',
      password: 'password123'
    })

    expect(response.status).toBe(200)
    expect(response.data).toHaveProperty('token')
  })

  it('should register new user', async () => {
    const response = await register(client, {
      name: 'Test User',
      email: 'newuser@example.com',
      password: 'password123'
    })

    expect(response.status).toBe(201)
    expect(response.data).toHaveProperty('id')
  })
})
```

### Schema Validation

```typescript
import { userSchema, createUserSchema } from '../contracts/schemas/user.schema'

describe('User Schema Validation', () => {
  it('should validate user creation', () => {
    const validUser = {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123'
    }

    expect(() => createUserSchema.parse(validUser)).not.toThrow()
  })

  it('should reject invalid email', () => {
    const invalidUser = {
      name: 'John Doe',
      email: 'invalid-email',
      password: 'password123'
    }

    expect(() => createUserSchema.parse(invalidUser)).toThrow()
  })
})
```

## 🔧 Konfigürasyon

### Vitest Config (tests/vitest.config.ts)

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["tests/**/*.spec.ts"],
    setupFiles: ["tests/setup/test-setup.ts"],
    globalSetup: ["tests/setup/global-setup.ts"],
    testTimeout: 60_000,
    hookTimeout: 60_000,
    reporters: ["default"],
  },
});
```

### TypeScript Config (tests/tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "types": ["vitest/globals", "node"]
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje ISC lisansı altında lisanslanmıştır.

## 📞 İletişim

- **GitHub**: [gulcannce](https://github.com/gulcannce)
- **LinkedIn**: [https://www.linkedin.com/in/gulcan-celik/]

---

⭐ **Bu proje faydalı olduysa yıldız vermeyi unutmayın!**

#NodeJS #TypeScript #Testing #APIAutomation #Vitest #QualityAssurance #SoftwareTesting
