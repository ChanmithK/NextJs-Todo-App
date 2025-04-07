# 📝 To-Do Task Web App

A full stack task management application built as a take-home assessment using:

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Node.js (Express)
- **Database**: MySQL
- **Containerization**: Docker + docker-compose
- **Testing**: Jest (backend), React Testing Library (frontend)

---

## 🚀 Features

- View the **last 5** pending tasks
- Add a new task with title and description
- Mark tasks as completed
- Mobile-friendly UI with Tailwind CSS
- API integration between frontend and backend
- Unit and integration testing included

---

## 🧱 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | Next.js, Tailwind CSS          |
| Backend   | Node.js, Express               |
| Database  | MySQL                          |
| Testing   | Jest, Supertest, React Testing Library |
| DevOps    | Docker, Docker Compose         |

---

## 📁 Project Structure

```
todo-app/
├── frontend/            # Next.js frontend application
├── backend/             # Node.js API backend
├── db/                  # MySQL database schema and seed files
├── docker-compose.yml   # Docker Compose for multi-service orchestration
└── README.md            # Project documentation
```


---

## ⚙️ Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app


```

### 2. Run using Docker

```bash
docker-compose up --build
```

Frontend: http://localhost:3000

Backend API: http://localhost:4000/api/tasks

MySQL: Host: localhost, User: root, Password: password, Port: 3306


## 🗃️ Database

### db/init.sql

```bash
CREATE DATABASE IF NOT EXISTS todo_db;
USE todo_db;

CREATE TABLE IF NOT EXISTS task (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get last 5 uncompleted tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id/done` | Mark a task as completed |


## 🧪 Running Tests

### Backend (Node.js + Jest + Supertest)

```bash
cd backend
npm install
npm test
```

### Frontend (Next.js + React Testing Library)

```bash
cd frontend
npm install
npm test
```

## 🐳 Docker Setup

### docker-compose.yml

```yaml
version: '3.8'
services:
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: todo_db
    volumes:
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "3306:3306"
  
  backend:
    build: ./backend
    ports:
      - "4000:4000"
    depends_on:
      - db
  
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
```

### backend/Dockerfile

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
```

### frontend/Dockerfile

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 👤 Author
Praveen Kariyawasam  
Full Stack Engineer – [LinkedIn](https://www.linkedin.com/in/chanmithk)




