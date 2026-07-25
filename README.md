# ⚡ Page Pulse

A full-stack website auditing tool that analyzes webpages and generates SEO and accessibility reports.

Built as part of the **Digital Heroes Software Development Training Task**.

---

## 🌐 Live Demo

### Frontend

> **Replace this with your Vercel URL**

```
https://page-pulse-abc123.vercel.app
```

### Backend API

```
https://page-pulse-backend-2dqe.onrender.com
```

### GitHub Repository

```
https://github.com/dmamtha9468-sudo/page-pulse
```

---

# ✨ Features

- 🌐 Audit any public website
- ⚡ HTTP Status Code
- ⏱ Response Time
- 📄 Page Title
- 📝 Meta Description
- 🔠 H1 Count
- 🖼 Images Missing Alt Text
- 📚 Approximate Word Count
- ❌ Handles invalid URLs
- ⏳ Handles request timeouts
- 🧪 Unit & Integration Tests
- 💻 Responsive React UI

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- Axios
- Cheerio

## Testing

- Jest
- Supertest

---

# 📁 Project Structure

```text
page-pulse
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── tests
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── screenshots
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/dmamtha9468-sudo/page-pulse.git
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

# 📡 API

## Endpoint

```
POST /api/audit
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
  "data": {
    "status": 200,
    "responseTime": 215,
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
  "error": "Invalid URL."
}
```

---

# 🧪 Running Tests

```bash
cd backend
npm test
```

Tests include:

- API endpoint tests
- HTML parsing tests
- Invalid URL tests
- Timeout handling
- Non-HTML response handling

---

# 🏗 Design Decisions

## 1. Separation of Concerns

The backend is organized into controllers, services, routes, and utilities. This keeps request handling separate from business logic and improves maintainability.

---

## 2. Axios + Cheerio

Axios provides reliable HTTP requests with timeout support, while Cheerio enables fast server-side HTML parsing without requiring a browser.

---

## 3. Component-Based React

The frontend is divided into reusable components such as Header, Footer, UrlForm, Loader, and ReportCard for better readability and scalability.

---

# 🔮 Future Improvements

- SEO Score
- Lighthouse Integration
- Export Reports as PDF
- Multiple URL Audits
- Authentication
- Audit History
- Performance Graphs

---

# 📸 Screenshots

## Home Page

_Add <img width="1578" height="510" alt="image" src="https://github.com/user-attachments/assets/f1fe9f86-0c85-4231-a8fd-6a5555456475" />
screenshots/home.png_

## Audit Result

_Add <img width="1488" height="875" alt="image" src="https://github.com/user-attachments/assets/2c50e11f-a6c9-4f2e-8e48-24dd78feda6b" />
screenshots/result.png_

---

# 👩‍💻 Author

**Mamtha D**

GitHub:

https://github.com/dmamtha9468-sudo

---

## Built for Digital Heroes Training Task

This project was developed as part of the **Digital Heroes Software Development Internship Qualification Assessment**.
