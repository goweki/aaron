# A.A.R.O.N. Incremental Implementation Plan

This is the execution order for completing the platform. Each numbered item is intended to be completed and verified in one or more consecutive prompts before starting the next item. Do not create routes, workers, or UI that claim a capability before its server workflow exists.

## 0. Establish a reliable baseline

**Outcome:** the existing foundation follows the style guide and has a repeatable verification path.

1. Resolve the ESLint/React plugin compatibility issue and add a minimal test command.
2. Remove dead commented implementations and unused UI dependencies.
3. Audit all existing actions and API routes for authorization, input validation, `ActionResult` consistency, and `BigInt` serialization boundaries.
4. Replace or secure the legacy `/api/asset` upload endpoint; do not permit a caller-selected `ownerId`.
5. Resolve dangling links by either implementing or removing `/dashboard/users/create` and `/dashboard/detections/new`.

**Done when:** lint, type checking, and targeted tests run; existing links resolve; protected mutations enforce ownership/role checks.

## 1. Durable audio storage and ingestion pipeline

**Outcome:** uploaded source files and generated watermark artifacts have durable, authorized storage locations.

1. Choose and document the storage contract (EdgeStore or another provider), including source object key, processed object key, MIME type, size, checksum, and retention rules.
2. Extend the asset schema only if the current `file`/`filename` fields cannot represent that contract; migrate and seed safely.
3. Validate file MIME type, byte size, title/metadata, and ownership on the server.
4. Persist the source file before fingerprint extraction; write processing artifacts to managed temporary storage and publish the final artifact to durable storage.
5. Integrate `embedWatermark` into the ingestion workflow when a watermark payload is requested; return a structured processing result.
6. Add cleanup for temporary files and failure-path tests.

**Done when:** an authorized user can upload, index, optionally watermark, and later retrieve a durable asset artifact without client-supplied ownership.

## 2. Asset details and catalog completion

**Outcome:** the catalog supports inspection instead of only list-level actions.

1. Add `getAssetByIdAction` with ownership/role filtering and a client-safe DTO.
2. Implement `/dashboard/assets/[assetId]` with `ViewLayout`, `ErrorView`, and an asset inspector view.
3. Show metadata, fingerprint algorithm/version, hash count, watermark record, detection history, and audio artifact link/player when available.
4. Add navigation from the asset list and test unauthorized/not-found cases.

**Done when:** every catalog row can open an authorized detail page with no `BigInt` serialization failure.

## 3. Broadcaster registry

**Outcome:** operators can manage valid monitored stream targets.

1. Define a Zod schema for broadcaster name, stream URL, country, and frequency; normalize and validate HTTP(S) URLs server-side.
2. Implement broadcaster create/list/update/delete Server Actions with role checks.
3. Add `/dashboard/broadcasters` and `/dashboard/broadcasters/new` using `ViewLayout` and transition-based forms.
4. Add tests for URL normalization, duplicates, and authorization.

**Done when:** an authorized operator can create and manage broadcaster records safely.

## 4. Matching engine and controlled simulation

**Outcome:** a deterministic service can produce a detection from known audio input.

1. Define the matching contract: sample duration, hash generation settings, alignment histogram, threshold, confidence calculation, and engine version.
2. Implement a server-only matching service that compares query hashes with `FingerprintHash` records using scoped, indexed Prisma queries.
3. Implement a controlled file/playlist simulation adapter before introducing live stream capture.
4. Write fixture-based tests for true matches, non-matches, offsets, corrupted audio, and threshold boundaries.
5. Persist detection records with asset, broadcaster, session, timing, confidence, and engine version.

**Done when:** fixtures create repeatable `PENDING` detections with measured precision/recall evidence.

## 5. Monitoring sessions and worker lifecycle

**Outcome:** monitoring jobs can be started, observed, and stopped without relying on a web request lifetime.

1. Select the runtime model for background work (queue/worker process/scheduled job) and document deployment requirements.
2. Add monitoring-session actions for start, stop, status, and history with broadcaster authorization.
3. Connect the simulation adapter to the worker and add idempotency, cancellation, retry, and structured logs.
4. Implement `/dashboard/monitor` and `/dashboard/monitor/new` only after the worker API exists.
5. Report real session state; do not display synthetic “live” telemetry as production state.

**Done when:** a controlled session starts outside the request, generates detections, stops cleanly, and leaves an auditable session record.

## 6. Detection inspection and verification workflow

**Outcome:** detection evidence is understandable and reviewable.

1. Add `getDetectionByIdAction` with relation loading and authorization.
2. Implement `/dashboard/detections/[detectionId]` with match metadata, aligned-hash evidence, timestamps, and linked asset/broadcaster/session data.
3. Add verified/rejected action guards, audit-friendly status transitions, and per-item transition feedback.
4. Add charts or waveform comparison only when the matching service persists the required evidence.

**Done when:** an authorized operator can inspect and verify one detection from start to finish.

## 7. Watermark operations UI

**Outcome:** watermark artifact generation is observable and traceable.

1. Add a watermark query/action layer scoped by asset ownership.
2. Implement `/dashboard/watermarks` as a registry view.
3. Implement `/dashboard/watermarks/encode` only if users need a workflow separate from ingestion; otherwise keep watermarking within upload.
4. Surface artifact location, algorithm version, payload policy, processing state, and recoverable errors. Never display secret payloads if they become sensitive.

**Done when:** watermark records correspond to durable artifacts and their processing outcome is visible.

## 8. User, settings, and API-key management

**Outcome:** management routes match the existing data model and no navigation is dangling.

1. Decide whether user creation belongs in the app; implement `/dashboard/users/create` or remove its link.
2. Implement profile/settings updates with explicit authorization and validation.
3. Define API-key lifecycle requirements (generation, one-time display, hashing, revocation, scope, and audit data) before adding routes or UI.
4. Add `/dashboard/settings` and `/dashboard/settings/api-keys` only after their server workflows and schema are complete.

**Done when:** every management UI action maps to an authorized, tested server workflow.

## 9. Thesis evaluation and release readiness

**Outcome:** the research claims are backed by reproducible evidence.

1. Curate licensed audio fixtures and a ground-truth simulated broadcast dataset.
2. Measure match precision, recall, false-positive rate, latency, throughput, and resource use under defined conditions.
3. Measure watermark audibility/robustness with a documented evaluation method; do not label the method imperceptible without evidence.
4. Add accessibility, security, and end-to-end tests for the implemented workflows.
5. Update the platform context, route documentation, and work schedule to distinguish completed evidence from future work.

**Done when:** a reproducible evaluation report and deployment/runbook exist.

## Prompt protocol

For each implementation prompt, state the plan item and substep, make only that scoped change, add or update tests, run the relevant checks, and update this plan’s status. If a substep requires a product or infrastructure decision, stop and request that decision before writing code.
