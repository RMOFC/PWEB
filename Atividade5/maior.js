function maior (num1, num2, num3){

    if(num1 == num2 && num1 == num3)
        return alert("Todos os números são iguais");
    else
        if(num2 == num3)
            return alert("Segundo e terceiro números são iguais");
    else
        if(num1 == num3)
        return alert("Primeiro e terceiro números são iguais");
    else
        if(num1 == num2)
        return alert("Primeiro e segundo números são iguais");
    else    
        if(num1 > num2 && num1 > num3)
        return alert("Primeiro número é maior: " + num1);
    else
        if(num2 > num1 && num2 > num3)
        return alert("Segundo número é maior: " + num2);
    else
        if(num3 > num1 && num3 > num2)
        return alert("Terceiro número é maior: " + num3);
}