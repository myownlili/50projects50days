const areaText = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')

areaText.focus()

areaText.addEventListener('keyup',(e)=>{
    creatTag(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value=''
        }, 10);
        randomSelect()
    }
})

function creatTag(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag=>tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')

        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = PickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = PickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times*100)
}

function PickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}