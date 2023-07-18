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
const HOST = process.env.HOST || 'localhost';


connectDB();

app.use(cors({
    origin: ['http://localhost:3000'],
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

app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/product', ProductRoutes);

app.get('*', (req, res) => {
    res.send("404 Error, Page not Found");
})



app.use(errorHandler);


app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});