const bodyParser = require("body-parser");
const Task = require('./models/task');
const express = require("express");
require('./db/mongoose');

const app = express();
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    res.header('Access-Control-Allow-Origin', 'http://localhost:5051');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'DELETE, PATCH');

    next();
});

app.get("/api/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks);
    }).catch(err => {
        res.status(500).send(err);
    })
});

app.post("/api/tasks", bodyParser.json(), (req, res) => {
    const task = new Task({
        ...req.body,
    });

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

app.delete("/api/tasks/:taskId", async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.taskId });

        if (!task) {
            return res.status(404).send()
        }

        res.send({ success: true });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch("/api/tasks/:taskId", async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        const task = await Task.findOne({ _id: req.params.taskId, });

        if (!task) {
            return res.status(404).send()
        }

        updates.forEach(update => task[update] = req.body[update]);
        await task.save();
        res.send(task);
    } catch (err) {
        res.status(400).send(err)
    }
});

app.use(express.static("../dist"));

module.exports = app;