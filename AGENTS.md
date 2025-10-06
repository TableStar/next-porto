## Agent Guidelines for This Repository

### Build, Lint, and Test Commands

- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Development Server:** `npm run dev`
- **Testing:** No dedicated test command found.

### Code Style and Conventions

- **Formatting:** Adhere to the default formatting provided by Next.js and Prettier.
- **Imports:** Use absolute paths with `@/*` for imports within the `src` directory.
- **Types:** This is a TypeScript project. Use strict typing.
- **Naming Conventions:** Follow standard TypeScript/React naming conventions (e.g., PascalCase for components, camelCase for variables and functions).
- **Error Handling:** Implement robust error handling for all external calls and state updates.
- **Styling:** Use Tailwind CSS for styling, leveraging theme variables for colors like `background` and `foreground`.
- **Components:** Create components in the `src/components` directory.
- **State Management:** Use React hooks for local state. For global state, a library like Context API or Zustand would be appropriate if needed.
