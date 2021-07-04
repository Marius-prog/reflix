// const Movie = require("../models/model")
//
// exports.movie_create = (req, res) => {
//     const movie = new Movie({
//         name: req.body.name,
//         author: req.body.author,
//         year: req.body.year,
//         genre: req.body.genre,
//         description: req.body.description,
//         ratio: req.body.ratio,
//         isPublished: req.body.isPublished,
//     });
//
//     movie.save((next, err) => {
//         if (err) {
//             return next(err);
//         }
//         res.send("Movie created successfully!");
//     });
// };
//
// exports.movie_details = (req, res) => {
//     Movie.findById(req.params.id, (err, movie) => {
//         if (err) return next(err);
//         res.send(movie);
//     });
// };
//
// exports.all_movies = (req, res) => {
//     Movie.find({}, (err, movie) => {
//         if (err) return next(err);
//         res.json(movie);
//     });
// };
//
// exports.movie_update = (req, res) => {
//     Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, movie) => {
//         if (err) return next(err);
//         res.send("Movie Udpated.");
//     });
// };
//
// exports.movie_delete = (req, res) => {
//     Movie.findByIdAndRemove(req.params.id, (err) => {
//         if (err) return next(err);
//         res.send("Movie Deleted");
//     });
// };
