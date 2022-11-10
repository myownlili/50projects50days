const smallCups = document.querySelectorAll('.cup-small')
const remained = document.getElementById('remained')

const percentage = document.getElementById('percentage')
const liters = document.getElementById('liters')

smallCups.forEach((cup,idx) => {
    cup.addEventListener('click', ()=>{
        highlightCups(idx)
    })
})

updateBig()

function highlightCups(idx){
     if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--;
     }

     smallCups.forEach((cup,idx2) =>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
     })

     updateBig()
}

function updateBig(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCup = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility='hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility='visible'
        percentage.style.height = `${fullCups/totalCup * 330}px`
        percentage.innerText = `${fullCups/totalCup * 100}%`
    }

    if(fullCups === totalCup){
        remained.style.visibility='hidden'
        remained.style.height = 0
    }else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250*fullCups)/1000}L`
    }

}