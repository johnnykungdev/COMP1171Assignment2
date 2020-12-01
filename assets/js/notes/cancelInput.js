import { resetInput } from './controllers/resetInput.js'
import { hideInput } from './controllers/hideInput.js'

export const cancelInput = () => {
    resetInput()
    hideInput()
}