# 📚 Bookstore App

A **full-stack Bookstore web application** built with the MERN stack. This project allows users to browse books, apply filters (rating, price range, stock availability), search for titles, and view details.

---

## 🚀 Features

### 🔹 Frontend

* Built with **React + Vite**
* Responsive UI using **Tailwind CSS**
* Book listing with grid layout
* **Search functionality**
* **Filters**:

  * Rating filter (stars)
  * Stock filter (In Stock / Out of Stock)
  * Price range filter (min & max)
* Pagination support
* Book detail card with title, author, price, rating, and stock status
* View Details button for each book

### 🔹 Backend

* Built with **Node.js + Express**
* Database: **MongoDB** with Mongoose ODM
* REST API endpoints:

  * `GET /books` → Fetch books with pagination & filters
  * Query params supported:

    * `q` → Search by title
    * `rating` → Filter by rating
    * `inStock` → Filter by availability
    * `minPrice` & `maxPrice` → Filter by price range
* Returns paginated results with total count

### 🔹 Additional

* Axios for API integration
* Modular and reusable React components
* ESLint & Prettier configured

---

## 🛠️ Tech Stack

**Frontend:**

* React (Vite)
* Tailwind CSS
* React Icons
* Axios

**Backend:**

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## 📂 Project Structure

```
bookstore-app/
├── Backend/
│   ├── models/Book.js
│   ├── routes/bookRoutes.js
│   ├── server.js
│   └── config/db.js
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookCard.jsx
│   │   │   ├── Filters.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Pagination.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── BookDetails.jsx
│   │   └── api.js
│   ├── index.html
│   └── package.json
├── Scraper/index.js
└── README.md
```

---


## ⚙️ ScreenShot Preview
<img width="2475" height="1257" alt="Screenshot 2025-09-06 104520" src="https://github.com/user-attachments/assets/53d7a0fb-7a1b-486d-b5e5-b9a9fab9be4a" />
<img width="2475" height="1076" alt="Screenshot 2025-09-06 104547" src="https://github.com/user-attachments/assets/d4a1b1d9-dcfc-47d9-ba8c-70019684c30a" />
<img width="2415" height="1082" alt="Screenshot 2025-09-06 104647" src="https://github.com/user-attachments/assets/b395983e-abf4-4e19-b44f-f51687c35745" />
<img width="2411" height="1065" alt="Screenshot 2025-09-06 104702" src="https://github.com/user-attachments/assets/02ee2628-5e3e-400a-8e7d-fc271ec40bc3" />
<img width="2429" height="1107" alt="Screenshot 2025-09-06 104720" src="https://github.com/user-attachments/assets/8d2b2a6c-b2e5-4e26-bab8-062b0b533dc0" />
<img width="2425" height="1001" alt="Screenshot 2025-09-06 104733" src="https://github.com/user-attachments/assets/a3863a56-f7c2-4d60-8ae0-5e7acdd2acd2" />




## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/bookstore-app.git
cd bookstore-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install

# Setup .env
MONGO_URI=your_mongodb_connection_string
PORT=5000

# Start server
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install

# Setup API URL
# In src/api.js
export const API_URL = "http://localhost:5000/api";

# Start frontend
npm run dev
```

---

## 📌 Usage

* Open the app in the browser at `http://localhost:5173`
* Use the **search bar** to find books
* Apply **filters** (rating, price, stock)
* Navigate between pages using pagination
* Click **View Details** to explore book info

---

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed by **Girish Kumar**

---
