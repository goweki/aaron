# TECHNICAL_SPEC.md

## 1. System Overview

High-performance audio identification, fingerprinting, watermarking, and broadcast monitoring system built with **Next.js 16 (App Router)**, **Prisma ORM**, **PostgreSQL**, and **FFmpeg**.

- **Primary Mechanism:** Landmark audio fingerprinting (Shazam-style `hcode`/`tcode` alignment).
- **Architecture Standard:** Server Actions for UI mutations and internal operations; Route Handlers (`/api/*`) strictly for streaming, background workers, and external integration webhooks.

---

## 2. Core Tech Stack

- **Framework:** Next.js 16 (App Router, React Server Components, Server Actions)
- **Database & ORM:** PostgreSQL + Prisma (`output = "./generated"`)
- **Styling & UI:** Tailwind CSS, shadcn/ui, Lucide React (`lucide-react`)
- **Audio Processing:** `ffmpeg` (Node.js `child_process`), `stream-audio-fingerprint`
- **Environment Execution:** Node.js runtime required for FFmpeg child process operations (`export const runtime = "nodejs"`).

---

## 3. Database Schema Reference

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
  output   = "./generated"
}

enum Status {
  PENDING
  ACTIVE
  INACTIVE
  DELETED
}

enum UserRole {
  USER
  ADMINISTRATOR
  SYSTEM
}

enum AssetType {
  MUSIC
  VIDEO
}

enum DetectionStatus {
  PENDING
  VERIFIED
  REJECTED
}

model User {
  id               String    @id @default(uuid()) @db.Uuid
  name             String
  phone            String?   @unique
  email            String?   @unique
  passwordHash     String?
  voiceSign        String?
  role             UserRole  @default(USER)
  image            String?
  resetToken       String?
  resetTokenExpiry DateTime?
  apiKeyHash       String?
  status           Status    @default(PENDING)

  assets Asset[] @relation("owner")

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([apiKeyHash])
  @@map("users")
}

model Asset {
  id          String  @id @default(uuid()) @db.Uuid
  title       String
  description String?
  artist      String?
  album       String?

  isrc String? @unique

  filename String?
  file     String?
  image    String?

  type   AssetType @default(MUSIC)
  status Status    @default(INACTIVE)

  duration   Float?
  sampleRate Int?
  bitRate    Int?
  channels   Int?
  fileSize   Int?
  checksum   String? @unique

  ownerId String @db.Uuid
  owner   User   @relation("owner", fields: [ownerId], references: [id])

  fingerprint AudioFingerprint?
  hashes      FingerprintHash[]
  watermark   Watermark?
  detections  Detection[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([ownerId])
  @@index([status])
  @@index([type])
  @@map("assets")
}

model AudioFingerprint {
  id String @id @default(uuid()) @db.Uuid

  algorithm String @default("landmark")
  version   String @default("1.0.4")

  generatedAt DateTime @default(now())

  assetId String @unique @db.Uuid
  asset   Asset  @relation(fields: [assetId], references: [id], onDelete: Cascade)

  hashes FingerprintHash[]

  @@map("audio_fingerprints")
}

model FingerprintHash {
  id BigInt @id @default(autoincrement())

  hash     BigInt
  offsetMs Int

  audioFingerprintId String           @db.Uuid
  audioFingerprint   AudioFingerprint @relation(fields: [audioFingerprintId], references: [id], onDelete: Cascade)

  assetId String @db.Uuid
  asset   Asset  @relation(fields: [assetId], references: [id], onDelete: Cascade)

  @@index([hash, assetId, offsetMs])
  @@index([assetId])
  @@map("fingerprint_hashes")
}

model Watermark {
  id String @id @default(uuid()) @db.Uuid

  algorithm String
  payload   String

  embeddedAt DateTime @default(now())

  assetId String @unique @db.Uuid
  asset   Asset  @relation(fields: [assetId], references: [id], onDelete: Cascade)

  @@map("watermarks")
}

model Broadcaster {
  id String @id @default(uuid()) @db.Uuid

  name        String  @unique
  description String?

  website   String?
  streamUrl String? @unique
  country   String?
  frequency String?

  status Status @default(ACTIVE)

  monitoringSessions MonitoringSession[]
  detections         Detection[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("broadcasters")
}

model MonitoringSession {
  id String @id @default(uuid()) @db.Uuid

  broadcasterId String      @db.Uuid
  broadcaster   Broadcaster @relation(fields: [broadcasterId], references: [id], onDelete: Cascade)

  startedAt DateTime
  endedAt   DateTime?

  status Status @default(ACTIVE)

  detections Detection[]

  createdAt DateTime @default(now())

  @@unique([broadcasterId, startedAt])
  @@index([broadcasterId])
  @@index([startedAt])
  @@map("monitoring_sessions")
}

model Detection {
  id String @id @default(uuid()) @db.Uuid

  assetId String @db.Uuid
  asset   Asset  @relation(fields: [assetId], references: [id], onDelete: Cascade)

  broadcasterId String      @db.Uuid
  broadcaster   Broadcaster @relation(fields: [broadcasterId], references: [id])

  sessionId String?            @db.Uuid
  session   MonitoringSession? @relation(fields: [sessionId], references: [id], onDelete: SetNull)

  broadcastAt DateTime
  detectedAt  DateTime @default(now())

  confidence Float

  startOffset Float?
  endOffset   Float?
  duration    Float?

  engineVersion String

  status DetectionStatus @default(PENDING)

  createdAt DateTime @default(now())

  @@unique([assetId, broadcasterId, broadcastAt])
  @@index([broadcasterId, status, broadcastAt])
  @@index([status])
  @@index([assetId])
  @@index([broadcasterId])
  @@index([sessionId])
  @@index([broadcastAt])
  @@index([assetId, broadcastAt])
  @@index([broadcasterId, broadcastAt])
  @@map("detections")
}

```

---

## 4. Architectural Rules & Data Flow

### Server Actions

- **All UI interactions** (Forms, Asset creation, Watermark configuration, Manual verification, User updates) MUST be handled via Next.js Server Actions (`"use server"`).
- Standard return type pattern:

```typescript
type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };
```

### API Routes (`/api/*`)

Reserved exclusively for:

1. External monitoring agents sending detection payloads.
2. Webhooks & REST access authenticated via `User.apiKeyHash`.
3. Heavy audio stream ingestion/identification endpoints requiring explicit stream handling.

### Audio Fingerprinting Strategy

1. Input audio is converted via FFmpeg (`pcm_s16le`, `22050Hz`, `1 channel`, `wav`).
2. Landmarks extracted via `stream-audio-fingerprint` into (`hcode`, `tcode`) tuples.
3. Hashes batch-inserted via `prisma.fingerprintHash.createMany()` with `BigInt` conversion.
4. Identification matches via Time-Offset Histogram Alignment against index `@@index([hash, assetId, offsetMs])`.

---

## 5. Application Routes & Page Specification

### `/dashboard`

- **Purpose:** System overview dashboard.
- **Components:** Summary cards (Total Assets, Active Broadcasters, Detections Count, Unverified Alerts), recent activity feeds, and system status indicators.

### `/dashboard/assets`

- **Purpose:** Catalog management for registered tracks and videos.
- **Features:**
- Paginated table showing Title, Artist, ISRC, Hashes Count, and Status.
- Asset detail view (fingerprint status, watermark data, linked detections).
- Server Actions for asset deletion (`CASCADE`) and status toggling (`Status`).

### `/dashboard/assets/upload`

- **Purpose:** Indexing pipeline for new media files.
- **Features:**
- File dropzone accepting audio/video files.
- Metadata form (Title, Artist, Album, ISRC, Description).
- Checkbox/inputs to generate Audio Fingerprints & embed Watermarks on upload.
- Action triggers pipeline: FFmpeg conversion $\rightarrow$ Fingerprint Extraction $\rightarrow$ Database insertion.

### `/dashboard/detections`

- **Purpose:** Logs of verified and pending audio detections from radio/streams.
- **Features:**
- Filterable table by Broadcaster, DetectionStatus (`PENDING`, `VERIFIED`, `REJECTED`), and date range.
- Match details view: Confidence score, play duration, relative playback offset (`startOffset`, `endOffset`).
- Server Actions: Batch approve (`VERIFIED`) or reject (`REJECTED`) pending detections.

### `/dashboard/broadcasts`

- **Purpose:** Management of monitored radio channels and live streams.
- **Features:**
- CRUD interface for `Broadcaster` entities (Name, Stream URL, Frequency, Country).
- Stream status checker (Active / Inactive indicators).
- Session history viewer (`MonitoringSession`).

### `/dashboard/detect`

- **Purpose:** Real-time/on-demand audio identification tool (Shazam-style tester).
- **Features:**
- Browser microphone recorder / sample file uploader.
- Executes matcher engine against database covering index.
- Displays top match, confidence score, and time offsets.

---

## 6. Required External Integrations

- **Monitoring Agents Endpoint (`POST /api/v1/detections/ingest`)**
- Receives external stream monitor payloads.
- Validates requester via `apiKeyHash` header.
- Creates or attaches to active `MonitoringSession` and writes to `Detection`.
