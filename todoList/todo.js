const addTodoButton=document.querySelector('#addTodo')
const TodoContener=document.querySelector('#toDoContainer')
const inputField=document.getElementById('inputField')

addTodoButton.addEventListener('click',function(){
   var paragraph=document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerHTML=inputField.value
    TodoContener.appendChild(paragraph)
    console.log(TodoContener)
    inputField.value='';
    paragraph.addEventListener('click',function(e){
        if(paragraph.style.textDecoration!=='line-through'){
        paragraph.style.textDecoration='line-through'
        }else{
        paragraph.style.textDecoration='none'

        }
    })
    paragraph.addEventListener('dblclick',function(e){
        TodoContener.removeChild(paragraph)
    },false)
})
window.addEventListener('keydown',function(e){
    console.log(e.ctrlKey)
})