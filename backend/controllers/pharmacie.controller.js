const Pharmacie =  require('../models/pharmacie.model');

const pharCtrl = {};

pharCtrl.getPharamacie = async (req, res) => {
    const pharmacie = await Pharmacie.findById(req.params.id);
    res.json(pharmacie);
}

pharCtrl.getPharamaciesNight = async (req, res) => {
    const pharmacies = await Pharmacie.find( { "pharmCategory" : "Night", "type": "Pharmacie" } );
    res.json(pharmacies);
    
 }

 pharCtrl.getPharamaciesDay = async (req, res) => {
    const pharmacies = await Pharmacie.find( { "pharmCategory" : "Day", "type": "Pharmacie" } );
    res.json(pharmacies);
 }

 pharCtrl.getParaPharamacies = async (req, res) => {
    const pharmacies = await Pharmacie.find( {  "type": "Parapharmacie" } );
    res.json(pharmacies);
    
 }



pharCtrl.getPharamacies = async (req, res) => {
   const pharmacies = await Pharmacie.find();
   res.json(pharmacies);
  
}

pharCtrl.createPharmacie = async (req, res) => {
    const pharmacie =  new Pharmacie({
        noPh: req.body.noPh,
        pharmCategory: req.body.pharmCategory,
        pharmName: req.body.pharmName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        type: req.body.type,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        maps: req.body.maps,
        currentAdress: req.body.currentAdress
    
    });
    await pharmacie.save();
    res.json({
        'status': 'Pharmacie saved'
    });
}

pharCtrl.editPharmacie = async (req, res) => {
    const { id } = req.params;
    const pharmacie = {
        pharmCategory: req.body.pharmCategory,
        noPh: req.body.noPh,
        pharmName: req.body.pharmName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        type: req.body.type,
        mobileNo: req.body.mobileNo,
        email: req.body.email,
        maps: req.body.maps,
        currentAdress: req.body.currentAdress
    }; 

    await Pharmacie.findByIdAndUpdate(id, {$set: pharmacie}, {new: true});
    res.json({status: 'Pharmacie updated'});
}

pharCtrl.deletePharmacie = async (req, res) => {
    await Pharmacie.findByIdAndRemove(req.params.id);
    res.json({ status: 'Pharmacie deleted'});
}




module.exports = pharCtrl;