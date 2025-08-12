
// Initialize EmailJS
emailjs.init("pMxSihy3OHx2E_pOC");

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            emailjs.sendForm('samanthawhee', 'template_hpzo3j2', this)
                .then(() => {
                    alert('Message sent successfully!');
                }, (error) => {
                    alert('Failed to send message. Error: ' + JSON.stringify(error));
                });
        });
    }

    // Initialize AOS
    if (AOS) {
        AOS.init({
            once: false,    // animation happens only once
            duration: 1000, // duration in milliseconds
        });
    }
});