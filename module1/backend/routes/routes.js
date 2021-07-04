const express = require("express");
const Movie = require("../models/model")
const router = express.Router();


// const controller = require("../controllers/controller");
// router.post("/create", controller.movie_create);
// router.get("/", controller.all_movies);
// router.get("/:id", controller.movie_details);
// router.put("/:id/update", controller.movie_update);
// router.delete("/:id/delete", controller.movie_delete);


router.get("/", async (req, res) => {
    const movies = await Movie.find()
    res.send(movies)
});

router.get("/:id", async (req, res) => {
    try {
        const movie = await Movie.findOne({_id: req.params.id})
        res.send(movie)
    } catch {
        res.status(404)
        res.send({error: "Movie not found."})
    }
});

router.post("/post", async (req, res) => {
    const movie = new Movie({
        name: req.body.name,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre,
        description: req.body.description,
        ratio: req.body.ratio,

    })
    await movie.save()
    res.send(movie)
});

router.put("/:id", async (req, res) => {
    try {
        const movie = await Movie.findOne({_id: req.params.id})
        if (req.body.name) {
            movie.name = req.body.name
        }
        if (req.body.author) {
            movie.author = req.body.author
        }
        await movie.save()
        res.send(movie)
    } catch {
        res.status(404)
        res.send({error: "Movie not found."})
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Movie.deleteOne({_id: req.params.id})
        res.send({message: "Succesfully deleted.."})
    } catch {
        res.status(404)
        res.send({error: "Movie not found."})
    }
});


module.exports = router;
