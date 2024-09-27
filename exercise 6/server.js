const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/form.html");
});

app.post("/submit", (req, res) => {
  const { rollNo, name, mark1, mark2, mark3, mark4, mark5 } = req.body;
  const marks = [
    parseFloat(mark1),
    parseFloat(mark2),
    parseFloat(mark3),
    parseFloat(mark4),
    parseFloat(mark5),
  ];

  const total = marks.reduce((acc, mark) => acc + mark, 0);
  const average = total / marks.length;
  const grade = getGrade(average);

  res.redirect(`/result?rollNo=${encodeURIComponent(rollNo)}&name=${encodeURIComponent(name)}&total=${encodeURIComponent(total)}&average=${encodeURIComponent(average)}&grade=${encodeURIComponent(grade)}`);
});

app.get("/result", (req, res) => {
  const { rollNo, name, total, average, grade } = req.query;
  res.send(`
        <h1>Results</h1>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${rollNo}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
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
