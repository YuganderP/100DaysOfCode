const users = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

let un="raman@gmail.com"
let pwd="123321"

let app=users.map((a)=>{
    if(a.username==un &&  a.password==pwd){
        
        return a;
    }else{

    }
})

app=users.filter((a)=>(a.username==un && a.password == pwd)
)
console.log(app)