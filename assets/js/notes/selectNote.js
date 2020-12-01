import { showInput } from './controllers/showInput.js'

export const selectNote = (notesList, currentNote, selectedNoteId) => {
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
    return currentNote = selectedNote
}

//need to changed currentNote, so that when saving, wouldn't create new note