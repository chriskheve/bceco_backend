const User = require('../models/User');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret, jwtExpire} = require('../config/keys')



exports.signinController = async(req, res) => {
    const {email, password} = req.body;
    console.log(req.body)
    // try {
    //     const user = await User.findOne({email});
    //     if (!user) {
    //         return res.status(400).json({
    //             errorMessage: 'Invalid credentials'
    //         })
    //     }

    //     const isMatch = await bcrypt.compare(password, user.password)
    //     if (!isMatch) {
    //         return res.status(400).json({
    //             errorMessage: 'Invalid credentials'
    //         })
    //     }

    //     const payload = {
    //         user: {
    //             _id: user._id,
    //         }
    //     };

    //     jwt.sign(payload, jwtSecret, {expiresIn: jwtExpire}, (err, token)=>{
    //         if (err) console.log('jwt error: ', err)
    //         const {_id, username, email, role} = user;

    //         res.json({
    //             token,
    //             user: { _id, username, email, role}
    //         })
    //     })
    // } catch (err) {
    //     console.log('signin error: ', err)
    //     res.status(500).json({
    //         errorMessage: 'Server error',
    //     })
    // }
};