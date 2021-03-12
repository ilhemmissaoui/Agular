const mongoose = require('mongoose');

mongoose.connect(process.env.URI, (err) => {
    if(!err) { console.log('Connection Succeeded ...'); }
    else { console.log('An error occured : ' + JSON.stringify(err, undefined,2 ) + '\n Connection failed ...'); }
});

require('./user/user.model');
