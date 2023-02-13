const fs = require("fs");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
// const notes = JSON.parse(fs.readFileSync("./db/db.json"));
const {createNewNote, updateDb} = require("../../lib/notes");

router.get("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    let results = notes;
    console.log("notes log", results);
    res.json(results);
})

router.post("/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    req.body.id = uuidv4();
    console.log("test", req.body);
    let note = createNewNote(req.body, notes);
    res.json(note);

})

router.delete("/notes/:id", (req, res) => {
    const params = req.params.id;
    updateDb(params, notes);
    res.redirect("");
})

module.exports = router;

