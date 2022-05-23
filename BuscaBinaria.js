const minha_lista = [1,3,5,7,9];
var alto, baixo, meio, item, chute;

function pesquisa_binaria(lista,item){
    
    baixo = 0;
    alto = lista.length - 1;
    while(baixo<=alto){
        meio = Math.round((baixo+alto)/2);
        chute = lista[meio];

        
        if (chute == item){
                
           console.log(meio);
           return 0;
        }
        if  (chute>item){
            alto = meio-1;
        }
        else{
            baixo = meio+1;
        }
    }
    console.log("número não consta no array")
    return 1;
}

pesquisa_binaria(minha_lista,1)