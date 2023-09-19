// const plusbtn=document.querySelector('.plus-icon')
// const minusbtn=document.querySelector('.minus-icon')
// const qt=document.querySelector('.question-text')
// plusbtn.addEventListener('click',function(){
//     qt.style.display='block'
//     plusbtn.style.display='none'
//     minusbtn.style.display='block'

// })
// minusbtn.addEventListener('click',function(){
//     qt.style.display='none'
//     plusbtn.style.display='block'
//     minusbtn.style.display='none'
// })
// const plusbtn=document.querySelector('.plus-icon')
// const btn=document.querySelector('.question-btn')
// const minusbtn=document.querySelector('.minus-icon')
// const qt=document.querySelector('.question-text')
// plusbtn.addEventListener('click',function(){
//    btn.classList.add('show-text')
//     qt.classList.add('show-text')
// })
const btns =document.querySelectorAll(".question-btn")
const article =document.querySelector(".question")
btns.forEach((btn)=>{
    btn.addEventListener('click',function(){
        btn.parentElement.parentElement.classList.toggle("show-text")
    })
})