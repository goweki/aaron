# A.A.R.O.N. Platform Context, Workflow & Delivery Roadmap

> **Purpose:** A.A.R.O.N. (Acoustic Analytics & Recognition Operations Network) is a research-thesis platform for audio asset indexing, acoustic landmark fingerprinting, watermark metadata, and broadcast-match operations.

## System thesis

A.A.R.O.N. explores whether an audio asset can be ingested, transformed into a searchable landmark index, compared against broadcast-derived samples, and reviewed by an operator. The platform is intentionally split between a working application foundation and thesis capabilities that are still planned.

## Implemented foundation

- Authenticated Next.js dashboard with public landing and password-reset flows.
- Prisma models for users, assets, audio fingerprints, fingerprint hashes, watermarks, broadcasters, monitoring sessions, and detections.
- Audio asset upload that extracts landmark fingerprints and stores `AudioFingerprint` and `FingerprintHash` records.
- Server-only watermark pipeline at `src/lib/watermark.ts`; it embeds a payload into a persisted audio artifact and records watermark metadata when invoked by a server workflow.
- Asset catalog status management and detection verification (`PENDING`, `VERIFIED`, `REJECTED`).
- Dashboard telemetry for catalog assets, configured broadcasters, and recorded detections.

Current web routes are limited to `/`, auth/reset-password routes, `/dashboard`, `/dashboard/assets`, `/dashboard/assets/upload`, `/dashboard/detections`, and `/dashboard/users`. API routes are under `/api` for authentication, assets, detections, and EdgeStore.

## Target research workflow

```text
Audio asset
  → authenticated upload and metadata validation
  → optional server-side watermark artifact
  → landmark fingerprint extraction
  → PostgreSQL asset and hash index
  → broadcast/sample fingerprint extraction
  → aligned-hash match evaluation
  → detection record
  → operator verification and telemetry
```

### 1. Asset ingestion and indexing

An operator provides an audio file and track metadata. The server derives ownership from the authenticated session, extracts landmark hashes, and stores them against the asset. `FingerprintHash.hash` is a `BigInt` to support efficient matching indexes.

### 2. Watermark processing

The server-only watermark pipeline accepts an asset ID, persisted source path, destination path, and payload. It must never be imported by client code. The current upload flow records a payload; durable file storage and invocation of the artifact-writing pipeline are future integration work.

### 3. Broadcast monitoring and matching

The data model supports broadcasters, monitoring sessions, and detections. A live stream capture worker, sampling schedule, match-threshold policy, and monitoring UI are planned. Do not describe them as implemented until the worker, route, and tests exist.

### 4. Verification and analysis

Operators can update detection status through Server Actions. Deep-dive inspectors, confidence curves, waveform comparison, verified-playout metrics, and monitoring health views are planned enhancements.

## Data and boundary rules

- Server processing, Prisma access, filesystem use, and secrets stay in server-only modules.
- Browser microphone, canvas, and Web Audio APIs stay in focused hooks under `src/hooks/` and clean up streams, animation frames, and audio contexts.
- Client mutations call Server Actions inside `useTransition` and handle `ActionResult<T>` values.
- Never pass a client-supplied owner ID to persistence logic; derive it from the authenticated actor.
- Convert `BigInt` values to strings before returning them in JSON or serializing them to client-only code.
- Validate untrusted file metadata, IDs, URLs, and payloads on the server.

## Planned delivery areas

| Area                  | Required before claiming support                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| Asset inspector       | `/dashboard/assets/[assetId]`, authorization, asset query, and error state.                                  |
| Detection inspector   | `/dashboard/detections/[detectionId]`, authorization, comparison data, and error state.                      |
| Stream monitoring     | Capture worker, lifecycle controls, monitoring-session actions, and `/dashboard/monitor` views.              |
| Broadcaster registry  | Broadcaster actions, validation, and `/dashboard/broadcasters` views.                                        |
| Watermark studio      | Durable storage integration, artifact invocation, job/progress reporting, and `/dashboard/watermarks` views. |
| Settings and API keys | Profile/API-key actions, secret handling, and corresponding protected routes.                                |

## Vocabulary

Use precise language in UI and code: **Acoustic Fingerprint Index**, **landmark hash**, **aligned hashes**, **Broadcast Stream Match**, **watermark payload**, **monitoring session**, and **detection verification**. Avoid implying live, autonomous, real-time, or imperceptible operation where the supporting worker or measurement has not been implemented.
