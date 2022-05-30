"use strict";

function notFound(req,res,next){
    res.json({
        code:404,
        massage:"Page not found"
    })
}

module.exports=notFound;