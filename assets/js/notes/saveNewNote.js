import { listNoteTitle } from './listNoteTitle.js'
import { resetInput } from './controllers/resetInput.js'
import { changeCurrentNote } from './note.js'

export const saveNewNote = (notesList, currentNote) => {
    const newNoteTitle = document.querySelector('.noteTitleInput').value
    const newNoteContent = document.querySelector('.noteInput').value
    if (currentNote) {
        const matchedNoteId = notesList.find(note => note.id === currentNote.id)
        console.log(matchedNoteId)
        console.log("has current Note")
        matchedNoteId.title = newNoteTitle
        matchedNoteId.body = newNoteContent
        resetInput()
        changeCurrentNote(undefined)
    } else {
        if (newNoteTitle && newNoteContent) {
        const newNoteId = notesList.length + 1
            notesList.push({
                id: newNoteId,
                title: newNoteTitle,
                body: newNoteContent
            })
            listNoteTitle(notesList, currentNote)
            resetInput()
        } else {
            alert('Please enter note content.')
        }
    }

}