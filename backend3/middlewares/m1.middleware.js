function m1(req,res,next){
   console.log("first middleware hit ")
//    res.send("m1 hit ")
   next()
}


export default m1