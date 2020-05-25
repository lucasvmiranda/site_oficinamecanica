let = slidexIndex = 0
const slides = document.querySelectorAll('.mySlides')

function plusSlides(n) {
    mudarSlide(slidexIndex += n)
}

function mudarSlide(n){
    if(n > slides.length ){slidexIndex = 1}
    if(n < 1){ slidexIndex = slides.length}

    for(let slide of slides){
        slide.classList.add('remo')
    }

    slides[slidexIndex - 1 ].classList.remove('remo')

}

function showSlides(){

    for(let slide of slides){
        slide.classList.add('remo')
    }

    slidexIndex++

    if(slidexIndex > slides.length ){slidexIndex = 1 }

    slides[slidexIndex - 1 ].classList.remove('remo')

    setTimeout(showSlides, 4000)

}

showSlides()
