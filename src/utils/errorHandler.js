const BaseError = require("../errors/baseError");
const {StatusCodes} =require('http-status-codes')
function errorHandler(err,req,res,next){

    if(err instanceof BaseError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message,
            error:err.details,
            data:{} // because this is an execption so no data is going to be provided 
        })
    }
    return  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success:false,
        message:"something  went wrong ",
        error:err,
        data:{} // because this is an execption so no data is going to be provided 
    })
}
module.exports=errorHandler;