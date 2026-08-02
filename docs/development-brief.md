# A.A.R.O.N. Development Style Guide

Use this guide for every change. Prefer the smallest complete change that preserves existing behavior. Do not introduce a new library, pattern, route, or data model unless the task requires it.

## Stack and boundaries

- Use Next.js App Router and TypeScript. Keep type checking clean.
- Use Tailwind CSS, shadcn/ui primitives, and Lucide React icons.
- Pages are Server Components by default. Add `"use client"` only to the smallest interactive component that needs browser APIs, state, effects, or event handlers.
- Keep database access, secrets, filesystem access, Node APIs, and privileged processing in server-only modules. Add `import "server-only"` to server services that could otherwise be imported by the client.
- Do not put server and browser implementations in the same module.

## Files, routes, and components

- Route files should be thin: fetch/authorize, handle result objects, and compose views.
- Dashboard route pages must be `async`, perform or delegate authorization, handle failed results with `ErrorView`, and wrap content in `ViewLayout`.
- Put interactive UI in `src/components/`; put reusable page bodies in `src/components/views/`; put domain-specific forms in `src/components/forms/<domain>/`.
- Keep browser API integrations as hooks in `src/hooks/use-<feature>.ts`.
- Put reusable server domain logic in `src/lib/<domain>/` or an existing domain module. Do not import route handlers into UI code.
- API routes are for external/API consumers. Use Server Actions for mutations initiated by the web UI.

## Naming

- Use `kebab-case` for directories and filenames: `upload-asset-form.tsx`, `audio-processing-actions.ts`.
- Name React components and types in `PascalCase`; hooks start with `use`; functions and variables use `camelCase`; constants use `UPPER_SNAKE_CASE` only for immutable module-level constants.
- Name by domain intent, not implementation detail: `indexAssetAction`, `detectionCount`, `watermarkPayload`; avoid `data`, `item`, `handle`, or `utils` when a precise name is available.
- Boolean names start with `is`, `has`, `can`, or `should`: `isPending`, `hasWatermark`, `canManageUsers`.
- Use singular nouns for one record and plural nouns for collections. Include units in numeric names when meaningful: `durationMs`, `fileSizeBytes`.
- Action names end in `Action`; result-bearing queries should end in `Action` when they are Server Actions, otherwise use a descriptive verb such as `getUrl` or `extractFingerprints`.

## Data fetching, authorization, and errors

- Query and mutation functions return `ActionResult<T>` (`{ ok, data?, error? }`) rather than throwing expected user-facing errors.
- Check `res.ok` before using `res.data`. Server pages render `ErrorView` for failed page data.
- Authenticate and authorize on the server for every protected read or mutation. Never rely on hidden controls or client-provided owner IDs for authorization.
- Filter data by the authenticated actor in the query, not after fetching it.
- Log unexpected server errors with useful context; return a safe, actionable error message to the UI. Do not expose stack traces, secrets, tokens, or raw database errors.
- Revalidate the affected routes after successful mutations.

## Client mutations and feedback

- Call Server Actions from client components inside `startTransition` from `useTransition`.
- Never use `<form action={serverAction}>` or an inline async `action` in a Client Component. Use `onSubmit` or `onClick` handlers instead.
- Track the active record ID for row-level operations. Disable controls while pending, add `disabled:opacity-50`, and show `Loader2` with `animate-spin` only on the active control.
- Use `react-hot-toast` for success and failure feedback. Do not add a second toast system.
- Validate obvious client input for usability, but treat server validation as authoritative.

## UI, accessibility, and copy

- Use shadcn components before writing a raw equivalent. Raw controls are acceptable only when the primitive cannot meet the requirement.
- Use Lucide icons only. Choose icons that match the domain: `Music2`/`Library` for assets, `Radio`/`Fingerprint`/`Mic` for monitoring, and `CheckCircle2`/`XCircle`/`Clock`/`Loader2` for states.
- Support light and dark themes for every custom color: light backgrounds use `bg-slate-50` or `bg-white`; dark counterparts use `dark:bg-slate-950` or `dark:bg-slate-900`. Pair slate borders with `dark:border-slate-800`.
- Use Indigo for primary actions and telemetry, Emerald for successful/active states, Amber or Slate for pending/inactive states, and Red for errors/destructive states.
- Preserve keyboard access, semantic labels, visible focus styles, and meaningful `alt` text. Buttons with icons only require an accessible label.
- Write concise, technical, domain-accurate copy: “Acoustic Fingerprint Index”, “Broadcast Stream Match”, and “aligned hashes” are preferred over generic terms.

## Forms and validation

- Use controlled inputs when client state or validation is needed; provide `id`, `Label`, `name`, and an appropriate `autoComplete` value where applicable.
- Keep form submission, pending state, success/error feedback, and reset behavior together in the form component.
- Use Zod or explicit server validation at trust boundaries. Validate file type, size, ownership, and required metadata on the server.
- Never hardcode user IDs, credentials, URLs, or environment-specific paths.

## URLs, environment, and external input

- Use `NEXT_PUBLIC_APP_URL` for the public application origin. Normalize it to an absolute `http` or `https` URL before composing links.
- Never pass unchecked input to `new URL()`, filesystem APIs, shell commands, database filters, or HTML rendering.
- Encode user-controlled URL query values and use parameterized Prisma queries.
- Keep environment variables documented in `.env.template`; never commit real values.

## Audio and background processing

- Browser audio, microphone, canvas, and media APIs belong in focused custom hooks with `useEffect` cleanup for streams, animation frames, and `AudioContext` instances.
- Server audio processing belongs in server-only services. Use explicit input/output paths or storage keys, close contexts/processes in `finally`, and persist metadata transactionally where appropriate.
- Do not import `fs`, `child_process`, Prisma, or server actions into a client module.

## Database and types

- Reuse generated Prisma types and existing relation include definitions. Do not duplicate schema types by hand.
- Keep transactions focused and bounded. Use `createMany` for bulk inserts where appropriate.
- Do not use unchecked Prisma input types for untrusted browser data without constructing a validated, allow-listed server object first.
- Prefer `unknown` plus narrowing over `any`.

## Imports, formatting, and maintenance

- Use `@/` aliases for app modules and type-only imports (`import type`) when an import is only used as a type.
- Remove unused code, commented-out implementations, stale TODOs, and unused dependencies as part of the change that makes them obsolete.
- Avoid duplicate page titles, duplicate data fetches, and duplicate client/server logic.
- Prefer small pure helpers and early returns over deeply nested conditionals.
- Do not reformat unrelated files or overwrite user changes.

## Completion checklist

- Is the route/server boundary correct and protected?
- Are result objects, errors, loading state, and toasts handled?
- Are names precise, types explicit, and dead code absent?
- Does custom UI work in both themes and use shadcn/Lucide conventions?
- Are URLs, environment values, file paths, and external input validated?
- Did `npx tsc --noEmit` and the relevant test/build command run, or is the blocker reported?
