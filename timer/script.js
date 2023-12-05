let div = document.querySelector('div')
let value

const timer = function(){
    if(sessionStorage.getItem('timerValue')){
        value = sessionStorage.getItem('timerValue')
        div.innerText = value
        setInterval(function(){
            value++ 
            div.innerText = value
            sessionStorage.setItem('timerValue', value)
        }, 1000)
    }else{
        value = 0
        div.innerText = value
        setInterval(function(){
            value++
            div.innerText = value
            sessionStorage.setItem('timerValue', value)
        },1000)
    }
}

window.addEventListener('load',timer)
