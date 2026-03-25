# Magic Rules API

## Setup

1. Ensure you have Node.js and `pnpm` installed.
2. Install the project dependencies:
   ```bash
   pnpm install
   ```
3. Start the local PostgreSQL database (requires Docker):
   ```bash
   docker-compose up -d
   ```
4. Initialize the Prisma database schema and seed the initial data:
   ```bash
   npx prisma db push
   npx prisma db seed
   ```

## Run

To start the NestJS API development server:
```bash
pnpm run start:dev
```
