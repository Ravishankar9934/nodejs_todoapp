class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode=statusCode;
    }
}

// super parent class ka constructor hain, mtlb message ka value Error class mein phuch jayega


export const errorMiddleware = (err,req,res,next)=>{

    // agar error ka msg exist krta hain toh o hoga or ye interna server hoga
    err.message = err.message || "Internal Server Error"
    err.statusCode = err.statusCode || 500;
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;