## Ram Krishna | Full Stack Developer Portfolio

Welcome to the source code of my personal portfolio — a high-performance, immersive web experience built to showcase my professional journey, full-stack projects, and technical expertise.

The project features a **Dark Premium** aesthetic, built with a focus on fluid animations, modern CSS (OKLCH), and type-safe architecture.

## Technical Architecture

### Frontend
- **Framework:** [React 19](https://react.dev/) for the latest features and performance.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) — utilizing the latest engine for lightning-fast builds and modern CSS features like native cascade layers and OKLCH color spaces.
- **Animations:** 
  - [Framer Motion](https://www.framer.com/motion/) for complex interactive components.
  - Custom scroll-triggered reveals using `IntersectionObserver` and CSS transitions.
  - View Transitions API support for smooth theme switching.
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) components customized with a sleek, futuristic glassmorphism theme.
- **Icons:** [Lucide React](https://lucide.dev/) for a consistent and crisp icon set.

### Backend
- **Server:** [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/).
- **API:** Simple and scalable REST endpoints for handling contact forms and other dynamic data.

## Features
- **Dynamic Hero Section:** Features a terminal-style code window and a typewriter effect showcasing various roles.
- **Coding Ratings:** Integration of competitive programming stats from Codeforces and LeetCode.
- **Immersive Background:** An animated, theme-aware background with floating orbs and grid overlays.
- **Responsive Design:** Fully optimized for all device sizes with mobile-first layouts.
- **Interactive Projects:** Hover-card effects and detailed project showcases.
- **Performance:** Optimized asset loading, smooth scroll behavior, and lightweight builds.

## Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ram02krishna/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   *This will concurrently start both the Vite frontend (port 5173) and the Express backend (port 5000).*

## Project Structure

- `src/`: The core frontend application.
  - `components/portfolio/`: Feature-specific sections like Hero, About, Projects, etc.
  - `components/ui/`: Reusable, low-level UI primitives.
  - `hooks/`: Custom React hooks (e.g., `useReveal` for scroll animations).
  - `styles.css`: Tailwind 4 configuration and global design system using OKLCH.
- `server/`: Express backend source code.
- `public/`: Static assets like images and PDFs.

---

Thanks for checking out my work! If you have any questions or just want to connect, feel free to reach out via my [LinkedIn](https://www.linkedin.com/in/ram-krishna-419528287/) or [GitHub](https://github.com/ram02krishna).
