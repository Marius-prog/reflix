const mongoose = require('mongoose')
const schema = mongoose.Schema;

const MovieSchema = new schema({
    title: {type: String},
    year: {type: Number},
    time: {type: Number},
    genre: {type: String},
    rating: {type: Number},
    metascore: {type: Number},
    vote: {type: Number},
    gross: {type: Number},
    description: {type: String},

    // author: {type: String, required: true},
    // genre: {type: String, required: true},


});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
