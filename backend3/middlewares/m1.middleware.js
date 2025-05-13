function m1(req,res,next){

   req.mykey = "101"
   console.log("first middleware hit ")
//    res.send("m1 hit ")
   next()
}


export default m1



// req {}
//  req.mykey = "dsdfd"

// m1 ----> req.keys----> 


// {
//    .....
//    mykey:101
// }


// {
//    .....

// }