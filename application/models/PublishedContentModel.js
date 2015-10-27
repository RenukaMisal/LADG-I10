/**
 * Created by raunak on 23/10/15.
 */
// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Definition
publishedContentSchema = Schema({
    _content: {type: Schema.Types.ObjectId, ref: 'CONTENT', required:true},
    _sponsor: {type: Schema.Types.ObjectId, ref: 'SPONSOR'},
    _npo: {type: Schema.Types.ObjectId, ref: 'NPO', required:true},
    publicationType: String,
    scheduleType: String,
    scheduleDate: String,
    expiryDate: String,
    scheduleTime: String,
    notificationTitle: {type:String, default:null},
    notificationDescription: {type:String, default:null},
    pushNotification: {type:String, default:null},
    createdTime: {type:Date, default: Date.now()},
    lastUpdated: {type:Date, default: null},
}),


// Model
    mongoose.model('PUBLISHEDCONTENT', publishedContentSchema);