# 📌 TaskVault — MERN Task Manager

A clean and modern **full-stack MERN application** with authentication, task CRUD operations, filters, search, and JWT-based user authorization.

Built using:

* **MongoDB**
* **Express.js**
* **React (Vite)**
* **Node.js**
* **Tailwind CSS**

---

## 🚀 Features

* User Signup & Login (JWT Authentication)
* Protected Routes
* Create / Read / Update / Delete Tasks
* Mark tasks as **Pending** / **Completed**
* Search tasks by title
* Filter tasks by status
* Update user profile (name & bio)
* Axios Interceptors for Auth
* Clean reusable components
* Proper MERN folder structure

---

## 📁 Project Structure

```
taskvault/
  ├── backend/
  │   ├── src/
  │   │   ├── server.js
  │   │   ├── config/db.js
  │   │   ├── models/
  │   │   ├── routes/
  │   │   └── middleware/
  │   ├── package.json
  │   └── .env.example
  ├── frontend/
  │   ├── src/
  │   │   ├── pages/
  │   │   ├── components/
  │   │   ├── context/
  │   │   ├── api/
  │   │   ├── App.jsx
  │   │   ├── main.jsx
  │   │   └── index.css
  │   ├── vite.config.js
  │   ├── tailwind.config.cjs
  │   ├── postcss.config.cjs
  │   └── package.json
  └── README.md
```

---

# ⚙️ Backend Setup

### 1️⃣ Install Dependencies

```sh
cd backend
npm install
```

### 2️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskvault
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
```

### 3️⃣ Start Server

```sh
npm run dev
```

Backend: `http://localhost:5000`

---

# 🎨 Frontend Setup

### 1️⃣ Install Dependencies

```sh
cd frontend
npm install
```

### 2️⃣ Create `.env`

```
VITE_API_BASE=http://localhost:5000/api
```

### 3️⃣ Start Vite App

```sh
npm run dev
```

Frontend: `http://localhost:5173`

---

# 🧪 Postman Collection

Import this file:

```
TaskVault.postman_collection.json
```

Set **token** in: Collection → Variables → token

---

# 🔐 Authentication Flow

* User logs in → JWT token generated
* Token stored in `localStorage`
* Axios Interceptor attaches token
* Backend validates token via middleware
* Protected routes require authentication

---

# 📝 API Endpoints Overview

## Auth

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | /api/auth/signup | Register user |
| POST   | /api/auth/login  | Login user    |

## User

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | /api/user/me     | Get current user |
| PUT    | /api/user/update | Update user      |

## Tasks

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create task   |
| PUT    | /api/tasks/:id | Update task   |
| DELETE | /api/tasks/:id | Delete task   |

Supports filters:

```
/api/tasks?q=keyword
/api/tasks?status=pending
/api/tasks?status=completed
```

---

# 🏗 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Bcrypt
* CORS

---

# 🛠 Production Build

### Build Frontend

```sh
cd frontend
npm run build
```

### Run Backend with PM2

```sh
npm install -g pm2
pm2 start src/server.js
```

Deployment:

* Frontend → Vercel / Netlify
* Backend → Render / Railway / EC2
* DB → MongoDB Atlas

---

# 👨‍💻 Author

**TaskVault** — Built by **Abhishek Pai**
For MERN internship/task submission.
