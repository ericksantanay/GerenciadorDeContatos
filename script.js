// Aonde vai aparecer o conteudo
const r = document.getElementById('res')

// Aonde eu vou guardar a os objetos 
let bancoDeDados = []

// Indice
indice = 0 

// Função de adicionar 
function adicionar() {
    // Input nome
    let nome = document.getElementById('inome').value
    // Input Telefone
    let telefone = Number(document.getElementById('itelefone').value)


    // Para não repetir as listas
    r.innerHTML = ''

    // Objeto, aqui é tipo os itens dentro de um pacotinho e o array é o armario
    let dados = {
        Nome: nome,
        Telefone: telefone
    }

     // Validação 
    if (nome ==='' || telefone === '') {
        alert('Preencha os Campos abaixo.')
        r.innerHTML = ''
    }


    // Metodo Push, serve para eu pegar o bjeto e por no array a minha "lista"
    bancoDeDados.push(dados)
    

    // Laço de repetição que vai percorrer o array até achar o indice
    bancoDeDados.forEach((item, indice) => {
        r.innerHTML += `<div>
        <p>Nome: ${item.Nome} <br> Telefone: ${item.Telefone}  
        <button onclick="apagar(${indice})"><span class="material-symbols-outlined">delete</span></button></p>
        </div>`
    });

   
    // Aqui limpa o campo apos o usuario digitar
    document.getElementById('inome').value = ''
    document.getElementById('itelefone').value = ''

}

    function apagar(indice) {
        r.innerHTML = ''
        // Aqui eu estou sinalizando o indice que vai ser apagado
        bancoDeDados.splice(indice, 1)

        // 🔁 Depois de apagar, repetimos o forEach pra mostrar o que sobrou.
        bancoDeDados.forEach((item, indice) => {
        r.innerHTML += `<div>
        <p>Nome: ${item.Nome} <br> Telefone: ${item.Telefone}  
        <button onclick="apagar(${indice})"><span class="material-symbols-outlined">delete</span></button></p>
        </div>`
    });

      

    }