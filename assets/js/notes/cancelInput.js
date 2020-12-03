import { resetInput } from './controllers/resetInput.js'
import { hideInput } from './controllers/hideInput.js'
import { changeCurrentNote } from './note.js'

export const cancelInput = () => {
    resetInput()
    hideInput()
    changeCurrentNote(undefined)
}