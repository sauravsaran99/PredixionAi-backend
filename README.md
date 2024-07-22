```markdown
# Task Management App Backend

## Overview

This is the backend part of a Task Management application, built using Node.js with Express and Sequelize. The backend provides a RESTful API for managing tasks.

## Features

- Retrieve all tasks
- Create a new task
- Update a task's status
- Delete a task

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of Node.js and npm.
- You have a MySQL database set up and running.

## Installation

1. Clone the repository:

```sh
git clone https://github.com/sauravsaran99/PredixionAi-backend.git
cd PredixionAi-backend
```

2. Install dependencies:

```sh
npm install
```

3. Create a `.env` file in the root directory and add your database configuration:

```plaintext
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port
```

4. Start the server:

```sh
npm start
```

## API Endpoints

- **GET /api/tasks**: Retrieve all tasks
- **POST /api/tasks**: Create a new task
  - Request body: `{ "title": "Task title", "description": "Task description", "status": "todo" }`
- **PUT /api/tasks/{task_id}**: Update a task's status
  - Request body: `{ "status": "in_progress" }`
- **DELETE /api/tasks/{task_id}**: Delete a task

## Project Structure

```plaintext
.
├── config
│   └── database.js
├── controllers
│   └── taskController.js
├── models
│   └── Task.js
├── routes
│   └── taskRoutes.js
├── .env
├── app.js
└── package.json
```

## Deployment

The backend is deployed on Render. You can access it using the following link:
[Backend Deployment](https://predixionai-backend.onrender.com/)

## Summary

This project was an excellent opportunity to apply and expand my skills in full-stack development. From setting up the backend with Express and Sequelize to creating a dynamic frontend with React, it provided a well-rounded experience in modern web development. The deployment process further enhanced my understanding of deploying and maintaining applications in a production environment.

## Additional Notes

- **Error Handling**: Integrated with custom error handling middleware.
- **CORS**: Configured to allow cross-origin requests from the frontend.

---