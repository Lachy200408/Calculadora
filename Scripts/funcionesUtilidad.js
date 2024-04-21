function lastChar(string){
    return string.charAt(string.length-1);
}

function lastElement(array){
    return array[array.length-1];
}

function lastPosition(array){
    return array.length-1;
}

function changeLastChar(string,_char){
    let arrayAux = string.split('');
    arrayAux[lastPosition(arrayAux)]=_char;
    return arrayAux.join("");
}

function removeLastChar(string){
    let arrayAux = string.split('');
    
    if(arrayAux.length == 1){
        return '';
    }
    
    arrayAux.pop();
    return arrayAux.join("");
}

function lastNumHasDec(string){
    //Remover los signos hasta llegar ultimo numero
    while(isNaN(lastChar(string))){
        string=removeLastChar(string);
    }
    
    //Tomar el ultimo numero
    let inicioSlice=0;
    for(let i=string.length-1; i>0; i--){
        if(string[i]=='+' ||
           string[i]=='-' ||
           string[i]=='%' ||
           string[i]=='×' ||
           string[i]=='÷'){
               inicioSlice=++i;
               break;
           }
    }
    
    let num=string.slice(inicioSlice,string.length);
    
    if(num.includes('.')){
        return true;
    }
    else{
        return false;
    }
}

function resetText(){
    document.querySelector('#textOperaciones').innerHTML=0;
    document.querySelector('#preResult').innerHTML=0;
}