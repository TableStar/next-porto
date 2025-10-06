# Migration Plan: Next.js to Astro

Welcome to your Astro migration guide! This plan will walk you through converting your Next.js portfolio to a fast, modern Astro site. We'll keep your React components but simplify interactivity and start fresh with a new terminal-like design using Tailwind CSS.

## Why Astro?

Astro is a web framework designed for building fast, content-rich websites. Its key feature is **"islands architecture,"** where components are static HTML by default and ship zero JavaScript to the browser. You can then "hydrate" specific components to make them interactive, giving you the power of React without sacrificing performance.

---

## Step 1: Set Up Your New Astro Project

First, let's create a new Astro project from scratch.

1.  **Create the Project:** Open your terminal and run this command. Choose the "Empty" template when prompted.

    ```bash
    # npm 6.x
    npm create astro@latest my-astro-portfolio

    # npm 7+
    npm create astro@latest my-astro-portfolio -- --template empty
    ```

2.  **Navigate into Your Project:**
    ```bash
    cd my-astro-portfolio
    ```

3.  **Add Integrations:** Astro uses integrations for things like React and Tailwind. Let's add them. The terminal will guide you through the setup for each.

    ```bash
    # Adds React support
    npx astro add react

    # Adds Tailwind CSS support
    npx astro add tailwind
    ```
    *   When Tailwind asks if you want to create a `tailwind.config.js` file, say yes.

4.  **Install Dependencies:**
    ```bash
    npm install
    ```

5.  **Start the Dev Server:**
    ```bash
    npm run dev
    ```
    Your new, empty Astro site is now running!

---

## Step 2: Migrate Files and Structure

Now, let's move your existing code into the new Astro project.

1.  **Copy `public` Folder:**
    *   Copy the `CV.pdf` file from your old project's `public` folder to the new `public` folder.

2.  **Copy `assets` Folder:**
    *   Copy the entire `src/assets` folder from your old project into the new `src/assets` folder.

3.  **Copy `components` Folder:**
    *   Copy the entire `src/components` folder from your old project into the new `src/` folder.
    *   You can also copy the `src/types` folder for your contact form schema.

Your new file structure should look something like this:

```
my-astro-portfolio/
├── public/
│   └── CV.pdf
├── src/
│   ├── assets/
│   │   └── (your images)
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── ... (all your .tsx components)
│   └── types/
│       └── ContactFormSchema.ts
└── package.json
```

---

## Step 3: Create Your Main Layout

In Astro, a "layout" is a component that wraps your page content. It's perfect for headers, footers, and global styles. This will replace your `layout.tsx`.

1.  **Create the Layout File:** Create a new folder `src/layouts` and a file inside it named `Layout.astro`.

2.  **Add the Code:** Paste this boilerplate into `src/layouts/Layout.astro`.

    ```astro
    ---
    // src/layouts/Layout.astro
    interface Props {
        title: string;
    }

    const { title } = Astro.props;
    ---

    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="description" content="Astro description" />
            <meta name="viewport" content="width=device-width" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <meta name="generator" content={Astro.generator} />
            <title>{title}</title>
        </head>
        <body>
            <slot /> <!-- This is where your page content will go -->
        </body>
    </html>
    ```

---

## Step 4: Rebuild Your Homepage

Astro uses `.astro` files in the `src/pages/` directory for routing. Let's rebuild your main page.

1.  **Open `src/pages/index.astro`:** This file was created automatically.

2.  **Import and Use Components:** We will now import your React components into this Astro page.

    ```astro
    ---
    // src/pages/index.astro
    import Layout from '../layouts/Layout.astro';
    import Hero from '../components/Hero.tsx';
    import About from '../components/About.tsx';
    import Skills from '../components/Skills.tsx';
    import Portofolio from '../components/Portofolio.tsx';
    import Contact from '../components/Contact.tsx';
    import Footer from '../components/Footer.tsx';
    import Navbar from '../components/Navbar.tsx';
    ---

    <Layout title="My New Portfolio">
        <Navbar client:load />
        <Hero />
        <About client:visible />
        <Skills />
        <Portofolio />
        <Contact client:visible />
        <Footer />
    </Layout>
    ```

### **IMPORTANT: Understanding `client:*` Directives**

This is the most critical concept. By default, Astro renders your React components to HTML and ships **no JavaScript**. To make them interactive, you must add a `client:*` directive.

*   **`client:load`**: Loads the component's JavaScript as soon as the page loads. Use this for things that need to be interactive immediately, like your `Navbar`.
*   **`client:visible`**: Loads the component's JavaScript only when it scrolls into the user's viewport. This is perfect for your `About` (for the download button) and `Contact` (for the form) components.

**Static Components (No Directive):**
`Hero`, `Skills`, `Portofolio`, and `Footer` no longer use `framer-motion` or have other interactive features, so they don't need a directive. Astro will render them as pure, fast HTML.

---

## Step 5: Update and Fix Components

Your components were written for Next.js. Let's make them Astro-compatible.

1.  **Remove `'use client'`:** Go through all your `.tsx` files and delete the `'use client';` line from the top. Astro doesn't need it.

2.  **Image Handling:**
    *   The `next/image` component won't work. You have two choices:
        *   **Simple `<img>`:** The easiest way is to replace `<Image ... />` with a standard `<img ... />` tag. You'll need to fix the `src` path. For example, `import profilepic from '@/assets/profilepic.png'` becomes `import profilepic from '../assets/profilepic.png'`, and the `src` attribute will be `src={profilepic.src}`.
        *   **Astro `<Image>`:** For better performance, you can use Astro's built-in `<Image>` component. The syntax is very similar.

3.  **Link Handling:**
    *   Replace any `<Link href="...">` from `next/link` with a standard anchor tag `<a href="...">`.

4.  **Environment Variables:**
    *   In `Contact.tsx`, change `process.env.NEXT_PUBLIC_API_URL` to `import.meta.env.PUBLIC_API_URL`.
    *   Create a `.env` file in the root of your new project and add your API URL:
        ```
        PUBLIC_API_URL=your_backend_url_here
        ```

---

## Step 6: Styling with Tailwind from Scratch

You wanted to reset the styles. Here’s how.

1.  **Configure `tailwind.config.mjs`:** Open this file and set it up. You can define your new terminal-like theme here.

    ```javascript
    // tailwind.config.mjs
    /** @type {import('tailwindcss').Config} */
    export default {
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      theme: {
        extend: {
          // Add your terminal colors, fonts, etc. here
          colors: {
            'terminal-bg': '#0D1117',
            'terminal-text': '#C9D1D9',
            'terminal-green': '#56d364',
          },
          fontFamily: {
            mono: ['Fira Code', 'monospace'], // Add a cool mono font
          }
        },
      },
      plugins: [],
    }
    ```

2.  **Create Global Styles:** Create a new file at `src/styles/global.css`. This is where you'll set up your base styles.

    ```css
    /* src/styles/global.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Example: Set a base background and text color */
    body {
      @apply bg-terminal-bg text-terminal-text font-mono;
    }
    ```

3.  **Import Global Styles:** In your `src/layouts/Layout.astro` file, import the CSS file in the frontmatter script.

    ```astro
    ---
    // src/layouts/Layout.astro
    import '../styles/global.css'; // Add this line

    interface Props {
        title: string;
    }
    const { title } = Astro.props;
    ---
    ```

Now you can start styling your components from a clean slate using the new Tailwind classes you defined!

---

## Step 7: Final Cleanup

1.  **Install Missing Packages:** Your components use `react-hook-form`, `zod`, and `react-icons`. Install them in your new project.
    ```bash
    npm install react-hook-form @hookform/resolvers zod react-icons
    ```

2.  **Review `package.json`:** Make sure all necessary dependencies are there. You can now remove the old Next.js project folder.

You have now successfully migrated your project to Astro! Run `npm run dev` to see your new site in action.
