

// query
// mondo query object 

// queryString
// re.query
// ?search=alex
// {search:"alex"}




class ApiFeatures {
    constructor(query , queryString){
        this.query = query
        this.queryString = queryString
    }

    // features
   //search
   search(fields = []){
    // regex
    // serach  
     if(this.queryString.search){
        const regex = new RegExp(this.queryString.search , "i")   //"/john/"
        const searchFields =  fields.map((field)=>{
                    return  {
                        [field] : regex       // [{email:{$regex:"alex"}, fullName:{$regex:"alex"}}]
                    }
        })
        console.log(searchFields , "ssssssssssssss")
        // [{email:{$regex:"alex"}} , {fullName:{$regex:"alex"}}]
        this.query = this.query.find({
            $or:searchFields
        })
    }    
    return this 
   }
}



export default ApiFeatures