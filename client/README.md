# Library Book Management - Frontend

This repository contains the frontend code for the Library Book Management application built using React. 

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow these steps to get the frontend up and running locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/medheerajput/library-book-management-frontend.git
    cd library-book-management-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following environment variable:

    ```env
    REACT_APP_API_URL=http://localhost:5000/api
    ```

    Replace `http://localhost:5000/api` with the URL of your backend API if it’s running on a different port or URL.

4. **Start the development server:**

    ```bash
    npm start
    ```

    This will start the React development server and open the application in your default web browser at `http://localhost:3000`.

## Features

- **Pagination**: View books in paginated format.
- **Search**: Search books by title.
- **CRUD Operations**: Add, edit, and delete books.
- **Responsive Design**: Mobile-friendly UI using Material-UI.

## Project Structure

- `src/components/`: Contains reusable components.
- `src/pages/`: Contains the main pages of the application.
- `src/api/`: API calls to the backend.
- `src/validation/`: Form validation schemas using Yup.

## Additional Notes

- Make sure the backend API is running and accessible for the frontend to fetch data correctly.
- Use the React DevTools for debugging and inspection.
