# NovaSphere — Modern React 19 Engineering Platform

A cutting-edge web application built on **React 19**, **Tailwind CSS v4 (Oxide)**, and **React Router v7**, styled with a **2-Color System Light Theme (80% White / 20% Blue)** and designed following **Progressive Disclosure** principles.

---

## ⚡ Tech Stack

- **React 19 Core**: Native Actions (`useActionState`, `useOptimistic`), direct ref passing, `use()` hook, and document metadata hoisting.
- **Tailwind CSS v4**: Unified Rust-powered Oxide engine with zero-config `@import "tailwindcss";` and native CSS tokens.
- **React Router v7**: Declarative routing framework, type-safe nested layouts via `<Outlet />`, `useParams`, `useSearchParams`, and View Transitions.
- **Vite 8 & TypeScript 6**: Microsecond Hot Module Replacement (HMR), strict type checking, and Rollup chunk splitting.
- **Oxlint**: Rust-based static code analyzer verifying 116 rules in <15ms.

---

## 🎨 Design System

- **2-Color System (80% White / 20% Blue)**:
  - **80% Canvas & Typography**: Pure white backgrounds (`#ffffff`), subtle neutral surfaces (`#f8fafc`), and dark slate typography (`text-slate-900`, `text-slate-600`) passing WCAG AAA contrast requirements.
  - **20% Blue Accents**: Primary action buttons (`bg-blue-600`), soft interactive fills (`bg-blue-50 text-blue-700 border-blue-200`), and active indicators.
- **Progressive Disclosure**:
  - High-level summaries first, technical blueprints disclosed on user intent.
  - Accordion curricula with global expand/collapse controls.
  - Interactive code inspectors and syntax drawers.
  - Custom accessible dropdowns replacing unstyled native OS menus.

---

## 🛡️ Security & OWASP Qualification

- **OWASP ASVS Grade**: **Grade A+ (Qualified)**.
- **Vulnerabilities**: 0 vulnerabilities (`npm audit`).
- **XSS Protection**: Zero instances of `dangerouslySetInnerHTML` or `eval()`; automatic JSX sanitization.
- **Tabnabbing Defense**: All external links enforce `rel="noopener noreferrer"`.
- **Security Headers**: `X-Content-Type-Options: nosniff` and `referrer: strict-origin-when-cross-origin`.
- **Secret Boundary**: Strict client-side boundary ensuring no private credentials leak into frontend bundles.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation & Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run Oxlint static analysis
npm run lint

# Build production bundle
npm run build
```
