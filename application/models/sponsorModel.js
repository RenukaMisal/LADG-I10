/**
 * Created by raunak on 23/10/15.
 */
// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Definition
sponsorSchema = new Schema({
    name:{type:String, required:true},
    title: {type:String, required:true},
    description: {type:String, required:true},
    urlCTA: {type:String, required:true},
    bannerImage: {type:String, required:true},
    _npo: {type: Schema.Types.ObjectId, ref: 'USER', required:true},
    createdTime: {type:Date, default: Date.now()},
    lastUpdated: {type:Date, default: null}

}),

// Model
    mongoose.model('SPONSOR', sponsorSchema);