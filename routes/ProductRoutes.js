import express from "express";
const Router = express.Router();

Router.get('/', (req, res) =>{
    res.json({
        status: true,
        message: "product route...."
    })
})

export default Router;