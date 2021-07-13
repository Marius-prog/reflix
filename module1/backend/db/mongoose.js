const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://reflix:reflix123@cluster0.y8m8v.mongodb.net/reflix?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(() => {
    console.log("Connected to MongoDB..");
}).catch((err) => {
    console.log("Could not connect to MongoDB..", err)
});
