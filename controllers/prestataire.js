const Prestataire = require('../models/Prestataire');


exports.create= async (req, res) =>{
    
	// const { document } = req.file;
    const { 
        document,
        designation,
        type_prestataire,
        telephone,
        date_creation,
        email,
        gerant,
        rccm,
        id_nat,
        adresse,
        secteur_intervention,
    } = req.body;

    try{

        const prestataireExist = await Prestataire.findOne({designation})
        console.log(prestataireExist)
        if (prestataireExist) {
            return res.status(400).json({
                errorMessage: `Le prestataire ${designation} existe déjà`
            })
        }

        let newPrestataire = new Prestataire();
        newPrestataire.document = document;
        newPrestataire.designation = designation;
        newPrestataire.type_prestataire = type_prestataire;
        newPrestataire.telephone = telephone;
        newPrestataire.date_creation = date_creation;
        newPrestataire.email = email;
        newPrestataire.gerant = gerant;
        newPrestataire.rccm = rccm;
        newPrestataire.id_nat = id_nat;
        newPrestataire.adresse = adresse;
        newPrestataire.secteur_intervention = secteur_intervention;

        await newPrestataire.save();
        res.status(200).json({
            successMessage: `${newPrestataire.designation} was created!`
        })
    } catch (err){
        console.log('category create error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
} 


exports.readAll= async (req, res) =>{

    try{
        const prestataires = await Prestataire.find({}).populate(
            'type_prestataire'
        ).populate(
            'secteur_intervention'
        )

        res.status(200).json({
            prestataires
        })
    } catch (err){
        console.log('prestataires read error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
} 