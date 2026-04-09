window.addEventListener("load", () => {

    const track = document.querySelector(".carousel-track");
    let slides = Array.from(document.querySelectorAll(".carousel-slide"));

    // duplicate slides for infinite loop
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    let position = 0;
    const speed = 0.4; // smaller = slower

    function animate() {

        position += speed;

        const slideWidth = slides[0].offsetWidth + 20;

        if (position >= slideWidth * slides.length) {
            position = 0;
        }

        track.style.transform = `translateX(${-position}px)`;

        requestAnimationFrame(animate);
    }

    animate();

});