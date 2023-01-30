const fs = require("fs");
const path = require("path");

const createNewNote = (body, notesArray) => {
    let newNote = body;
    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2)
    )
    return newNote;
}

const updateDb = (id, notesArray) => {
    let deletedNote = id;
    for (let i = 0; i < notesArray[i].length; i++) {
        if (deletedNote == notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({notes: notesArray}, null, 2),
                err => {
                    if(err) {
                        throw err;
                    }
                }
            )
        }
    }
}

module.exports = {
    createNewNote,
    updateDb,
}