const slides = document.querySelectorAll(".slide")
const setaAvancar = document.getElementById("seta-avancar")
const setaVoltar = document.getElementById("seta-voltar")

let imagemAtual = 0

setaAvancar.addEventListener("click", function (){
    if(imagemAtual == slides.length -1){
        return
    }

    apagarUltimoSlide()
    imagemAtual++
    removeOUadicionaSetas()
    mostrarProximoSlide()
})

function apagarUltimoSlide(){
    let imagemAtual = document.querySelector(".mostrar")
    imagemAtual.classList.remove("mostrar")
}
function mostrarProximoSlide(){
    slides[imagemAtual].classList.add("mostrar")
}
setaVoltar.addEventListener("click", function (){
    if(imagemAtual == 0){
        return
    }
    apagarUltimoSlide()
    imagemAtual--
    removeOUadicionaSetas()
    mostrarProximoSlide()
})
function removeOUadicionaSetas(){
    if(imagemAtual !== 0){
        setaVoltar.classList.remove("opacidade")
    }else{
        setaVoltar.classList.add("opacidade")
    }

    if(imagemAtual == 3){
        setaAvancar.classList.add("opacidade")
    }else{
        setaAvancar.classList.remove("opacidade")
    }
}
