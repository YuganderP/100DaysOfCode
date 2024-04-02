const fs = require("fs")
function sample (){

    return new Promise((resolve,reject)=>{
        fs.readdir("./",(err,files)=>{
            resolve(files)
        })
    })
}




function prints(data){
    console.log(data)
}


// sample().then(prints)
//  async await practice 
let onDone=()=>{console.log("timeout complete")}

async function printss(data){
    await sample().then(prints)
        console.log("File reading has been completed")
 setTimeout(onDone,2000)
    console.log("the last line in the async function")
    }

printss()