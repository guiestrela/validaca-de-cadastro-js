export default function eMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    validaidade(dataNascimento)

    console.log(validaidade(dataNascimento))
}

function validaidade(data){
    const dataAtual = new Date();
    const datamais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= datamais18;
}