//показ следующего слайда
function showNextSlide() {
    const slides = document.querySelectorAll(".slider img");
    const currentSlideIndex = Array.from(slides).findIndex(slide => slide.style.display !== "none");
    const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    slides[currentSlideIndex].style.display = "none";
    slides[nextSlideIndex].style.display = "block";
}

// показ предыдущего слайда
function showPrevSlide() {
    const slides = document.querySelectorAll(".slider img");
    const currentSlideIndex = Array.from(slides).findIndex(slide => slide.style.display !== "none");
    const prevSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    
    slides[currentSlideIndex].style.display = "none";
    slides[prevSlideIndex].style.display = "block";
}

// обработчики событий для кнопок
document.getElementById("prevBtn").addEventListener("click", showPrevSlide);
document.getElementById("nextBtn").addEventListener("click", showNextSlide);

// показываем первый слайд
document.querySelector(".slider img").style.display = "block";
