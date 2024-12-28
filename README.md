# Node.js Authentication App with Express and EJS

- This is a fully-fledged authentication application built using Node.js and Express.js. The app provides functionalities for user signup, login, and logout with secure password handling and JWT-based authentication.

## 🚀 Features

- **User Signup**  
  Users can create an account, and their data is securely stored in a MongoDB database. Passwords are hashed using the `bcrypt` library before storage.

- **User Login**  
  Authenticate users by verifying their credentials. On successful login, a JWT token is issued and stored in a secure cookie, allowing access to protected routes.

- **User Logout**  
  Clear the authentication token to log the user out.

- **JWT-Based Authentication**  
  Secure protected routes using `jsonwebtoken` to validate JWT tokens.

- **Error Handling**  
  Seamless error handling with a centralized `handleErrors` function for better user feedback.

## 🛠️ Technologies and Libraries Used

- **Backend:** Node.js, Express.js
- **Frontend:** EJS (Embedded JavaScript Templates)
- **Database:** MongoDB (via Mongoose)
- **Authentication & Security:** 
  - `bcrypt` for password hashing
  - `jsonwebtoken` for JWT-based authentication
  - `cookie-parser` for managing cookies
- **Validation:**
   - `validator` for input validation

## 📂 Directory Structure

```
JWT-AUTH/
├── controllers/
│   ├── authController.js      # Handles authentication logic
├── middleware/
│   ├── authMiddleware.js      # Middleware for route protection
├── models/
│   ├── User.js                # Mongoose schema for user data
├── node_modules/              # Node.js dependencies
├── public/
│   ├── smoothie.png           # Static image file
│   ├── styles.css             # CSS for styling
├── routes/
│   ├── authRoutes.js          # Routes for signup, login, and logout
├── views/
│   ├── partials/
│   │   ├── footer.ejs         # Footer partial template
│   │   ├── header.ejs         # Header partial template
│   ├── home.ejs               # Homepage template
│   ├── login.ejs              # Login page template
│   ├── signup.ejs             # Signup page template
│   ├── smoothies.ejs          # Protected smoothies page template
├── .env                       # Environment variables
├── .gitignore                 # Git ignore file
├── app.js                     # Main application file
├── db-connect.js              # MongoDB connection setup
├── express-app.js             # Express app configuration
├── package-lock.json          # Dependency lock file
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```


## 📋 Setup Instructions

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-repo/node-auth-app.git
    cd node-auth-app
    npm install
    ```

2. **Create a `.env` file**
   - In the root directory, create a `.env` file and add the following:
   
   ```
    MONGODB_URI=
     PORT=
	 ```

3. **Start the Application**
    ```bash
    npm start
    ```

