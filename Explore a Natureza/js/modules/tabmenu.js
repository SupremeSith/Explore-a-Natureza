export default function tabMenuInit(){
    const imagens = document.querySelectorAll('.js-list li')
    const textos = document.querySelectorAll('.js-content section')

    function ativarConteudo (indice){
        textos.forEach((item) => {
            item.classList.remove('active')
        })
        textos[indice].classList.add('active')
    }

    imagens.forEach((item, indice) =>{
        item.addEventListener('click',() =>{
            ativarConteudo(indice)
        })
    })
}