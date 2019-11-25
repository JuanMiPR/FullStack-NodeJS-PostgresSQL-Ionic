var GoogleStrategy = require('passport-google-oauth20').Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;
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
    if (user == null) {
      password = cryptr.encrypt(password);
      let newUser = await users.create({
        user_name,
        user_email,
        password,
        user_type,
        auth_token: token

      }, {
        fields: ['user_name', "user_email", "password", "user_type", "auth_token", "user_rol"]
      });
      profile.token = token;
      return cb(null, profile);
    } else {
      //el usuario ya existe en la base
     
      profile.token = token;
      
      user.update({
        auth_token: token
      });
      return cb(null, profile);
    }
  }
));

passport.use(new FacebookStrategy({
  clientID: "417265362515692",
  clientSecret: "dddbe1cdf4f64ebfb33d8f4adb449218",
  callbackURL: "http://localhost:40000/login/facebook/callback",
  profileFields: ['id', 'emails', 'name']
},
async function(accessToken, refreshToken, profile, done) {
  
  let user_email = profile.emails[0].value;
  let user_name = profile.name.givenName;
  let password = profile.id;
  let user_type = "facebook"
  const user = await users.findOne({
    where: {
      user_email: profile.emails[0].value
    }
  });
  const token = jwt.sign({
    user_email: user_email
  }, process.env.TOKEN_SECRET);
  if (user == null) {
    password = cryptr.encrypt(password);
    let newUser = await users.create({
      user_name,
      user_email,
      password,
      user_type,
      auth_token: token

    }, {
      fields: ['user_name', "user_email", "password", "user_type", "auth_token", "user_rol"]
    });
    
    profile.token = token;
    done(null,profile);
  } else {
   
    user.update({
      auth_token: token
    });
    profile.token = token;
    done(null,profile);
  }
 

 
}
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});