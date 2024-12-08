

const images = document.querySelectorAll(".slides img");
let imageIndex = 0;
let intervalId = null; 

//call the function when the DOM loads, not initially 
document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {
    if (images.length > 0) {
        images[imageIndex].classList.add("displayImage");
        intervalId = setInterval(showSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= images.length) {
        imageIndex = 0;
    }
    else if (index < 0) {
        imageIndex = images.length - 1;
    }
    images.forEach(image => {
        image.classList.remove("displayImage");
    });
    images[imageIndex].classList.add("displayImage");
}

function prevSlide() {
    clearInterval(intervalId);
    imageIndex --;
    showSlide(imageIndex);
}

function nextSlide() {
    imageIndex ++;
    showSlide(imageIndex);
}