
function checkName(req,res,next){
    if(req.query.name){
        let re = /^[A-Za-z]+$/;
    if(re.test(req.query.name))
    next();
    else
    next(`invalid input for name it should be string`)
    }else{
        next("name not provided")
    }
  }


  module.exports=checkName;