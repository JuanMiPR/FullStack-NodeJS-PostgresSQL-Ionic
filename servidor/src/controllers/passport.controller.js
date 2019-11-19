var GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require("jsonwebtoken");
const passport = require("passport");
import users from "../models/users";
let cryptr = require("cryptr");
cryptr = new cryptr("devnami");
passport.use(new GoogleStrategy({
  clientID: "992457619226-4pqseg2g0i22ntnhhju70sofp21ajppm.apps.googleusercontent.com",
  clientSecret: "7972JZWKyzCA9KUTOmTZs5bf",
  callbackURL: "http://localhost:40000/login/google/callback"
},
  async function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    let user_email = profile.emails[0].value;
    let user_name = profile.displayName;
    let password = profile.id;
    let user_type = "google"
    const user = await users.findOne({
      where: {
        user_email: profile.emails[0].value
      }
    });
    const token = jwt.sign({
      user_email: user_email
    }, process.env.TOKEN_SECRET);
    console.log(user);



    if (user == null) {
      password = cryptr.encrypt(password);

      let newUser = await users.create({
        user_name,
        user_email,
        password,

        user_type,
        auth_token: token

      }, {
        fields: ['user_name', "user_email", "password","user_type", "auth_token", "user_rol"]
      });
      if (newUser) {
        console.log(newUser);

      }
      return cb(null, profile);
      //crear usuario en base de datos
    } else {
      //el usuario ya existe en la base
      user.update({
        auth_token: token
      });
      console.log("usuario existente")
      return cb(null, profile);
    }
    return cb(null, profile);


  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);


});

passport.deserializeUser(function (id, done) {

  done(null, id);

});