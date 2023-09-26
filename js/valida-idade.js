export default function eMaiorDeIdade(campo){
    const dataNascimento = new Date(campo.value);
    if (!validaidade(dataNascimento)) {
        campo.setCustomValidity('O usuario não é maior de idade');
    }
}

function validaidade(data){
    const dataAtual = new Date();
    const datamais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= datamais18;
}