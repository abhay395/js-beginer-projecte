const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

   const height= parseInt(document.querySelector('#Height').value);
   const weight= parseInt(document.querySelector('#Weight').value);
   const result= document.querySelector('#results');
   const weightGuideresult=document.querySelector('#weightGuide');
   if( height=== '' ||  height<0 || isNaN(height)){
    result.innerHTML=`please give a valid height`
   }else  if( weight=== '' ||  height<0 || isNaN(weight)){
    result.innerHTML=`please give a valid Weight`
   }else {
    const BMI= (weight/((height*height)/10000)).toFixed(2)
    //show the result
    result.innerHTML=`<span>${BMI}kg/m<sup>2<sup> </span>`
    if(BMI<18.6){
        weightGuideresult.innerHTML='under weight'
    }else if (BMI>=18.9 && BMI<24.9){
        weightGuideresult.innerHTML='Normal weight'
    }else if (BMI>24.9){
        weightGuideresult.innerHTML='Overweight'
    }

   }
   

})