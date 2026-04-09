document.addEventListener('DOMContentLoaded', () => {

    // ✅ NAV TOGGLE
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // ✅ EMAIL
    const form = document.getElementById('contact-form');
    if (form && typeof emailjs !== "undefined") {

        emailjs.init("pMxSihy3OHx2E_pOC");

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            emailjs.sendForm('samanthawhee', 'template_hpzo3j2', this)
                .then(() => alert('Message sent successfully!'))
                .catch((error) => alert('Failed: ' + JSON.stringify(error)));
        });
    }

    // ✅ AOS
    if (typeof AOS !== "undefined") {
        AOS.init({
            once: false,
            duration: 1000,
        });
    }

});