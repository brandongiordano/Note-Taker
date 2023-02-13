const fs = require("fs");
const path = require("path");

const createNewNote = (body, notesArray) => {
    let note = body;
    console.log("note", note);
    console.log("notesArray", notesArray);
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray)
    );
    return note;
}

const updateDb = (id, notesArray) => {
    let deletedNote = id;
    for (let i = 0; i < notesArray[i].length; i++) {
        if (deletedNote === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({notesArray}),
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