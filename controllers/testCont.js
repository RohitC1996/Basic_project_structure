
const userlist = function(req, res){
   
    let data = {
        list : "hello"
    }

    res.status(200).json({
        statusText : "success", data
    })
}

module.exports ={
    
    userlist
}
