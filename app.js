const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const text = document.querySelector('.text')
console.log(text)

btn1.addEventListener('click', e =>{
    e.preventDefault();
    text.innerText = Number(text.innerText) + 1
})

btn2.addEventListener('click', e =>{
    e.preventDefault();
    text.innerText = 0
})

btn3.addEventListener('click', e=>{
    e.preventDefault();
    text.innerText = Number(text.innerText) - 1
})