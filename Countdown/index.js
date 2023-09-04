const months =[
    "January",
    'February',
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December"
];
const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
 
const giveaway=document.querySelector('.EndsDate')
const deadline=document.querySelector('.deadline')
const items =document.querySelectorAll('.time h4')
const temptime=new Date()
const tempyear=temptime.getFullYear()
const tempmonth=temptime.getMonth()
const tempDate=temptime.getDate()

let FutureDate= new Date(tempyear,tempmonth,tempDate,11,0);
console.log(FutureDate) 
const year = FutureDate.getFullYear()
const month =  months[ FutureDate.getMonth()]
const weak = weekdays[FutureDate.getDay()]
const day = FutureDate.getDate()
const hours = FutureDate.getHours()
const min = FutureDate.getMinutes()
// const second = FutureDate.getSeconds()
console.log(month)
giveaway.textContent=`givaway ends on ${weak}, ${day} ${month} ${year} ${hours}:${min}am `

//future time in ms
const futureTime=FutureDate.getTime()
console.log(futureTime)
function getReamnigTime() {
    const today=new Date().getTime()
    const remaningtime=futureTime-today


    const oneminute = 1000 * 60;
    const onehour = 60*60*1000;
    const oneday = 60*60*1000 * 24;
    // const oneyear =oneday * 365;
    let remaningtdays=Math.floor(remaningtime/oneday)
    let remaningthours=Math.floor((remaningtime % oneday) /onehour)
    let remaningtminite=Math.floor((remaningtime % onehour)/oneminute) 
    let remaningsecond=Math.floor((remaningtime % oneminute)/1000)
    
    
    value=[remaningtdays,remaningthours,remaningtminite,remaningsecond]

    function format(item){
        if (item<10){
            return item =`0${item}`
        }
        return item
    }
    items.forEach((item,index)=>{
        item.innerHTML=format(value[index])
    })
    if (remaningtime<0){
     clearInterval(countdown)
     deadline.innerHTML=`<h1 class='expired' >Sorry this givaway has expired</h1>`
    }
}
// getReamnigTime()
 const countdown= setInterval(getReamnigTime,1000 );