# Automated API Testing

This directory contains the automated API testing suite using Vitest.

## Structure

- `env/`: Environment variables for different test types
- `setup/`: Global setup and teardown files
- `config/`: Configuration files for endpoints, timeouts, etc.
- `utils/`: Utility functions for HTTP, DB, data generation, helpers
- `contracts/`: Schema validation using Zod
- `mocks/`: Mock implementations for external services
- `suites/`: Test suites for integration, e2e, regression
- `domains/`: Domain-specific API tests
- `reports/`: Test reports
- `artifacts/`: Logs and snapshots

## Running Tests

- `npm test`: Run all tests
- `npm run test:integration`: Run integration tests
- `npm run test:e2e`: Run end-to-end tests
- `npm run test:regression`: Run regression tests