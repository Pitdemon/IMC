const form = document.querySelector('form')
const textoNome = document.getElementById('nome')
const textoDescricao = document.getElementById('descricao')
const textoAltura = document.getElementById('altura')
const textoPeso = document.getElementById('peso')

form.onsubmit = (evento) => {
    const inputs = new FormData(evento.target)

    const nome = inputs.get('nome')
    const peso = inputs.get('peso')
    const altura = inputs.get('altura')
    const descricao = inputs.get('descricao')
    
    textoNome.textContent = `Jogador: ${nome}`
    textoDescricao.textContent = `Descrição: ${descricao}`
    textoAltura.textContent = `Altura: ${altura}`
    textoPeso.textContent = `Peso corporal: ${peso}`

    return false

};

