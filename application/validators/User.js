/**
 * Created by raunak on 27/10/15.
 */
var Joi = require('joi');

module.exports = {
    cookies: {
        asgardTheme: Joi.string().valid("UX1")
    },
    body:{
        email: Joi.string().email().required(),
        password: Joi.string().required().regex(/^[a-zA-Z0-9]{5,30}$/),
        role:Joi.string().required().valid('ADMIN','MANAGER','MEMBER'),
        _npo: Joi.string().required().token()
    }
};
