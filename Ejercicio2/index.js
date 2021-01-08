const cadena=prompt("Ingrese una cadena de texto");

const textoInvertido = (texto)=>{
    let textoInv ="";
    for(let i = texto.length; i >= 0; i--) textoInv += texto[i];
    console.log(textoInv);
};

textoInvertido(cadena);