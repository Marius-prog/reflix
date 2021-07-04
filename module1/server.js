const express = require("express");
const cors = require("cors");
const movie = require("../module1/backend/routes/routes");
const app = express();
const port = process.env.PORT || 5000;
const postRouter = require('./backend/routes/routes');

require('./backend/db/mongoose')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/movies', postRouter);

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// app.use("/movie", movie);
// app.get('/', (req, res) => {
//     res.send("Hello World!")
// })

app.listen(port, () => console.log(`Server running on port ${port} ..`));
