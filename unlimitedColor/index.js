//genret a random color
const randomColor=function(){
    const hex ='0123456789ABCDEF'
    let color='#'
    for ( i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
     return color 
}
document.querySelector('#Start').addEventListener('click',startChangingColor)
document.querySelector('#Stop').addEventListener('click',stopChangingColor)
let IntervalId;// this is undifinde and it is false 
function startChangingColor(){
   if(!IntervalId){ IntervalId=setInterval(Changecolor,1000)}
    function Changecolor(){
        document.body.style.backgroundColor=randomColor()
    }
}
function stopChangingColor() {
    clearInterval(IntervalId)
    IntervalId=null
}