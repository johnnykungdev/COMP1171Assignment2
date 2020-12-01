import { selectNote } from './selectNote.js'

export const listNoteTitle = (notesList, currentNote) => {
    //remove old list
    const notesTitleList = document.querySelector('.titleList')
    if (notesList) {
        notesTitleList.remove()
    }
    //create new lsit
    const newNotesTitleList = document.createElement('ul')
    newNotesTitleList.classList.add('titleList')
    notesList.forEach(note => {
        const noteTitle = document.createElement('li')
        noteTitle.classList.add('noteListItem')
        noteTitle.innerHTML = note.title
        noteTitle.addEventListener('click', function () {
            return selectNote(notesList, currentNote, note.id)
        })
        newNotesTitleList.appendChild(noteTitle)
    })
    //attach new list
    const sidebar = document.querySelector('.sidebar')
    sidebar.appendChild(newNotesTitleList)
}