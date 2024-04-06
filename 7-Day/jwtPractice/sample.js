let data = {a:1,b:2,c:3}


Object.keys(data).forEach((element)=>{
    data[element]+=1
})
console.log(data)