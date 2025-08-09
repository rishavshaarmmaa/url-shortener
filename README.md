# URL Shortener Project

A simple MERN stack URL shortener application that allows users to create short URLs from long URLs, redirect users to the original URLs, and provides an admin page to manage and track usage.

Project Link :- https://url-shortener-2-q0h6.onrender.com/

## Features

- **URL Shortening:** Enter a long URL and get a shortened URL.
- **Redirection:** Visit the shortened URL and get redirected to the original long URL.
- **Admin Dashboard:** View all shortened URLs along with their click counts.
- **Click Tracking:** Counts how many times each short URL was visited.

---

## Technology Stack

- **Frontend:** React, React Router, Axios
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Others:** shortid for generating unique short codes, dotenv for environment variables, cors for enabling CORS

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd url-shortner

Backend setup

cd backend
npm install

Create a .env file in the backend folder with the following variables:

MONGO_URI=<your_mongodb_connection_string>
BASE_URL=http://localhost:5000
PORT=5000

Start the backend server:

node server.js

Frontend setup
Open a new terminal, then:

cd frontend
npm install
npm start

This will start the React app on http://localhost:3000.


