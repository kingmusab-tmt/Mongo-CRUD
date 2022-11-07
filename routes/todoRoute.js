// const express = require('express');
const router = require('express').Router();
const controller = require('../controllers/todoController');


router
.get("/", controller.getTasks)
.get("/:id", controller.getTask)
.post("/", controller.addTask)
.put("/:id", controller.updateTask)
.delete("/:id", controller.deleteTask);


module.exports = router;

