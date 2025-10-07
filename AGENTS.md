## Agent Guidelines for This Repository

### Build, Lint, and Test Commands

- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Development Server:** `npm run dev`
- **Testing:** No test framework configured. Add Jest/Cypress if needed.

### Code Style and Conventions

- **Formatting:** Adhere to Next.js and Prettier defaults. Use TypeScript strict mode.
- **Imports:** Use absolute paths with `@/*` for `src/` directory imports.
- **Types:** Strict TypeScript with Zod schemas for form validation. Prefer `type` over `interface` for type definitions.
- **Naming:** PascalCase for components, camelCase for variables/functions.
- **Error Handling:** Robust error handling for API calls and form submissions.
- **Styling:** Tailwind CSS with custom theme colors. Use responsive design.
- **Components:** Client components use `"use client"` directive. Place in `src/components/`.
- **Forms:** React Hook Form with Zod validation. Handle submission states.
- **Animations:** Framer Motion for interactive elements.
- **Environment:** Use `NEXT_PUBLIC_` prefixed env vars for client-side config.
- **State Management:** React hooks for local state. Context API for global state if needed.
