require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

const PORT = process.env.PORT || 5000;


connectDB();


app.use(express.json());

app.get('/', (req, res) => { res.send("Welcome to QUIKSPARES API");})
// app.use('/api/auth', require('./routes/AuthRoutes'));
// app.use('/api/product', require('./routes/ProductRoutes'));
app.get('*', (req, res) => { res.send("404 Error, Page not Found");})



// app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Listening on Port http://localhost:${PORT}`);
});