require("dotenv").config()

const passport=require("passport")

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const User= require("../models/user.model")

passport.use(new GoogleStrategy({

    clientID: process.env.GOOGLE_CLIENT_ID,

    clientSecret:process.env.GOOGLE_CLIENT_SECRET,

    callbackURL: "http://localhost:2345/auth/google/callback",
    userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",

    passReqToCallback   : true
  },

  function(request, accessToken, refreshToken, profile, done) {
console.log("accessToken, refreshToken, profile")
    

      return done(null, user);
   
  }
));

module.exports=passport
