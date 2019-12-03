const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 5050;

let tasks = [
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
  res.header('Access-Control-Allow-Methods', 'DELETE, PATCH');
  
  next();
});

app.get("/api/tasks", (req, resp) => {
  resp.json(tasks);
});

app.post("/api/tasks", bodyParser.json(), (req, resp) => {
  tasks.push({ ...req.body, id: tasks.length })

  resp.json({ success: true });
});

app.delete("/api/tasks/:taskId",  (req, resp) => {
  tasks = tasks.filter(task => task.id !== Number(req.params.taskId));

  resp.json({ success: true });
});

app.patch("/api/tasks/:taskId", bodyParser.json(), (req, resp) => {
  const currentIndex = tasks.findIndex(task => task.id === Number(req.params.taskId));
  tasks[currentIndex] = req.body;

  resp.json({ success: true });
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log("object");
});
