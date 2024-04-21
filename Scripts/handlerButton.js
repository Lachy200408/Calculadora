function handlerButton(e){
    const cajaOperaciones = document.querySelector('#textOperaciones'),
          boton = e.target;
    
    //Actua segun el boton presionado
    if(boton.className === 'btnNum'){
        if(stringOperacion==='0'){
            stringOperacion = boton.innerHTML;
        }
        else{
            stringOperacion+=boton.innerHTML;
        }
        
        window.dispatchEvent(eventoEval);
    }
    else if(boton.value<17 && boton.value>10){
        //Colocar el menos delante del x o /
        if((lastChar(stringOperacion)=='×' || lastChar(stringOperacion)=='÷') && boton.value==12){
            stringOperacion+='-';
        }
        //Cambiar el signo si se presionan dos signos consecutivamente
        else if(isNaN(lastChar(stringOperacion)) && boton.value!=15 && !stringOperacion=='-'){
            stringOperacion = changeLastChar(stringOperacion,boton.innerHTML);
        }
        //Colocar 0. cuando se presiona . y esta vacio el string
        else if(boton.value==15 && stringOperacion==''){
            stringOperacion='0.';
        }
        //Colocar el menos cuando es igual a 0
        else if(boton.value==12 && stringOperacion=='0'){
            stringOperacion='-';
        }
        //Evitar el uso de %
        else if(boton.value==16){
            if(stringOperacion.includes('+') ||
               stringOperacion.includes('-') ||
               stringOperacion.includes('×') ||
               stringOperacion.includes('÷') ||
               stringOperacion.includes('%')){}
            else{
                stringOperacion+='%';
            }
        }
        else{
            if(!stringOperacion.includes('%')){
                if(!isNaN(lastChar(stringOperacion))){
                    stringOperacion+=boton.innerHTML;
                }
            }
        }
        
        //No coloca el . despues de un signo ni lo hace cuando el numero ya tiene decimales
        if((isNaN(stringOperacion[stringOperacion.length-2]) || lastNumHasDec(stringOperacion)) && lastChar(stringOperacion)=='.'){
            stringOperacion = removeLastChar(stringOperacion);
        }
    }
    else if(boton.value == 17){
        stringOperacion = '0';
        
        window.dispatchEvent(eventoEval);
    }
    else if(boton.value == 18){
        stringOperacion = removeLastChar(stringOperacion);
        
        if(stringOperacion===''){
            stringOperacion='0';
        }
        
        window.dispatchEvent(eventoEval);
    }
    else if(boton.value == 19){
        stringOperacion = document.querySelector('#preResult').innerHTML;
    }
    
    cajaOperaciones.innerHTML = stringOperacion;
}