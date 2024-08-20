const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const data={
    "Name": "sarvesh",
    "Reg_Number" : "22BAD087",
    "Age": 19,
    "DOB": "Jan 13 2005"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("bio.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});