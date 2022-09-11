// function hideContent() {
//     var scrollCOntent = document.getElementsByClassName("animate__animated");
//     scrollCOntent.classList.add("animate__fadeOutLeftBig");
// }

// hideContent();

function reveal() {
    var reveals = document.querySelectorAll(".animate__animated");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 400;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animate__fadeInLeft");
        reveals[i].classList.remove("animate__fadeOutLeftBig");
        } else {
        reveals[i].classList.remove("animate__fadeInLeft");
        reveals[i].classList.add("animate__fadeOutLeftBig");
        }
    }
}
  
window.addEventListener("scroll", reveal);