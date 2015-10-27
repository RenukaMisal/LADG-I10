/**
 * Created by raunak on 23/10/15.
 */
// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Definition
contentSchema =  Schema({
    contentType: {type:String, required:true, enum: ['News', 'Events', 'Volunteering']},
    title: {type:String, required:true},
    contentDescription: {type:String, default:null},
    contentStatus: {type:String, default:null},
    mediaType: {type:String, default:null},
    mediaImages: [String],
    mediaVideoURL: {type:String, default:null},
    textCTA:{type:String, default:null},
    urlCTA: {type:String, default:null},
    event: {
        fromDate: {type:String, default:null},
        toDate: {type:String, default:null},
        fromTime: {type:String, default:null},
        toTime: {type:String, default:null},
        address: {type:String, default:null},
    },
    expiryDate: {type:Date, required:true},
    _npo: {type: Schema.Types.ObjectId, ref: 'NPO'},
    _sponsor: {type: Schema.Types.ObjectId, ref: 'SPONSOR'},
    createdTime: {type:Date, default:Date.now()},
    lastUpdated: {type:Date, default:null},
}),

// Model
    mongoose.model('CONTENT', contentSchema);