# BUNGE-SCOPE website

Source code for BUNGE-SCOPE.

## Live link to webapp

- bunge-scope: [`bunge-scope.vercel.app`](https://bunge-scope.vercel.app/).

#### Public Pages

- Home: [`/`](https://bunge-scope.vercel.app/)
- Blog: [`/blog`](https://bunge-scope.vercel.app/blog)

#### Protected Segments

- User Home: [`/user`](https://bunge-scope.vercel.app/user)

#### Backend routes

- Authentication route segment: `/api/auth`

## Toolchain

- Next.js 14: bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- css: [`Tailwind`](https://tailwindcss.com/) v3.
- Hosting: [`Vercel`](https://vercel.com/).
- Mail: [`nodemailer`](https://nodemailer.com/).
- Authentication: [`Next.js Auth`](https://next-auth.js.org).
- HTML/css Components: [`shadcn/ui`](https://ui.shadcn.com/).

## Running App

Clone this repo in your local directory:

```bash
git clone https://github.com/goweki/bunge-scope.git
```

Create a `.env` file and populate the environment variables as templated in the `.env.template` file at root

```bash
NODE_ENV=
MONGODB_URL=
#track user number, max at this route:
USER_COUNT_CHECKPOINT=100
# africastalking
AFRICASTALKING_USERNAME=
AFRICASTALKING_KEY=
ADMIN_TEL=
# nodemailer
GMAIL_ACCOUNT_USER=
GMAIL_APP_KEY=
GMAIL_ACCOUNT_FROM=
GMAIL_ACCOUNT_TO=
NOTIFY_CHANNELS=
# ABOVE: 'email sms'||'sms' ||'email'
```

Navigate into the local repo and install dependencies:

```bash
npm i
```

To run the development server, within the cloned repo:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Seeding database

The seed data of Constituencies and Mps data reside in the respective .json files at `./src/data:` directory. To seed your database with this data, make a HTTP POST request to the api `/api/data`.

The body of the request should contain the body `{key:PASS}`; Ensure you have the `AUTH_SEEDING` environment variable in your .env file as this is the value that your `PASS` will be compared against. Note that `AUTH_SEEDING` env variable should be a brypt hash _(10 rounds)_ of `PASS`, for authentication at route `/api/data` to be successful; otherwise seeding will not happen.

```bash
node ./src/scripts/seed.js
```

### To build the production-ready optimized build.

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
