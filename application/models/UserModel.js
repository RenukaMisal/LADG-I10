//
// UserModel
//

// Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Schema Definition
userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	role:{type: String, required: true, enum: ['ADMIN', 'MANAGER', 'MEMBER'],default:'MEMBER'},
	_npo: {type: Schema.Types.ObjectId, ref: 'NPO', required: true},
	createdTime: {type: Date, default: Date.now},
	lastLogin: {type: Date, default: null},
}),


// Model
mongoose.model('USER', userSchema);
