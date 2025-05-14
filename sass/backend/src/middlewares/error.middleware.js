async function errorMiddleware(err, req,res,next){
     const statusCode  = err.statusCode || 500;
     const message = err.message || "Something went wrong"


    res.status(statusCode).json({
        message:message,
        statusCode:statusCode,
        data:err.data
    })



}


export default errorMiddleware

// {message:"dsdsa" , statuscode:202  , data :"dad"} 