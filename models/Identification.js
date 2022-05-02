const mongoose = require('mongoose');


const identificationSchema = new mongoose.Schema({
    libelle:{
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: 'String',
        trim: true,
    },
},{timestamps: true});

const Identification = mongoose.model('Identification', identificationSchema)

module.exports = Identification