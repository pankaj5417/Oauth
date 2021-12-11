const express = require("express");
//const passport = require("passport");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");

 const passport=require("./configs/passport")
const app = express();

app.use(express.json());


// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login);

app.use("/products", productController);


app.get('/auth/google',
  passport.authenticate('google', { scope :[ 'email', 'profile' ] },

));

app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
}));

module.exports = app;
