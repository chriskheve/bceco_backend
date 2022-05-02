const mongoose = require('mongoose');


const secteurInterventionSchema = new mongoose.Schema({
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

const SecteurIntervention = mongoose.model('SecteurIntervention', secteurInterventionSchema)

module.exports = SecteurIntervention