const mongoose = require("mongoose");

const DB = 'mongodb+srv://tanishq:agarwal@cluster0.jjljg1w.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => console.log("connection successfull..."))
.catch((err) => console.log(err));

// mongoose.connect("mongodb://localhost:27017/productRegistration", {useNewUrlParser: true, useUnifiedTopology: true})
// .then( () => console.log("connection successfull..."))
// .catch((err) => console.log(err));