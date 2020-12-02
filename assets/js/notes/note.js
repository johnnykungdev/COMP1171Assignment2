import { listNoteTitle } from "./listNoteTitle.js"
import { cancelInput } from "./cancelInput.js"
import { newNote } from "./newNote.js"
import { saveNewNote } from "./saveNewNote.js"

let notesList = []
let currentNote = 1
console.log(currentNote)

function note(notesList, currentNote) {
    console.log(currentNote, notesList)
    const newNoteButton = document.getElementById('newNote')
    newNoteButton.addEventListener('click', function() {
        return newNote()
    })

    const saveButton = document.getElementById('save')
    saveButton.addEventListener('click', function() {
        return saveNewNote(notesList, currentNote)
    })

    const cancelButton = document.getElementById('cancel')
    cancelButton.addEventListener('click', function() {
        return cancelInput()
    })
    
    listNoteTitle(notesList, currentNote)
}

export default note