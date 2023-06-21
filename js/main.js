const form = document.getElementById('form-atividade');
const nomes = [];
const numeros = [];

$(document).ready(function() {
    $('#numero-contato').mask('(00)00000-0000')
})

let  linhas = ''; 

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha(); 
    atualizaTabela();
    apagaTfoot()
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeContato.value)) {
        alert(`${inputNomeContato.value} já está na agenda, insira outro nome`);
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
        
        let linha = '<tr>'; 
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = ''; 
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function apagaTfoot() {
    document.getElementById('sem-contatos').style.display = 'none';
}
