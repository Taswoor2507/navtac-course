function m2(req,res,next){
    console.log("M2 hit");
    // res.send("m2 hit")
    next()
}


export default m2