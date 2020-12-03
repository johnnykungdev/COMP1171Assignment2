import { showInput } from './controllers/showInput.js'
import { changeCurrentNote } from "./note.js"

export const selectNote = (notesList, selectedNoteId) => {
    const selectedNote = notesList.find(note => note.id === selectedNoteId)
    console.log(selectedNote)
    const noteContent = document.querySelector('.noteContent')
    const noteTitleInput = document.querySelector('.noteTitleInput')
    const noteInput = document.querySelector('.noteInput')

    noteTitleInput.value = selectedNote.title
    noteInput.value = selectedNote.body

    if (noteContent.style.display === "none") {
        showInput()
    }

    changeCurrentNote(selectedNote)
}

//need to changed currentNote, so that when saving, wouldn't create new note