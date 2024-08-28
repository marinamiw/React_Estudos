import React, { useState } from 'react';


function Contador(){

   
const [contador,setContador] = useState(0) //inicia o valor com variavel 0

const incrementar = () =>{
    
    if(contador === 10){
        setContador(0) // pra que quando chegue a 10, ele resete pra 0 e comece a contar novamente
        console.log("contador Resetado")
    }
    else{
        setContador(contador+1)
    }
}

return (

        <div>
            <p> voce clicou {contador} vezes </p>
            <button onClick={incrementar}>
                Clique aqui
            </button>

        </div>


)

}

export default Contador