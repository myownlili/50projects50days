let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progress = document.getElementById('progress');
let circles = document.querySelectorAll('.circle');

let currentActive = 1;

prev.addEventListener('click',()=>{
    currentActive--;

    if(currentActive<1){
        return currentActive = 1;
    }

    update();
});

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length){
        return currentActive = circles.length;
    }

    update();
})


function update(){

    circles.forEach((circle,idx) => {
        if(idx<currentActive) {
            circle.classList.add('active');
        }else{
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length-1)/(circles.length-1)*100 + '%'
;
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }


}