function getUser(req,res){
    res.send({age:21})
}


function registerUser(req,res){
    res.status(200).json({message:"user registered successfully"})
}


function deleteUser(req,res){
    res.status(200).json({message:"user deleted successfully"})
}


export {getUser, registerUser, deleteUser}