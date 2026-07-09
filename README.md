# AARON - Automatic Audio Recognition

**An Audio Fingerprinting and Watermarking Model**

This repository contains the code for a Next.js application that implements a model for audio fingerprinting and watermarking. It can also be used to monitor and log broadcasts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Toolchain](#toolchain)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project Locally](#running-the-project-locally)
  - [To Build the Production-ready Optimized Build](#to-build-the-production-ready-optimized-build)
  - [Seeding database](#seeding-database)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The goal of this project is to provide a model to test the efficacy of automated broadcast monitoring through the implementation of audio fingerprinting and watermarking algorithms. The model is built with Next.js, and it integrates modern web technologies to ensure a seamless and efficient user experience.

## Features

- **Audio Fingerprinting**: Identification of unique audio patterns for tracking and monitoring.
- **Audio Watermarking**: Embedding imperceptible markers within audio files for copyright protection.
- **Broadcast Logging**: Generation of detailed logs for each monitored broadcast.
- **Real-time Monitoring**: Continuous tracking of audio usage across different platforms.
- **User Roles**: Role-based access control for different stakeholders.

## Toolchain

- Next.js 14: bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- css: [`Tailwind`](https://tailwindcss.com/) v3.
- Hosting: [`Vercel`](https://vercel.com/).
- Mail: [`nodemailer`](https://nodemailer.com/).
- Authentication: [`Next.js Auth`](https://next-auth.js.org).
- HTML/css Components: [`shadcn/ui`](https://ui.shadcn.com/).

### Additional Technologies Used

- **Prisma ORM**: An Object-Relational Mapping tool used for database management.
- **MongoDB**: A NoSQL database for storing application data, including audio fingerprints.
- **Web Audio API**: A JavaScript API for processing and synthesizing audio within the web browser.
- **TypeScript**: A statically typed superset of JavaScript for improved code quality.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Version 14.x.x or higher is recommended.
- **npm**: Comes bundled with Node.js.
- **MongoDB**: You can use a local instance or connect to a remote MongoDB server.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/goweki/aaron.git
   ```

2. **Navigate into the project directory:**:

   ```bash
   cd aaron
   ```

3. **Install the necessary dependencies:**:

   ```bash
   npm install
   ```

### Running the Project Locally

1. **Set up environment variables**: Create a '**.env**' file in the root directory and configure your MongoDB connection string and other necessary environment variables as detailed in the '**.env.template**' file.

2. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:3000.

### To Build the Production-ready Optimized Build

```bash
npm run build
```

- The output of the build process is stored in the .next directory by default.

To start the server in production mode

```bash
npm run start
```

- serves the previously built and optimized version of your application.
- Next js runs the server on port 3000 by default

### Seeding database

The seed data is in `./src/scripts/data/seed.json`. To seed your database with this data, run

```bash
npm run seed
```

## Project Structure

The main directories and files of the project are as follows:

```plaintext
|-- public/         # Static assets (images, fonts, etc.)
|-- src/components/ # Reusable React components
|-- src/app/        # Next.js router directory
|-- src/app/api/    # API routes for server-side functionality
|-- src/lib/        # Utility functions, helpers, enhancers
|-- src/scripts     #  Scripts for automating repetitive tasks
|-- .env.template   # environment variables to be populated in .env
|-- next.config.js  # Next.js configuration file
|-- tsconfig.json   # TypeScript configuration file
|-- package.json    # Project metadata and scripts
```

## Functionalities

- **Audio Spectrum analysis & Transcription**

- **Audio Fingerprinting**: Upload an audio file to generate its unique fingerprint. The fingerprint will be stored in the MongoDB database.

- **Audio Watermarking**: embed a subtle message or data within an audio signal for identification or communication purposes.

- **Broadcast Logging**: Monitor a broadcast stream and generate logs based on their audio fingerprints or embedded watermark.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction:

**Do As You Wish.**

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
