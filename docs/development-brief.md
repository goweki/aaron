Here is the **A.A.R.O.N. Engineering & Design System Standard**. You can store this in your repository (e.g., `DEVELOPMENT_GUIDELINES.md` or `.cursorrules`) to guide developers and prompt LLM agents for future feature development.

---

# A.A.R.O.N. System Architecture & Coding Standards

## 1. Stack Overview & Core Principles

- **Framework:** Next.js App Router with TypeScript.
- **Styling & UI:** Tailwind CSS, `shadcn/ui` components, and Lucide React icons.
- **Data Fetching & Actions:** React Server Components (RSC) for page-level data fetching; Next.js Server Actions for mutations.
- **State & Transitions:** React `useTransition` for asynchronous client-side mutation states.
- **Notifications:** Standardized toast system (`react-hot-toast`).

---

## 2. Server Architecture & Data Management

### Page Architecture (RSC First)

- **Server Components (`page.tsx`):** All page components are `async` Server Components that handle data fetching, error handling, and authorization checking.
- **Error Handling:** Always check Server Action / Query responses using result objects (e.g., `{ ok: boolean, data?: T, error?: string }`). Render `<ErrorView error="{...}"/>` if the query fails.
- **Layout Wrapper:** Wrap all dashboard views in the reusable `<ViewLayout>` component to guarantee uniform headers, breadcrumbs, and primary page actions across the platform.

```tsx
// Standard Page Template
export default async function FeaturePage() {
  const res = await getFeatureDataAction();

  if (!res.ok) {
    return <ErrorView error={res.error} />;
  }

  return (
    <ViewLayout
      title="Feature Title"
      description="Clear, action-oriented description of what this page monitors or manages."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Feature" },
      ]}
      actions={[
        {
          label: "Primary Action",
          href: "/dashboard/feature/new",
          icon: PlusIcon,
          variant: "default",
        },
      ]}
    >
      <FeatureView data={res.data} />
    </ViewLayout>
  );
}
```

### Server Actions & Mutations

- **No Raw Form Actions:** Do not bind `<form action={serverAction}>` directly in Client Components.
- **Async Transitions:** Wrap Server Actions inside `startTransition` using React's `useTransition` hook.
- **Action Signatures:** Server Actions should accept direct parameters (e.g., `(id: string, status: Enum)`) and return `{ ok: boolean, data?: T, error?: string }`.
- **State Scoping:** Track single-item pending states (e.g., `activeItemId`) to isolate loading spinners to the row or button being clicked.

```tsx
// Standard Action Trigger Pattern
const [isPending, startTransition] = useTransition();
const [activeItemId, setActiveItemId] = useState<string | null>(null);

const handleAction = (id: string) => {
  setActiveItemId(id);
  startTransition(async () => {
    const res = await updateStatusAction(id);
    if (!res.ok) {
      toast.error(res.error || "Operation failed");
    } else {
      toast.success("Updated successfully");
    }
    setActiveItemId(null);
  });
};
```

---

## 3. Web & Browser API Encapsulation

- **Custom Hooks:** Abstract complex web APIs (Web Audio API, SpeechRecognition, Oscilloscopes/Canvas drawing, MediaDevices) into standalone custom hooks (e.g., `useAudioListener()`).
- **Clean Cleanup:** Always release resources inside `useEffect` cleanup callbacks (`AudioContext.close()`, `MediaStream.getTracks().forEach(t => t.stop())`, `cancelAnimationFrame`).

---

## 4. Design System & UI/UX Guidelines

### Theme & Colors

- **Theme Strategy:** Dual-theme architecture (Dark / Light) powered by Tailwind CSS dark mode classes (`dark:...`).
- **Color Palette:**
- **Backgrounds:** Light: `bg-slate-50` / `bg-white`; Dark: `dark:bg-slate-950` / `dark:bg-slate-900`.
- **Borders:** `border-slate-200` / `dark:border-slate-800`.
- **Primary Accents:** Indigo (`indigo-600`, `indigo-500`) for primary brand interactions & key telemetry metrics.
- **Status Pills:**
- **Active / Verified:** Emerald (`bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300`).
- **Inactive / Pending:** Slate or Amber (`bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300`).
- **Rejected / Error:** Red (`bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300`).

### Icon Selection Rules (Lucide React)

Always use context-appropriate Lucide icons:

- **Dashboard / Overview:** `LayoutDashboard`, `Activity`, `Gauge`
- **Audio Assets & Catalog:** `Music2`, `Library`, `Waves`
- **Broadcast Monitoring & Detections:** `Radio`, `Fingerprint`, `Mic`
- **System Operations:** `Clock`, `CheckCircle2`, `XCircle`, `Loader2` (for pending states)

### Micro-Interactions & UX Copy

- **Button States:** Disable buttons during transitions (`disabled={isPending}`) and set `disabled:opacity-50`. Display `Loader2` with `animate-spin` inside the active button.
- **Copywriting:** Use professional, technical, and domain-accurate terminology (e.g., _"Acoustic Fingerprint Index"_, _"Broadcast Stream Match"_, _"Aligned Hashes"_ instead of vague generic terms).

---

## 5. URL & Environment Hygiene

- **URL Parsing:** Never pass unvalidated string domains to `new URL()`. Always sanitize or prepend `https://` to avoid Node `ERR_INVALID_URL` runtime crashes.
- **Absolute Protocol:** Standardize environment variable handling for `NEXT_PUBLIC_APP_URL` to enforce valid protocols across server and client boundaries.
  Here is the **A.A.R.O.N. Engineering & Design System Standard**. You can store this in your repository (e.g., `DEVELOPMENT_GUIDELINES.md` or `.cursorrules`) to guide developers and prompt LLM agents for future feature development.

---

# A.A.R.O.N. System Architecture & Coding Standards

## 1. Stack Overview & Core Principles

- **Framework:** Next.js App Router with TypeScript.
- **Styling & UI:** Tailwind CSS, `shadcn/ui` components, and Lucide React icons.
- **Data Fetching & Actions:** React Server Components (RSC) for page-level data fetching; Next.js Server Actions for mutations.
- **State & Transitions:** React `useTransition` for asynchronous client-side mutation states.
- **Notifications:** Standardized toast system (`react-hot-toast`).

---

## 2. Server Architecture & Data Management

### Page Architecture (RSC First)

- **Server Components (`page.tsx`):** All page components are `async` Server Components that handle data fetching, error handling, and authorization checking.
- **Error Handling:** Always check Server Action / Query responses using result objects (e.g., `{ ok: boolean, data?: T, error?: string }`). Render `<ErrorView error="{...}"/>` if the query fails.
- **Layout Wrapper:** Wrap all dashboard views in the reusable `<ViewLayout>` component to guarantee uniform headers, breadcrumbs, and primary page actions across the platform.

```tsx
// Standard Page Template
export default async function FeaturePage() {
  const res = await getFeatureDataAction();

  if (!res.ok) {
    return <ErrorView error={res.error} />;
  }

  return (
    <ViewLayout
      title="Feature Title"
      description="Clear, action-oriented description of what this page monitors or manages."
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Feature" },
      ]}
      actions={[
        {
          label: "Primary Action",
          href: "/dashboard/feature/new",
          icon: PlusIcon,
          variant: "default",
        },
      ]}
    >
      <FeatureView data={res.data} />
    </ViewLayout>
  );
}
```

### Server Actions & Mutations

- **No Raw Form Actions:** Do not bind `<form action={serverAction}>` directly in Client Components.
- **Async Transitions:** Wrap Server Actions inside `startTransition` using React's `useTransition` hook.
- **Action Signatures:** Server Actions should accept direct parameters (e.g., `(id: string, status: Enum)`) and return `{ ok: boolean, data?: T, error?: string }`.
- **State Scoping:** Track single-item pending states (e.g., `activeItemId`) to isolate loading spinners to the row or button being clicked.

```tsx
// Standard Action Trigger Pattern
const [isPending, startTransition] = useTransition();
const [activeItemId, setActiveItemId] = useState<string | null>(null);

const handleAction = (id: string) => {
  setActiveItemId(id);
  startTransition(async () => {
    const res = await updateStatusAction(id);
    if (!res.ok) {
      toast.error(res.error || "Operation failed");
    } else {
      toast.success("Updated successfully");
    }
    setActiveItemId(null);
  });
};
```

---

## 3. Web & Browser API Encapsulation

- **Custom Hooks:** Abstract complex web APIs (Web Audio API, SpeechRecognition, Oscilloscopes/Canvas drawing, MediaDevices) into standalone custom hooks (e.g., `useAudioListener()`).
- **Clean Cleanup:** Always release resources inside `useEffect` cleanup callbacks (`AudioContext.close()`, `MediaStream.getTracks().forEach(t => t.stop())`, `cancelAnimationFrame`).

---

## 4. Design System & UI/UX Guidelines

### Theme & Colors

- **Theme Strategy:** Dual-theme architecture (Dark / Light) powered by Tailwind CSS dark mode classes (`dark:...`).
- **Color Palette:**
- **Backgrounds:** Light: `bg-slate-50` / `bg-white`; Dark: `dark:bg-slate-950` / `dark:bg-slate-900`.
- **Borders:** `border-slate-200` / `dark:border-slate-800`.
- **Primary Accents:** Indigo (`indigo-600`, `indigo-500`) for primary brand interactions & key telemetry metrics.
- **Status Pills:**
- **Active / Verified:** Emerald (`bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300`).
- **Inactive / Pending:** Slate or Amber (`bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300`).
- **Rejected / Error:** Red (`bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300`).

### Icon Selection Rules (Lucide React)

Always use context-appropriate Lucide icons:

- **Dashboard / Overview:** `LayoutDashboard`, `Activity`, `Gauge`
- **Audio Assets & Catalog:** `Music2`, `Library`, `Waves`
- **Broadcast Monitoring & Detections:** `Radio`, `Fingerprint`, `Mic`
- **System Operations:** `Clock`, `CheckCircle2`, `XCircle`, `Loader2` (for pending states)

### Micro-Interactions & UX Copy

- **Button States:** Disable buttons during transitions (`disabled={isPending}`) and set `disabled:opacity-50`. Display `Loader2` with `animate-spin` inside the active button.
- **Copywriting:** Use professional, technical, and domain-accurate terminology (e.g., _"Acoustic Fingerprint Index"_, _"Broadcast Stream Match"_, _"Aligned Hashes"_ instead of vague generic terms).

---

## 5. URL & Environment Hygiene

- **URL Parsing:** Never pass unvalidated string domains to `new URL()`. Always sanitize or prepend `https://` to avoid Node `ERR_INVALID_URL` runtime crashes.
- **Absolute Protocol:** Standardize environment variable handling for `NEXT_PUBLIC_APP_URL` to enforce valid protocols across server and client boundaries.
