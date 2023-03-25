require("dotenv").config()
const { DATABASE_URL, PORT = 3000 } = process.env
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors')
const morgan = require('morgan')
const Notes = require('./models/notes.js')
const notesController = require('./controllers/notes.js')

mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello world");
});

app.use('/notes', notesController)

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`)); 