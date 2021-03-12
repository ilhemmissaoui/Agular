const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = (req,res,next) => {
    var newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.username = req.body.username;
    newUser.firstname = req.body.firstname;
    newUser.lastname = req.body.lastname;
    newUser.save((err,doc)=> {
        if(!err) {
          res.send(true);
        }
        else {
          console.log(' An error has occured in registering' + JSON.stringify(err, undefined,2 ));
          res.send(false);
        }
    });
};

module.exports.authenticate = (req,res,next) => {
    User.findOne({email: req.body.email}, (err, user) => {
      if (!user) {
        return res.json(null);
      } else {
          if (user.password === req.body.password.toString()) {
            res.status(200).json(user);
          } else {
            return res.json(null);
          }
      }
    });
}

module.exports.userProfile = (req,res,next) => {
    User.findOne({_id: req.params.id}, (err,user)=> {
        if (!user)
            return res.status(404).json({status:false, message: 'User record not found.'});
        else
            return res.status(200).json({ status: true, user: user});
    });

}



