const handleCpf = (value, cb) => {

    let newValue = value
        .replace(/\D/g, '')                   //Só entra digito
        .replace(/(\d{3})(\d)/, "$1.$2")      //000.
        .replace(/(\d{3})(\d)/, "$1.$2")       //000.000.
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2") //000.000.000-00

    cb(newValue)
}


const handleContato = (value) => {

    let newValue;

    if (value.length > 14) {
        newValue = value
            .replace(/\D/g, "")                 //Remove tudo o que não é dígito
            .replace(/^(\d{2})(\d{1})(\d)/g, "($1) $2 $3") //Parenteses
            .replace(/(\d{4})(\d)/, "$1-$2") //ifem em 5
    }
    else {
        newValue = value
            .replace(/\D/g, "")                 //Remove tudo o que não é dígito
            .replace(/^(\d\d)(\d)/g, "($1) $2")  //Parenteses
            .replace(/(\d{4})(\d)/, "$1-$2") //ifem em 5
    }


    return newValue
}

const handleStringOnly = (value, cb) => {

    let newValue = value
        .replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g, "") //Remove tudo que não for letra
        
    cb(newValue)
}



export { handleCpf, handleContato, handleStringOnly }
