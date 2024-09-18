let nota = parseFloat(prompt("Ingrese su nota "));

//Realizar procedimiento
if (nota < "75"){
    document.write(" Usted Necesita Mejorar ");
}
else if (nota < "80"){
    document.write("Bueno ");
}
else if (nota < "91"){
    document.write("Muy Bueno ");
}
else if (nota <= "100"){
    document.write("Usted esta en Excelencia Academica ");
}
else {
    document.write("Ingrese un valor");
}