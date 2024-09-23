const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/submit", (req, res) => {
  const marks = [
    parseFloat(req.body.mark1),
    parseFloat(req.body.mark2),
    parseFloat(req.body.mark3),
    parseFloat(req.body.mark4),
    parseFloat(req.body.mark5),
  ];

  const total = marks.reduce((acc, mark) => acc + mark, 0);
  const average = total / marks.length;
  const grade = getGrade(average);

  res.redirect(`/result?average=${encodeURIComponent(average)}&grade=${encodeURIComponent(grade)}`);
});

app.get("/result", (req, res) => {
  const { average, grade } = req.query;
  res.send(`
        <h1>Results</h1>
        <p><strong>Average Marks:</strong> ${average}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <a href="/">Go Back to Form</a>
    `);
});

// Function to determine the grade based on average
function getGrade(average) {
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
