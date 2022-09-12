function reveal() {
    var reveals = document.querySelectorAll(".animate");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 300;

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