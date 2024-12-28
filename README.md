# Node JS, Express, EJS App demonstrating authentication

## Packages used:
- Node JS
- Express JS
- ejs
- bcrypt
- cookie parser
- jsonwebtoken for jwt
- validator
- mongoose

- Made a full fledged authentication app, where we can signup, login, and logout.
- On signup, a new user will be persisted in mongo db store, and frontend will receive a jwt token in cookie, using pre middleware hooks we also hashed passwords using bcrypt library.
- On login, we also get a jwt token, so we can access protected routes
- seamless error handling is also done using a handleErrors function.