const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/reflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB..");
}).catch((err) => {
    console.log("Could not connect to MongoDB..", err)
});
