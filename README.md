# 📚 BookHub API 
Welcome to the BookHub API, a simple web service for managing book and user data!

This API provides endpoints for basic CRUD (Create, Read, Update, Delete) operations on books and users. It's built with Node.js, Express, and MongoDB, and is deployed on Render.

## 🚀 Access the Deployed API
You can access the live API at the following URL:

## [BookHub API Deployment URL](https://book-hub-x39l.onrender.com)

How to Use and Test the API:
Since this is a backend API, it doesn't have a graphical user interface directly accessible via the root URL. To interact with it, you'll need an API client like Postman, Insomnia, or your browser's developer tools.

Here are some example endpoints you can try:

## 📚 Book Endpoints:
- Get all Books:

   - GET Request to: https://book-hub-x39l.onrender.com/api/books

   - Expected Response: A JSON array of book objects.

- Create a new Book:

   - POST Request to: https://book-hub-x39l.onrender.com/api/books

   - Set Body to raw and JSON.

   - JSON Body Example:

    ```json
    {
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "year": 1979
    }
    ```

   - Expected Response: The created book object, including its ID.

## 👤 User Endpoints:
- Get all Users:

   - GET Request to: https://book-hub-x39l.onrender.com/api/users

   - Expected Response: A JSON array of user objects.

- Sign Up (Create a new User):

   - POST Request to: https://book-hub-x39l.onrender.com/auth/signup (assuming your signup route)

   - Set Body to raw and JSON.

   - JSON Body Example:
    ```json
    {
        "username": "newreader",
        "email": "newreader@example.com",
        "password": "securePassword123!"
    }
    ```

   - Expected Response: A success message, potentially with a JWT token.

**Note:** If your API requires authentication for certain routes (e.g., creating/updating/deleting books or users), you will need to first perform a POST request to your sign-in/login route to obtain a JSON Web Token (JWT), and then include this token in the Authorization header of subsequent requests (e.g., Authorization: Bearer YOUR_JWT_TOKEN_HERE).

Feel free to explore the API and its functionalities!