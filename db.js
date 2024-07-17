const mongoose = require("mongoose")

const connectToMongo = (mongoURI) =>
{
    mongoose.connect(mongoURI).then(() => {
        console.info("Connected to DB");
    })
        .catch((e) => {
            console.log("Error:", e);
        });
}

module.exports = connectToMongo