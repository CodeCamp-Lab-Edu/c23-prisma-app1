export function errorHandler(err, req, res, next) {
    console.log("EROR HANDLER:", err)

    res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
}