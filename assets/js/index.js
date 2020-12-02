import toggleDarkTheme from './darktheme/toggleDarktheme.js'
import elementsArray from './darktheme/darkThemeElements.js'

import note from "./notes/note.js"

const darkThemeButton = document.getElementById('darkTheme')
darkThemeButton.addEventListener('click', function() {
    return toggleDarkTheme(elementsArray)
})

note()