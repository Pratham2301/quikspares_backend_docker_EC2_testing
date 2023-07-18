const errorHandler = (err, req, res, next) => {
    res.json({
        "title": "Error Dummy Title",
        "message": err.message,
        "stackTrace": err.stack,
    });
}

export default errorHandler;