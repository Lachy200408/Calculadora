const eventoEval = new Event('eval');
let stringOperacion='0';

window.addEventListener('load',()=>{
    resetText();
    
    for(let i=0;i<19;i++){
        document.querySelector('.cajaBotones').children[i].addEventListener('click',handlerButton,false);
    }
},false);

window.addEventListener('eval',()=>{
    let stringAux = stringOperacion;
    
    //Cambiar signos de multiplicacion y division
    stringAux = stringAux.replace(/×/g,'*');
    stringAux = stringAux.replace(/÷/g,'/');
    
    //Quitar los signos en la ultima posicion del string
    if(isNaN(lastChar(stringAux))){
        stringAux = removeLastChar(stringAux);
    }
    
    //Cambiar la funcion %
    if(stringAux.includes('%')){
        stringAux = stringAux.replace('%','*');
        stringAux += '/100';
    }
    
    //Si solo queda un signo da 0
    if(stringAux.length<2 && isNaN(stringAux[0])){
        stringAux='0';
    }
    
    document.querySelector('#preResult').innerHTML = eval(stringAux);
},false);