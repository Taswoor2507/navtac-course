// server request 
// response  ==> user


async function  apiRequest(){
    const req= await fetch("https://randomuser.me/api/")
    const user= await req.json() 
    return user
}

export {apiRequest}