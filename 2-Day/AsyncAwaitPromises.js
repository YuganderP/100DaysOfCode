 console.log("the program has started working")

 setTimeout(()=>{
    console.log("4 seconds have passed")
 },4000)
 let s=0;
 for(let i=0;i<12432;i++){
    s+=2
 }
 console.log(s)
 console.log("the program has ended")

 const fs= require("fs")
 fs.readdir("./",(err,files)=>{
    console.log(files)
 })


//  Promises

function sampleFunction(){
    let dir = "./"
   return new Promise(function (resolve){
     fs.readdir("./",(err,files)=>{
      resolve(files)  
    })
   })
}


function getFiles(data){
console.log(data)
}

async function hello(){
    await sampleFunction().then(getFiles)
    console.log("the rest of the code in async function executed")
}

hello()
console.log("this is the last line in the code ")
