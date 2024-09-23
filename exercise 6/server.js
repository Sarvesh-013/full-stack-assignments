const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.redirect(`/result?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
});

app.get("/result", (req, res) => {
  const { name, email } = req.query;
  res.send(`
        <h1>Form Submitted Successfully!</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <a href="/">Go Back to Form</a>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
