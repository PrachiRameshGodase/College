const express = require("express");
//An instance of the Express application.
const app = express();
const sequelize = require("./utils/database");
const cors = require("cors");
//JSON Web Token library 
const jwt = require("jsonwebtoken");
const user=require('./models/user')

app.use(express.json());//Middleware to parse incoming JSON requests.
app.use(cors()); // It is a browser security feature to prevent unauthorized access
//JWT Authentication Middleware:
app.use((req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    const decodedToken = jwt.verify(token, "Your-secret-key");
    const userId = decodedToken.userId;

    user
      .findByPk(userId)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch((err) => {
        console.log(err);
        next();
      });
  } else {
    next();
  }
});


sequelize
  .sync()
  .then(() => {
    return user.findByPk(1);
  })
  .then((user) => {
    console.log(user);
    server.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });