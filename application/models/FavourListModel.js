/**
 * Created by raunak on 23/10/15.
 */
//
// UserModel
//

// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

favouredList = Schema({
    device_token: {type: String, unique: true},
    _npo: [{type: Schema.Types.ObjectId, ref: 'NPO'}],
    lastUpdated: {type: Date, default: Date.now}
}),


// Model
    mongoose.model('FAVOUREDLIST', favouredList);