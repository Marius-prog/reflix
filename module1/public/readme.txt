// const startupDebugger = require("debug")("app:startup");
// const dbDebugger = require("debug")("app:db");
// const config = require("config");
// const morgan = require("morgan");
// const helmet = require("helmet");
// const Joi = require("joi");
// const logger = require("./logger");

//////////
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const movie = require("../module1/backend/routes/routes");

const app = express();
const port = process.env.PORT || 5000;

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/movie", movie)
// app.use(express.static("public"));
// app.use(helmet());

// configuration
// console.log("aplication name: " + config.get("name"));
// console.log("movie server: " + config.get("movie.host"));
// console.log("movie password: " + config.get("movie.password"));

//console config
// if (app.get("env") === "development") {
//   app.use(morgan("tiny"));
//   startupDebugger("Morgan enabled");
// }

// db
// dbDebugger("Connected to the database");
//
// app.use(logger);
//
// app.use(function (req, res, next) {
//     console.log("Authenticating..");
//     next();
// });

//"title","rating","poster","releaseDate","genres"

// const movies = [
//     {id: 1, name: "movie1", genre: "drama"},
//     {id: 2, name: "movie2", genre: "action"},
//     {id: 3, name: "movie3", genre: "romance"},
// ];
//
//
mongoose
    .connect("mongodb://localhost/reflix")
    .then(() => console.log("Connected to MongoDB.."))
    .catch((err) => console.log("Could not connect to MongoDB..", err));
//
// const movieSchema = new mongoose.Schema({
//
//     name: String,
//     genre: String,
//     author: String,
//     description: String,
//     date: {type: Date, default: Date.now},
//     isPublished: Boolean
//
// });
//
//
// app.get("/", (req, res) => {
//     res.send("hello reflix");
// });
//
//
// app.get("/api/movies", (req, res) => {
//     res.send(movies);
// });
//
// app.get("/api/movies/:id", (req, res) => {
//     const movie = movies.find((c) => c.id === parseInt(req.params.id));
//     if (!movie) res.status(404).send("given ID not found !!"); // 404
//     res.send(movie);
// });
//
// app.post("/api/movies", (req, res) => {
//     const schema = {
//         name: Joi.string().min(3).required(),
//         genre: Joi.string().required(),
//     };
//
//     const result = Joi.validate(req.body, schema);
//     console.log(result);
//
//     if (result.error) {
//         res.status(404).send(result.error);
//         return;
//     }
//
//     const movie = {
//         id: movies.length + 1,
//         name: req.body.name,
//         genre: req.body.genre,
//     };
//
//     movies.push(movie);
//     res.send(movie);
// });
//
// app.put("/api/movies/:id", (req, res) => {
//     const movie = movies.find((c) => c.id === parseInt(req.params.id));
//     if (!movie) res.status(404).send("given ID not found !!");
//
//     const schema = {
//         name: Joi.string().min(3).required(),
//     };
//
//     const result = Joi.validate(req.body, schema);
//
//     if (result.error) {
//         res.status(404).send(result.error);
//         return;
//     }
//
//     movie.name = req.body.name;
//     res.send(movie);
// });
//
// app.delete("/api/movies/:id", (req, res) => {
//     const movie = movies.find((c) => c.id === parseInt(req.params.id));
//     if (!movie) res.status(404).send("given ID not found !!");
//
//     const index = movies.indexOf(movie);
//     movies.splice(index, 1);
//
//     res.send(movie);
// });

// port config

app.listen(port, () => console.log(`Server running on port ${port} ..`));
