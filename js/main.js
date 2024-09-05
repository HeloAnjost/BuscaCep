//criar a função para coletar o cep 

function Coletar(){
    let input = document.querySelector('.input-cep').value
    console.log(input)
    Dados(input)
}
//funcao para consumir api Via cep
 async function Dados(input){
    let dados = await fetch(`https://viacep.com.br/ws/${input}/json/`).then(response => response.json())
    console.log(dados)
    ExibirDados(dados)

}
//funçao Inserir dados na tela
function ExibirDados(dados){
    document.querySelector('.estado').value = dados.uf
    document.querySelector('.cidade').value = dados.localidade
    document.querySelector('.endereco').value = dados.logradouro
    document.querySelector('.ddd').value = dados.ddd
}

//funcao limpar
function limparFormulario(dados) {
    document.querySelector('.estado').value = ''
    document.querySelector('.cidade').value = ''
    document.querySelector('.endereco').value = ''
    document.querySelector('.ddd').value = ''
}