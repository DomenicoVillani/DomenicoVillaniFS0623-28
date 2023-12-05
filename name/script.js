let i = 0

document.getElementById('insert').addEventListener('click', function(e){
    e.preventDefault()
    if(i==0){
        const text = document.getElementById('nome').value
        let stamp = document.createElement('p')
        let div = document.querySelector('div')
        stamp.innerHTML = text
        div.appendChild(stamp)
        document.getElementById("nome").value = ""
        localStorage.setItem('name', text)
        i++
    } else{
        const text = document.getElementById('nome').value
        let stamp = document.createElement('p')
        let div = document.querySelector('div')
        let body = document.querySelector('body')
        div.remove()
        stamp.innerHTML = text
        let newDiv = document.createElement('div')
        newDiv.appendChild(stamp)
        body.appendChild(newDiv)
        document.getElementById("nome").value = ""
        localStorage.setItem('name', text)
    }
})

document.getElementById('remove').addEventListener('click',function(e){
    e.preventDefault()
    localStorage.removeItem('name')
    let p = document.querySelector('p')
    p.remove()
})