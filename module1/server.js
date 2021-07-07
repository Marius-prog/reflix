const express = require("express");
const cors = require("cors");
const movie = require("../module1/backend/routes/movie");
const users = require('../module1/backend/routes/users');
const app = express();
const port = process.env.PORT || 5000;
// const postRouter = require('./backend/routes/routes');
// const usersRouter = require('./backend/routes/users')
const auth = require('./backend/routes/auth')
const config = require('config');

if (!config.get('jwtPrivateKey')) {
    console.error("FATAL ERROR: jwtPrivateKey is not defined.");
    process.exit(1);
}

require('./backend/db/mongoose')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/movies', movie);
app.use('/users', users);
app.use('/auth', auth);


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// app.use("/movie", movie);
// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

app.listen(port, () => console.log(`Server running on port ${port} ..`));
