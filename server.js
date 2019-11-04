const express = require("express");
const app = express();
const port = process.env.PORT || 5050;

app.get("/api", (req, resp) => {
  resp.set("Access-Control-Allow-Origin", "http://localhost:8080");
  resp.json({ x: 5 });
});

app.use(express.static("dist"));

app.listen(port, () => {
  console.log("object");
});
