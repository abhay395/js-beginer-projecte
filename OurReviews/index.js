const Name1=document.querySelector('.Name')
const Job1= document.querySelector('.job')
const sumrry=document.querySelector('.reviews')
// const sumrry=document.querySelector('.reviews')
const Image1=document.querySelector('#Image')
const user={
    Name:['Abhay Prjapati','Abhisheck gujar','kuldeep verma'],
    job:['web devloper' ,'software enginer','data scintiss'],
    image:["IMG_20230204_125306.jpg","WhatsApp Image 2023-08-27 at 08.34.12.jpg","WhatsApp Image 2023-08-27 at 08.34.40.jpg"],
    sumrry:['Abhay has room for improvement in his communication skills. His written correspondence tends to be disorganized and lacking in detail, creating confusion for the recipients. It is recommended that John proofread his messages carefully and ensure that they include all necessary information before sending them.','Abhisheck has demonstrated exceptional leadership skills by fostering a positive work environment where team members feel valued and engaged. She leads by example and creates an atmosphere that encourages open communication, collaboration, and continuous learning. Her team consistently meets and often exceeds their goals, reflecting her ability to delegate tasks effectively and provide constructive feedback to drive improvement.','“While Kuldeep has demonstrated strong technical skills, his leadership abilities require improvement. He tends to micromanage tasks, which can undermine team members’ confidence and limit their opportunities for growth. In addition, rather than proactively addressing issues and conflicts, Kuldeep often disregards them, leading to a tense work environment.']
}

document.querySelector('#lhs').addEventListener('click',function(){
       if(Name1.textContent==="Abhay Prjapati"){
        Name1.textContent=user.Name[1];
        Job1.innerHTML=user.job[1];
        Image1.src=user.image[1];
        sumrry.innerHTML=user.sumrry[1];
    }else if(Name1.textContent==='Abhisheck gujar'){
        Name1.textContent=user.Name[2];
        Job1.textContent=user.job[2];
        Image1.src=user.image[2];
        sumrry.innerHTML=user.sumrry[2]
    }else if(Name1.innerHTML==='kuldeep verma'){
        Name1.textContent=user.Name[0];
        Job1.textContent=user.job[0];
        sumrry.innerHTML=user.sumrry[0]
        Image1.src=user.image[0];
    }
})

document.querySelector('#rhs').addEventListener('click',function(){
    if(Name1.textContent==="Abhay Prjapati"){
        Name1.textContent=user.Name[2];
        Job1.innerHTML=user.job[2];
        Image1.src=user.image[2];
        sumrry.innerHTML=user.sumrry[2];
    }else if(Name1.textContent==='kuldeep verma'){
        Name1.textContent=user.Name[1];
        Job1.textContent=user.job[1];
        Image1.src=user.image[1];
        sumrry.innerHTML=user.sumrry[1];

    }else if(Name1.innerHTML==='Abhisheck gujar'){
        Name1.textContent=user.Name[0];
        Job1.textContent=user.job[0];
        Image1.src=user.image[0];
        sumrry.innerHTML=user.sumrry[0];
    }
})
document.querySelector('#button').addEventListener('click',function(){
    const randomNumber=Math.round(Math.random()*2)
    if(Name1.textContent==="Abhay Prjapati"){
        Name1.textContent=user.Name[randomNumber];
        Job1.innerHTML=user.job[randomNumber];
        Image1.src=user.image[randomNumber];
        sumrry.innerHTML=user.sumrry[randomNumber];
    }else if(Name1.textContent==='Abhisheck gujar'){
        Name1.textContent=user.Name[randomNumber];
        Job1.textContent=user.job[randomNumber];
        Image1.src=user.image[randomNumber];
        sumrry.innerHTML=user.sumrry[randomNumber]
    }else if(Name1.innerHTML==='kuldeep verma'){
        Name1.textContent=user.Name[randomNumber];
        Job1.textContent=user.job[randomNumber];
        sumrry.innerHTML=user.sumrry[randomNumber]
        Image1.src=user.image[randomNumber];
    }
})