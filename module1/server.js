const express = require("express");
const movie = require("../module1/backend/routes/movie");
const users = require('../module1/backend/routes/users');
const app = express();

require('./backend/db/mongoose')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/movies', movie);
app.use('/users', users);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} ..`));
