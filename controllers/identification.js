const Identification = require('../models/Identification');


exports.create= async (req, res) =>{
    const { libelle, description } = req.body;

    try{

        const identificationExist = await Identification.findOne({libelle})
        console.log(identificationExist)
        if (identificationExist) {
            return res.status(400).json({
                errorMessage: `Le type ${libelle} existe déjà`
            })
        }

        let newIdentification = new Identification();
        newIdentification.libelle = libelle;
        newIdentification.description = description;

        await newIdentification.save();
        res.status(200).json({
            successMessage: `Le type ${newIdentification.libelle} was created!`
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
        const identifications = await Identification.find({})

        res.status(200).json({
            identifications
        })
    } catch (err){
        console.log('identifications read error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
} 