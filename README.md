Green Fabric – T-Shirt Ecommerce Web App (Next.js)

**Live Site:** https://green-fabric.vercel.app/

📝 Overview

Green Fabric is a modern T-Shirt selling web application built with Next.js (App Router), Firebase Authentication, Express.js + MongoDB backend, and DaisyUI for UI components.
The project includes both public pages and protected routes, allowing logged-in users to add and manage products.

🚀 Short Project Description

Green Fabric is a lightweight eCommerce-style web application focused on showcasing and selling premium T-shirts.
It includes:

Fully responsive landing page

Product listing with search & filters

Product details page

Firebase authentication (Google + Email/Password)

Protected pages for adding and managing products

File uploads (image upload to ImgBB)

Modern UI built with Tailwind + DaisyUI

| Category      | Technology                    |
| ------------- | ----------------------------- |
| Framework     | **Next.js 16 (App Router)**   |
| Auth          | **Firebase Authentication**   |
| Styles        | **TailwindCSS 4 + DaisyUI 5** |
| Forms         | **React Hook Form**           |
| Data Fetching | **TanStack React Query**      |
| Network       | **Axios**                     |
| Toasts        | **react-hot-toast**           |
| Animations    | **motion**, **lottie-react**  |
| UI            | **Swiper**, **lucide-react**  |

📦 Dependencies

"dependencies": {
"@tanstack/react-query": "^5.90.10",
"axios": "^1.13.2",
"daisyui": "^5.5.5",
"firebase": "^12.6.0",
"lottie-react": "^2.4.1",
"lucide-react": "^0.554.0",
"motion": "^12.23.24",
"next": "16.0.3",
"react": "19.2.0",
"react-dom": "19.2.0",
"react-hook-form": "^7.66.1",
"react-hot-toast": "^2.6.0",
"react-icons": "^5.5.0",
"swiper": "^12.0.3"
},

"devDependencies": {
"@tailwindcss/postcss": "^4.1.17",
"babel-plugin-react-compiler": "1.0.0",
"eslint": "^9",
"eslint-config-next": "16.0.3",
"tailwindcss": "^4.1.17"
}

🧭 Route Summary

Public Routes
| Route | Description |
| ---------------- | --------------------------------------------------------------------------- |
| `/` | Landing page (Hero + featured products + our services + reviews + faq) |
| `/login` | Login page (Firebase email + Google) |
| `/register` | User registration page |
| `/products` | All products page with search + filters |

| `/about` | About page (our mission, our story, awards, future commtment) |
| `/contact` | Contact page (Our infortaion, message form, Besuiness hour, social accoutn) |

🔐 Protected Routes

(Only accessible when user is logged in)

| Route             | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `/products/[id]`  | Product details page                                                      |
| `/addProduct`     | Add new product (React Hook Form + image upload + preview + imgbb upload) |
| `/manageProducts` | Manage all products (table view, delete, view)                            |

📥 Setup & Installation Instructions

1️⃣ Clone the Repository

git clone https://github.com/YOUR_USERNAME/green-fabric.git
cd green-fabric

2️⃣ Install Dependencies

npm install

3️⃣ Environment Variables

Create a .env.local file in the project root:

NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_key

NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxx

NEXT_PUBLIC_BACKEND_URL=http://localhost:5000

4️⃣ Run the Development Server

npm run dev
