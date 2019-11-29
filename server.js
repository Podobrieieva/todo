const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 5050;

const tasks = [
  {
  name: 'First',
  id: 2,
},
{
  name: 'First',
  id: 1,
},
{
  name: 'First',
  id: 3,
},
];

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/api/tasks", (req, resp) => {
  resp.json(tasks);
});

app.post("/api/tasks", bodyParser.json(), (req, resp) => {
  tasks.push({ ...req.body, id: tasks.length })

  resp.json({ success: true });
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log("object");
});
