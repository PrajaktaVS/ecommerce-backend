
```markdown
# MERN Stack eCommerce Website - Backend

This is the **backend** of a MERN Stack eCommerce website. It handles user authentication (JWT), database communication (MongoDB), and exposes API endpoints for the frontend to interact with.

---

##  Features

-  User Registration with hashed password
-  JWT Token Authentication
-  User Login & Token Generation
-  Protected Routes with Middleware
-  Send User Data to Frontend
-  Validation with Zod
-  Error Handling Middleware

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Zod (for request validation)
- dotenv
- CORS

---

##  Folder Structure
backend/
│── models/
│── router/
│── middlewares/
│── utils/
│── controllers/
│── validators/
│── .env
│── index.js

##  Installation

### 1. Clone the repository

git clone https://github.com/PrajaktaVS/ecommerce-backend.git
cd ecommerce-backend

### 2. Install dependencies
npm install

### 3. Start the server
npm run server

```bash