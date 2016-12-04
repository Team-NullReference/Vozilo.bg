/* globals require module */

const modelRegistrator = require('./utils/model-registrator');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = modelRegistrator.register('User', {
    // TODO  update user-data.js, auth-controler and then uncomment
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },
    googleId: {
        type: String
    },
    picture: String,
    drivingExpInYears: {
        type: Number,
        min: 0,
        max: 60
    },
    address: {
        city: {
            type: String
        },
        street: {
            type: String
        }
    },
    email: {
        type: String,
        // required: true,
        unique: true,
        match: emailRegex
    },
    phoneNumber: {
        type: String
    },
    cars: [{}],
    receivedReviews: [{}],
    userRating: Number,
    password: {
        type: String
        // match: passwordRegex
    },
    role: [String],
    isDeleted: Boolean
});