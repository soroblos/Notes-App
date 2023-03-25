const express = require('express')
const router = express.Router()
const Notes = require('../models/notes.js')


router.get("/", async (req, res) => {
    try {
        res.json(await Notes.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
    console.log(req.body)
})

router.post("/", async (req, res) => {
    try {
        res.json(await Notes.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        res.json(await Notes.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Notes.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        res.json(await Notes.findByIdAndRemove(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router
