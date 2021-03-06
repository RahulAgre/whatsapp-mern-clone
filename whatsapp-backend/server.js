// importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json);

//DB config
const connection_url =
  "mongodb+srv://admin:XyUwv1H0Wn7duBGK@cluster0.aqjzo.mongodb.net/whatsappdb?retryWrites=true&w=majorityy";
/*
mongoose.connect(
  connection_url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);
*/

mongoose.connect(connection_url);

//???

//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
