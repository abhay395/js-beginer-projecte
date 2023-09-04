let number=document.querySelector('.number')
document.querySelectorAll(".buttonBox")[0].addEventListener('click',function(e){
    if(e.target.id==='dec'){
        number.textContent--;
    }else if(e.target.id==='inc'){
        number.textContent++
    }else if(e.target.id==='reset') {
        number.textContent=0
    }
    if(number.textContent<0){
        number.style.color='red'
    }else if(number.textContent>0){
        number.style.color='green'
    }else{
        number.style.color='black'
    }
})