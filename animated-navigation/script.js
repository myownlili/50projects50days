const navEl = document.getElementById('nav')
const btn = document.getElementById('toggle')

btn.addEventListener('click',()=>{
    navEl.classList.toggle('active')
})