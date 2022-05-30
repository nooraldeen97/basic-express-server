
function methodAndPath(req,res,next){
    console.log('Method : ',req.method , '   Path : ',req.path);
    next();
}


module.exports=methodAndPath;