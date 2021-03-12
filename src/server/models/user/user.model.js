const mongoose = require('mongoose');


var userShema = mongoose.Schema({
    email: { type: String,required:true ,unique: true },
    password: { type: String, required:true },
    username: { type: String, required:true },
    firstname: { type: String, required: true},
    lastname: { type: String, required: true}
});

mongoose.model('User',userShema);
