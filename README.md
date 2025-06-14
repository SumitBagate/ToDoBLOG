# 📝 Blogify – A Full-Stack Blogging Platform

Blogify is a modern, responsive blogging platform built with **React**, **TailwindCSS**, and **Firebase Authentication** on the frontend, with a **Node.js + Express + MongoDB** backend that supports file storage (GridFS), secure downloads with a credit-based system, and full user authentication. It allows users to publish, edit, and manage blog posts with rich-text editing support.

---

## 🚀 Features

### ✅ Frontend (React + Vite)
- Built with **React 18** and **Vite 6** for lightning-fast performance.
- Uses **TailwindCSS** for modern, utility-first styling.
- **React Router v7** for smooth and dynamic routing.
- Rich-text editor using **Jodit-React**.
- **Firebase Auth** for secure login/signup.
- Toast notifications with **React-Toastify**.
- **Deployed to GitHub Pages** using `gh-pages`.

### ✅ Backend (Node.js + Express + MongoDB)
- RESTful API built using **Express.js**.
- User authentication and authorization.
- Blog content stored in **MongoDB** (with Mongoose).
- File handling (upload/download/preview) using **Multer** and **GridFS**.
- Secure download mechanism with a **credit-based system** (deducts credits on download).
- Supports file previews for images, PDFs, audio, and video.

---

## 📦 Tech Stack

### 🧩 Frontend

| Tech               | Description                                |
|--------------------|--------------------------------------------|
| `react`            | Frontend UI                                |
| `react-router-dom` | Page routing                               |
| `tailwindcss`      | CSS framework                              |
| `jodit-react`      | Rich text editor for writing blog posts    |
| `firebase`         | Authentication (Signup, Login, Logout)     |
| `react-toastify`   | Notifications                              |
| `vite`             | Fast development and build tool            |

### 🧱 Backend

| Tech               | Description                                 |
|--------------------|---------------------------------------------|
| `express`          | Backend routing framework                   |
| `mongodb`          | NoSQL database                              |
| `mongoose`         | MongoDB object modeling                     |
| `firebase-admin`   | Firebase token verification (optional)      |
| `multer` + `GridFS`| File uploads and streaming previews         |

---

## 🌐 Live Demo

[🔗 View the Live Project](https://to-do-blog-my2c2j1p6-sumit-s-projects-e4664ced.vercel.app)

---

## 🔧 Installation

### Frontend Setup

```bash
git clone [https://github.com/SumitBagate/ToDoBLOG.git](https://github.com/SumitBagate/ToDoBLOG.git)
cd ToDoBLOG
npm install
npm run dev
