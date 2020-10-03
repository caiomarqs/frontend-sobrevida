const validation = (nome, email, cpf, password, rPassword, uf, cidade, familiares, depoimento, accept, cb) => {

    const thisErrors = []

    const regxEmail = /([a-zA-Z\d.].+)@([a-zA-Z\d].+)([.][a-z]{2,4})([.][a-z]{2,4})?/i
    const regxPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/i

    if (nome.trim() === "") {
        thisErrors.push('O nome não pode estar nulo')
    }
    else if (nome.trim().length < 4) {
        thisErrors.push('O nome deve conter no minimo 4 letras')
    }
    if (!regxEmail.test(email)) {
        thisErrors.push('Inisra um email válido')
    }
    if (!regxPassword.test(password)) {
        thisErrors.push('A senha deve ter numeros, letras e 6 caracteres')
    }
    if (password !== rPassword) {
        thisErrors.push('A suas senhas não condizem')
    }
    if (uf === 0) {
        thisErrors.push('Insira um estado valido')
    }
    if (cidade.trim() === "") {
        thisErrors.push('O campo de cidade não pode estar nulo')

    }
    if (!validateCpf(cpf)) {
        thisErrors.push('Cpf invalido')
    }

    Object.entries(familiares).forEach(([key, familiar]) => {
        if (familiar.nome.trim() === "") {
            thisErrors.push(`O nome do ${key + 1}º familiar não pode estar nulo`)
        }
        else if (familiar.nome.trim().length < 4) {
            thisErrors.push(`O nome do ${key + 1}º familiar não pode estar nulo`)
        }

        if (familiar.parentesco === 0 || familiar.parentesco === '') {
            thisErrors.push(`Selecione um parentesco valido para o ${key + 1}º familiar`)
        }

        if (familiar.parentesco === "OUTRO" && familiar.nome.trim() === "") {
            thisErrors.push(`A descrição do parentesco não pode estar nula no ${key + 1}º familiar`)
        }

        if (familiar.parentesco === "OUTRO" && familiar.nome.trim() < 4) {
            thisErrors.push(`A descrição do parentesco é muito curta no ${key + 1}º familiar`)
        }

    })

    if(!accept) {
        thisErrors.push(`Você precisa aceitar em ser um doador`)
    }
    cb(thisErrors)
    return thisErrors.length === 0
}

const validateCpf = (strCpf) => {
    let Soma;
    let Resto;
    if (strCpf.trim().length !== 0) {
        let cpf = strCpf
            .replace('.', "")
            .replace('.', "")
            .replace('-', "")

        Soma = 0;
        if (cpf === "00000000000") return false;

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(cpf.substring(9, 10))) return false;

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(cpf.substring(10, 11))) return false;
        return true;
    }

    return false
}


export { validation }