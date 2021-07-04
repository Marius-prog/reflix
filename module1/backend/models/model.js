const mongoose = require('mongoose')
const schema = mongoose.Schema;

const MovieSchema = new schema({
    name: {type: String},
    author: {type: String},
    year: {type: Number},
    genre: {type: String},
    description: {type: String},
    ratio: {type: Number},


});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
