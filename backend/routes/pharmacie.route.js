const express = require('express');
const router = express.Router();

const pharmacie = require('../controllers/pharmacie.controller');

router.get('/', pharmacie.getPharamacies);
router.post('/', pharmacie.createPharmacie);

router.put('/:id', pharmacie.editPharmacie);
router.delete('/:id', pharmacie.deletePharmacie);
router.get('/night', pharmacie.getPharamaciesNight);
router.get('/day', pharmacie.getPharamaciesDay);
router.get('/parapharmacies', pharmacie.getParaPharamacies);
router.get('/:id', pharmacie.getPharamacie);

module.exports = router;