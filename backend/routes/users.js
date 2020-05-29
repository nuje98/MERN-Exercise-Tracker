const router = require('express').Router();
let User = require('../models/user.model');

// locolhost:5000/users/
router.route('/').get((req, res) => { 
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// locolhost:5000/users/add
router.route('/add').post((req, res) => {
    // getting name of the user from the post request
    const username = req.body.username;

    //making the new user
    const newUser = new User({username});

    // saving user to database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;