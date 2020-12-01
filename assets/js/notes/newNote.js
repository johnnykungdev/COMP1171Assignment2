import { showInput } from './controllers/showInput.js'

export const newNote = (noteList) => {
    const noteTitleInput = document.querySelector('.noteTitleInput')
    const noteInput = document.querySelector('.noteInput')
    const saveButton = document.getElementById('save')
    const cancelButton = document.getElementById('cancel')

    if (noteInput.value || noteTitleInput.value) {
        alert("Please save the content first or cancel this note first.")
    } else {
        showInput()
    }
}