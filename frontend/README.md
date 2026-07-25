# ⚡ Page Pulse

A lightweight website audit tool that analyzes any webpage and returns essential SEO and accessibility metrics.

Built using **React**, **Node.js**, **Express**, **Axios**, and **Cheerio**.

---

## 📌 Features

- ✅ Audit any public website URL
- ✅ HTTP Status Code
- ✅ Response Time
- ✅ Page Title
- ✅ Meta Description
- ✅ H1 Count
- ✅ Images Missing Alt Text
- ✅ Approximate Word Count
- ✅ Clean React Dashboard
- ✅ Error Handling for invalid URLs, timeouts, and non-HTML pages
- ✅ Unit & Integration Tests

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

### Testing
- Jest
- Supertest

---

# 📂 Project Structure

```
page-pulse/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── tests/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone the repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

Runs on:

```
http://localhost:5000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 📡 API Contract

## POST

```
/api/audit
```

### Request

```json
{
  "url": "https://example.com"
}
```

---

### Success Response

```json
{
  "success": true,
  "message": "Audit completed successfully.",
  "data": {
    "status": 200,
    "responseTime": 220,
    "title": "Example Domain",
    "metaDescription": "",
    "h1Count": 1,
    "imagesMissingAlt": 0,
    "wordCount": 17
  }
}
```

---

### Error Response

```json
{
  "success": false,
  "error": "Please enter a valid HTTP or HTTPS URL."
}
```

---

# 🧪 Running Tests

```bash
cd backend
npm test
```

The project includes:

- Integration tests for API endpoints
- Unit tests for HTML parsing logic

---

# 🏗 Design Decisions

## 1. Separation of Concerns

The backend separates controllers, services, routes, and utilities. This keeps request handling independent from business logic, making the project easier to maintain and test.

---

## 2. Axios + Cheerio

Axios was chosen for reliable HTTP requests with timeout and redirect support. Cheerio provides fast and lightweight HTML parsing without requiring a headless browser.

---

## 3. Component-Based React

The frontend is split into reusable components such as Header, Footer, Loader, UrlForm, and ReportCard. This improves readability and makes future UI enhancements easier.

---

# 🔮 Future Improvements

- Lighthouse-style SEO score
- Multiple URL audits
- Export reports as PDF
- Authentication
- History of previous audits
- Performance charts

---

# 👩‍💻 Author

**Mamtha D**

Built for **Digital Heroes Training Task**.