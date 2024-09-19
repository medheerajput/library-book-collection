# Library Book Management - Backend

This repository contains the backend code for the Library Book Management application built using Node.js, Express, and MongoDB.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (or a MongoDB Atlas account)

## Getting Started

Follow these steps to get the backend up and running locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/medheerajput/library-book-management-backend.git
    cd library-book-management-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/library
    ```

    Replace `mongodb://localhost:27017/library` with your MongoDB connection string if you’re using a remote database.

4. **Start the server:**

    ```bash
    npm start
    ```

    This will start the Node.js server on port 5000 by default. You can access the API at `http://localhost:5000/api`.

## API Endpoints

- `GET /api/books`: Retrieve all books.
- `POST /api/books`: Add a new book.
- `GET /api/books/:id`: Retrieve a single book by ID.
- `PUT /api/books/:id`: Update a book by ID.
- `DELETE /api/books/:id`: Delete a book by ID.

## Features

- **CRUD Operations**: Create, read, update, and delete books.
- **Pagination**: Return paginated results for book listings.
- **Search**: Filter books by title.

## Project Structure

- `routes/`: Contains the API route handlers.
- `models/`: Contains Mongoose models.
- `controllers/`: Contains business logic.
- `config/`: Contains configuration files.

## Additional Notes

- Ensure MongoDB is running and accessible.
- Use Postman or a similar tool for testing the API endpoints.
