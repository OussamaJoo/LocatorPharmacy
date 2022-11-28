const mongoose = require('mongoose');
const { Schema } = mongoose;




const PharmacieSchema = new Schema({
    noPh:{ type: Number},
    pharmCategory: { type: String, required: true },
    pharmName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    type: { type: String, required: true, enum: ['Parapharmacie', 'Pharmacie'] },
    mobileNo: { type: Number, required: true },
    email: { type: String, required: true, match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'] },
    currentAdress: { type: String, required: true },
    maps: { type: String, required: true },
    joinDate: { type: Date, required: true, default: Date.now }
});


module.exports = mongoose.model('Pharmacie', PharmacieSchema);
