const dados = require("./dados");

const totalRespostas = () =>{
    return dados.length;
}

const mediaIdade = (opiniao) => {
    let grupoOpiniao = dados.filter((filtro) => {
        return filtro.opiniao === opiniao;
    })
    
    let totalEntrada = grupoOpiniao.length;

    let totalIdade = grupoOpiniao.reduce((acumulador, idade) => {
        return acumulador + idade.idade;
    }, 0);

    return totalIdade / totalEntrada;
}



const totalOpiniao = (opiniao) => {
    let filtraOpiniao = dados.filter((filtro) => {
        return filtro.opiniao === opiniao;
    })


    return filtraOpiniao.length
}

const percentualOpiniao = (opiniao) => {
    let total = totalOpiniao(opiniao)

    let percentual = (total / totalRespostas()) * 100;
    return percentual;
}

console.log(`A media de idade das pessoas que responderam otimo é igual a : ${mediaIdade(3)}.`)
console.log(`Um total de ${totalOpiniao(1)} responderam regular.`)
console.log(`Um total de ${percentualOpiniao(2)} % das pessoas responderam bom entre as pessoas analsadas`)
