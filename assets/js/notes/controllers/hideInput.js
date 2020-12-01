export const hideInput = () => {
    const buttonContainer = document.getElementById('buttonContainer')
    const noteContent = document.querySelector('.noteContent')
    buttonContainer.style.display = "none"
    noteContent.style.display = "none"
}