//pkg imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
//file imports
const routes = require('./routes');

//checks env
const { environment } = require('./config');
const isProduction = environment === 'production';

//init app
const app = express();

//middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );
// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
      }
    })
  );

  //connect all the routes
app.use(routes);



  module.exports = app;
