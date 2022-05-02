const SecteurIntervention = require('../models/SecteurIntervention');


exports.create= async (req, res) =>{
    const { libelle, description } = req.body;

    try{

        const secteurInterventionExist = await SecteurIntervention.findOne({libelle})
        console.log(secteurInterventionExist)
        if (secteurInterventionExist) {
            return res.status(400).json({
                errorMessage: `Le secteur ${libelle} existe déjà`
            })
        }

        let newSecteurIntervention = new SecteurIntervention();
        newSecteurIntervention.libelle = libelle;
        newSecteurIntervention.description = description;

        await newSecteurIntervention.save();
        res.status(200).json({
            successMessage: `${newSecteurIntervention.libelle} was created!`
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
        const secteurInterventions = await SecteurIntervention.find({})

        res.status(200).json({
            secteurInterventions
        })
    } catch (err){
        console.log('identifications read error: ', err);
        res.status(500).json({
            errorMessage: 'Please try again later'
        })
    }
} 