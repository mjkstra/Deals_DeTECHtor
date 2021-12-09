let Express = require("express");
let bodyParser = require("body-parser");
let MongoClient = require("mongodb").MongoClient;

let CONNECTION_STRING = "mongodb+srv://g11:$ciE!964Wg@dealsdetechtor.ybwtc.mongodb.net/DealsDeTECHtor?retryWrites=true&w=majority";
let DATABASE = "DealsDeTECHtor";
let database;

let app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(1234, () => {
    MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            console.log("Error connecting to MongoDB: " + error);
        } else {
            database = client.db(DATABASE);
            console.log("MongoDB connection successfull");
        }
    })
});

app.get("/", (request, response) => {
    response.send("Hello world");
})