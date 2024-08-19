let slideIndex = 0;

function showSlide(index) {
    const slides = document.getElementsByClassName('slide');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = totalSlides - 1;
    }
    
    const offset = -slideIndex * 100;
    document.getElementById('slider').style.transform = `translateX(${offset}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

document.getElementById('next').addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

showSlide(slideIndex);
