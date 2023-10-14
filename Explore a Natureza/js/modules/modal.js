export default function initModal(){
    const form = document.querySelector("js-modal form")
    const dados = {}

    function pegarValorForm(event){
        dados[event.target.name] = event.target.value
        console.log(dados)
        ativarConteudo(indice)
    }
    form.addEventListener('change', pegarValorForm)

    localStorage.setItem('nome', 'Rafael')
    const nome = localStorage.getItem('nome')
    console.log(nome)

    function ativarConteudo (indice){
        form.forEach((item) => {
            item.classList.remove('active')
        })
        form[indice].classList.add('active')
    }
}