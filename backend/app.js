const express = require('express');
const app = express();
const cors = require('cors');

// Express & Cors 
app.use(express.json());
app.use(cors());


//Register
const Register_Route=require('./routes/Register_Routes');
app.use('/api/product',Register_Route);

//course_review
const review_Routes=require('./routes/Review_Routes');
app.use('/api/review',review_Routes)

//user_routes
// const Auth_Routes = require('./routes/AuthRouter');
// app.use('/api/auth',Auth_Routes);


// Auth Routing 

const Auth_Route = require('./routes/AuthRouter')
app.use('/api/auth', Auth_Route);


// Auth Routing 

const User_Route = require('./routes/userRouter')
app.use('/api/user', User_Route);



//Review

const Review_Route = require('./routes/Review_Routes');
app.use('/api/review',Review_Route)



//rating

const Rating_Route = require('./routes/Rating_Routes');
app.use('/api/rating',Rating_Route);








//product_Routes
// const product_Routes = require('./Routes/productRoutes')
// app.use('/api/course',product_Routes)

//product_review
// const review_Routes = require('./routes/ratingRoutes')
// app.use('/api/review',review_Routes)

module.exports = app;