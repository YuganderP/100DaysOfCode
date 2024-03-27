console.log("hello world ")


class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    details(){
        console.log(this.name,this.age)

    }
static sample(){
    console.log("this is a static function")
    console.log("This object is not associated with any object ")
}
}


let dog= new Animal("tommy",12) // create  object 
dog.details()

Animal.sample()

const data = new Date()
console.log(data)
// console.log(data.getTime()) // total time in milliseconds from 1970
let sum=0;
for(let i=0;i<12;i++){
sum++;
}

const datas = new Date()
console.log(datas)
// console.log(datas.getTime()) // total time in milliseconds from 1970
console.log((datas-data)/1000)


//  JSON  
 let dataaa = '{"name":"hello","age":"32"}'
console.log(JSON.parse(dataaa))  // to convert string to json 
 let sample = JSON.parse(dataaa)
 console.log(JSON.stringify(sample)) // to convert object to string 