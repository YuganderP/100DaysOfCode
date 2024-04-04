const mongoose = require("mongoose")
const DB_URL="mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/google"

mongoose.connect(DB_URL).then((err,ss)=>{
    console.log(ss)
})

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


