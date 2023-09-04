const Calculatenumber= document.querySelector('.Calculate')
let calculation='';
localStorage.getItem('storage')
document.querySelector('.contener').addEventListener('click',function(e){
    if(e.target.id==='1'){
    calculation+='1'
    }else if(e.target.id==='2'){
        calculation+='2'
    } else if(e.target.id==='3'){
        calculation+='3'
    } else if(e.target.id==='4'){
        calculation+='4'
    } else if(e.target.id==='5'){
        calculation+='5'
    } else if(e.target.id==='6'){
        calculation+='6'
    } else if(e.target.id==='7'){
        calculation+='7'
    } else if(e.target.id==='8'){
        calculation+='8'
    } else if(e.target.id==='9'){
        calculation+='9'
    } else if(e.target.id==='0'){
        calculation+='0'
    } else if(e.target.id==='+'){
        calculation+='+'
    } else if(e.target.id==='-'){
        calculation+='-'
    } else if(e.target.id==='*'){
        calculation+='*'
    } else if(e.target.id==='/'){
       calculation+='/'
    } else if(e.target.id==='.'){
        calculation+='.'
    } else if(e.target.id==='AC'){
        calculation=' '
    } else if(e.target.id==='DC'){
       calculation=calculation.toString().slice(0,-1)
    } else if(e.target.id==='00'){
        calculation+='00'
    }
    localStorage.setItem('storage',calculation)
    if(e.target.id==='='){
        localStorage.getItem('storage')
        calculation=eval(calculation)
        Calculatenumber.innerHTML=eval(calculation)
    }else{
    Calculatenumber.innerHTML=calculation
    }
})
window.addEventListener('keydown',function(e){
    console.log(e.key)
    if(e.key==='1'){
        calculation+='1'
        }else if(e.key==='2'){
            calculation+='2'
        } else if(e.key==='3'){
            calculation+='3'
        } else if(e.key==='4'){
            calculation+='4'
        } else if(e.key==='5'){
            calculation+='5'
        } else if(e.key==='6'){
            calculation+='6'
        } else if(e.key==='7'){
            calculation+='7'
        } else if(e.key==='8'){
            calculation+='8'
        } else if(e.key==='9'){
            calculation+='9'
        } else if(e.key==='0'){
            calculation+='0'
        } else if(e.key==='+'){
            calculation+='+'
        } else if(e.key==='-'){
            calculation+='-'
        } else if(e.key==='*'){
            calculation+='*'
        } else if(e.key==='/'){
           calculation+='/'
        } else if(e.key==='.'){
            calculation+='.'
        }
        if(e.key==='Enter'){
            calculation=eval(calculation)
            Calculatenumber.innerHTML=eval(calculation)
        }else{
        Calculatenumber.innerHTML=calculation
        }
        
})