const Joi = require('joi');
const express = require('express');
const app = express();

//middleware
app.use(express.json());

const movies = [{id: 1, name:'movie1'},
                {id: 2, name:'movie2'},
                {id: 3, name:'movie3'},];

app.get('/', (req, res) => {
    res.send('hello reflix');
});

app.get('/api/movies', (req, res) => {
    res.send(movies);
});

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) res.status(404).send('given ID not found !!')  // 404
    res.send(movie);
});

app.post('/api/movies', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.valid(req.body, schema);
    console.log(result);

    if (!req.body.name || req.body.name.length < 3) {

        res.status(404).send("name is required to be minimum 3 characters");
        return;
    }


    const movie = {
        id: movies.length + 1,
        name: req.body.name
    };

    movies.push(movie);
    res.send(movie);
});


// port config
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port} ...`))