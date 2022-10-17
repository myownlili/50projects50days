// The Document method querySelectorAll() returns a 
// static (not live) NodeList representing a list of the 
// document's elements that match the specified group of selectors.
const panels = document.querySelectorAll('.panel')

// The forEach() method executes a provided 
// function once for each array element.
panels.forEach(panel => {

    // That means that the variables and constants 
    // available to the containing function 
    // are also available to the event handler 
    // when using an arrow function.
    panel.addEventListener('click', ()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass(){
    panels.forEach(panel => {

        // Although the classList property itself is 
        // read-only, you can modify its associated 
        // DOMTokenList using the add(), remove(), replace(), and toggle() methods.
        panel.classList.remove('active')
    })
}