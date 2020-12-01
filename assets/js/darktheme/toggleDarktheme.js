const toggleDarkTheme = (elements) => {
    elements.forEach(element => {
        element.classList.toggle('darkTheme')
    })

    if (elements[0].classList[1] === 'darkTheme') {
        elements[5].innerHTML = 'Light Theme'
    } else {
        elements[5].innerHTML = 'Dark Theme'
    }
}

export default toggleDarkTheme