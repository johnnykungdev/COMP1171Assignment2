export const showInput = () => {
    const buttonContainer = document.getElementById('buttonContainer')
    const noteContent = document.querySelector('.noteContent')
    buttonContainer.style.display = "block"
    noteContent.style.display = "grid"
}