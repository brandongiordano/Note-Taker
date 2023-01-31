const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {notes} = require("../../db/db.json");
const {createNewNote, updateDb} = require("../../lib/notes");

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
})

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    let newNote = createNewNote(req.body, notes);
    res.json(newNote);
})

router.delete("/notes/:id", (req, res) => {
    let params = req.params.id;
    updateDb(params, notes);
    res.redirect("");
})

module.exports = router;