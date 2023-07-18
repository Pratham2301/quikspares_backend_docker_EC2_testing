import express from "express";

const createUser = (req, res) =>{
    res.json({
        status: true,
        message: "create user controller...."
    })
}

export default createUser;