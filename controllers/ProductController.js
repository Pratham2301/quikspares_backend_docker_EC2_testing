import express from "express";

const createProduct = (req, res) =>{
    res.json({
        status: true,
        message: "product controller...."
    })
}

export default createProduct;