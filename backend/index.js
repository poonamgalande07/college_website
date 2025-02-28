const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./Config/db');



// Dotenv path 
dotenv.config({path:"../backend/Config/config.env"});

// Database Connection
connectDatabase();
const PORT = 7667 || process.env.PORT
 

app.listen(PORT, () =>{
    console.log(`Server : Woriking On http://localhost:${PORT}`)
})










// ---------------------------------------

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./routes/AuthRouter');


// require('dotenv').config();
// require('./Models/db');
// const PORT = process.env.PORT || 8080;

// app.get('/', (req, res) => {
//     res.send('hello world');
// });

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/auth', AuthRouter);



// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })