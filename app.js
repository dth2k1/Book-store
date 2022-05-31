const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
//use middleware built in
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}
//Security
// Set security HTTP headers
app.use(helmet());
//  rate Limit
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());
///use Router
app.use('/', require('./routers/viewRouter'));
app.use('/', require('./routers/adminRouter'));
app.use('/api/v1/orders', require('./routers/orderRouter'));
app.use('/api/v1/carts', require('./routers/cartRouter'));
app.use('/api/v1/reviews', require('./routers/reviewRouter'));
app.use('/api/v1/books', require('./routers/bookRouter'));
app.use('/api/v1/users', require('./routers/userRouter'));
module.exports = app;
