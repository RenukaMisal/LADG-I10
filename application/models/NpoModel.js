/**
 * Created by raunak on 23/10/15.
 */

// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Definition
npoSchema = new Schema({
    name: {type: String, required:true, unique: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    phone: {type: String, default: null},
    website: {type: String, default: null},
    email: {type: String, default: null},
    tagLine: {type: String, default: null},
    missionOverview: {type: String, default: null},
    logo: {type: String, default: null},
    banner: {type: String, default: null},
    isActive: {type:String, required:true, default:false},
    createdTime: {type: Date, default: Date.now},
    lastUpdated: {type: Date, default: null},
}),


// Model
    mongoose.model('NPO', npoSchema);