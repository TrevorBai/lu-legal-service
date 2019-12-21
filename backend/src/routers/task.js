const express = require('express')
const Task = require('../models/task')

const router = new express.Router()

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body)

  try {
    await task.save()
    res.status(201).send(task)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.send(tasks)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router