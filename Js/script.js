// barra de menu
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Buscar locais no mapa
function buscarPontos(){
    let dropwdown = document.getElementById('escolhas')

    let braile = (dropwdown.value == 'Deficiente Visual')
    let cadeira = (dropwdown.value == 'Deficiente Físico (cadeirantes)')
    let audicao = (dropwdown.value == 'Deficiente Auditivo')
    const maps = document.getElementById('Maps')
    let mapImg = document.getElementById('imgMap')
    mapImg.style.maxWidth = "80vw"
    mapImg.style.maxHeight = "60vh"

    if (cadeira){
        if(audicao){
            if(braile){
                //Cadeira Audicao Braile
                mapImg.src = "../img/imgCadeiraAudicaoBraile.jpg"
            }
            else{
                // Cadeira Audicao
                mapImg.src = "../img/imgCadeiraAudicao.jpg"
            }
        }
        else if (braile)
        {
            // Cadeira Braile
            mapImg.src = "../img/imgCadeiraBraile.jpg"
        }
        else{
            // Cadeira
            mapImg.src = "../img/imgCadeira.jpg"
        }
    }
    else if (audicao)
    {
        if (braile)
        {
            // Audicao Braile
            mapImg.src = "../img/imgAudicaoBraile.jpg"
        }
        else
        {
            // Audicao
            mapImg.src = "../img/imgAudicao.jpg"
        }
    }
    else if (braile)
    {
        // Braile
        mapImg.src = "../img/imgBraile.jpg"
    }
    else
    {
        // Mapa solo
        mapImg.src = "../img/imgMapa.jpg"
    }
}