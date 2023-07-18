import dotenv from 'dotenv';
import express from "express";
import connectDB from './config/connectDB.js'
import errorHandler from './middlewares/errorHandler.js'
import cors from "cors"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import AuthRoutes from './routes/AuthRoutes.js'
import ProductRoutes from './routes/ProductRoutes.js'


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

app.use(cors({
    origin: ['https://shopify-commerce.netlify.app', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    credentials: true,
    exposedHeaders: ['set-cookie'],
}));


app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send("Welcome to QUIKSPARES API");
})

app.use('/api/auth', AuthRoutes);

app.use('/api/product', ProductRoutes);

app.get('*', (req, res) => {
    res.send("404 Error, Page not Found");
})



app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Listening on Port http://localhost:${PORT}`);
});