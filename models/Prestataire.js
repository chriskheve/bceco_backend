const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;


const PrestataireSchema = new mongoose.Schema(
	{
		document: {
			type: 'String',
			required: false,
		},
		designation: {
			type: 'String',
			required: true,
		},
		email: {
			type: 'String',
			trim: true,
		},
		telephone: {
			type: 'String',
			required: true,
		},
		gerant: {
			type: 'String',
			required: true,
		},
		rccm: {
			type: 'String',
			required: true,
		},
		id_nat: {
			type: 'String',
			required: true,
		},
		adresse: {
			type: 'String',
			required: true,
		},
		type_prestataire: {
			type: ObjectId,
			ref: 'Identification',
			required: true,
		},
		secteur_intervention: {
			type: ObjectId,
			ref: 'SecteurIntervention',
			required: true,
		},
		date_creation: {
			type: Date,
			required: true,
		},
	},
	{ timestamps: true }
);

// ProductSchema.index({ productName: 'text' });
const Prestataire = mongoose.model('Prestataire', PrestataireSchema);

module.exports = Prestataire;
