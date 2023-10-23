const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/react-login-tut")
    .then(() => {
        console.log("connected");
    })
    .catch(() => {
        console.log("failed");
    });

const newSchema = new mongoose.Schema({
    msg: {
        type: String,
        required: true
    },
    tournamentName: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
