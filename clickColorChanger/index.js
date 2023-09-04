const colorName=document.querySelector('#colorName')
document.querySelector('button').addEventListener('click',function(e){
    const Color=['green','red','blue','white']
    let randomColor;
    for(i=0;i<4;i++){
        randomColor=Color[Math.round(Math.random()*3)]
    }
    document.body.style.backgroundColor=randomColor
    colorName.innerHTML=randomColor
})
