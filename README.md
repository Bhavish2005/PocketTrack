<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->

# 💰 PocketTrack — Intelligent Financial Command Center

Transforming personal finance from a daily chore into a strategic advantage.

PocketTrack is an **AI-Powered Financial Management Platform** designed to automate your expense tracking, predict overspending, and provide real-time financial insights — all while keeping your data secure with enterprise-grade protection.

---

## 🌟 Why PocketTrack?

Modern users expect automation, intelligence, and speed.  
PocketTrack delivers **high-value, real-world solutions** to help users take control of their financial journey.

### 💎 Core Benefits

- **Zero-Friction Tracking** – Snap a photo of any receipt and let AI structure the data instantly.  
- **Financial Safety Net** – Get proactive alerts *before* you overspend.  
- **Data-Driven Growth** – Identify spending leaks and maximize savings.  
- **Enterprise-Grade Security** – Built-in bot detection, rate-limiting, and secure APIs.

---

## 🚀 Unique Selling Propositions (USPs)

- 🧠 **Generative AI Receipt Parsing** — Uses Google Gemini to convert unstructured receipt data into clean records.  
- ⚡ **Event-Driven Automation** — Inngest handles recurring jobs and reports without slowing the app.  
- 🛡️ **ArcJet Security Layer** — Blocks malicious traffic, ensures safe API operations.  
- 📧 **Smart Notifications** — Budget alerts & financial summaries delivered using Resend.

---

## 🛠️ Tech Stack Overview

| Category              | Technology Used                                  |
|----------------------|---------------------------------------------------|
| **Framework**        | Next.js 15 (App Router)                           |
| **Language**         | JavaScript / React                                |
| **Database**         | PostgreSQL (via Prisma ORM)                       |
| **Styling**          | Tailwind CSS + Shadcn UI                          |
| **Authentication**   | Clerk                                              |
| **AI Engine**        | Google Gemini 1.5 Flash                           |
| **Background Jobs**  | Inngest                                            |
| **Security Layer**   | ArcJet                                             |
| **Email Service**    | Resend + React Email                               |
| **Deployment**       | Vercel, Inngest Cloud (optional)                  |

---

## 📸 Screenshots (Preview)

> Add your app screenshots below for a more polished GitHub page.

### 🖥️ Dashboard Preview
![Dashboard Screenshot](./screenshots/dashboard.png)

### 🧾 AI Receipt Scanner
![Receipt Scanner Screenshot](./screenshots/receipt.png)

### 📊 Reports & Budgeting
![Reports Screenshot](./screenshots/reports.png)

---

## 💻 Getting Started (Local Setup Guide)

Follow these steps to run PocketTrack locally.

### 1️⃣ Prerequisites

Make sure you have:

- Node.js **v18+**
- npm or yarn
- PostgreSQL database (Local / Neon / Supabase Recommended)

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/pockettrack.git
cd pockettrack
```

---

### 3️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

---

### 4️⃣ Configure Environment Variables

Create a `.env` file:

```env
# Database Connection (Prisma)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# AI Integration (Google Gemini)
GEMINI_API_KEY=...

# Email Service (Resend)
RESEND_API_KEY=re_...

# Security (ArcJet)
ARCJET_KEY=aj_...

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

### 5️⃣ Setup the Database

```bash
npx prisma generate
npx prisma db push
```

(Optional) Run seed script if available.

---

### 6️⃣ Start the Application

```bash
npm run dev
```

App will be live at:

👉 **http://localhost:3000**

---

### 7️⃣ Start Inngest Dev Server (Background Jobs)

```bash
npx inngest-cli@latest dev
```

Access dashboard:

👉 **http://localhost:8288**

---

## 🤝 Contributing

Contributions are welcome!  
Please open issues, submit pull requests, or propose new features.

---

## ⭐ Support

If you like this project, don't forget to ⭐ **star the repository**!

