import { listNoteTitle } from "./listNoteTitle.js"
import { cancelInput } from "./cancelInput.js"
import { newNote } from "./newNote.js"
import { saveNewNote } from "./saveNewNote.js"

const note = (notesList, currentNote) => {
    console.log(currentNote, notesList)
    const newNoteButton = document.getElementById('newNote')
    newNoteButton.addEventListener('click', function() {
        console.log(currentNote)
        return newNote()
    })

    const saveButton = document.getElementById('save')
    saveButton.addEventListener('click', function() {
        console.log(currentNote)
        return saveNewNote(notesList, currentNote)
    })

    const cancelButton = document.getElementById('cancel')
    cancelButton.addEventListener('click', function() {
        return cancelInput()
    })
    
    listNoteTitle(notesList, currentNote)
}

export default note