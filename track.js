document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            gtag('event', 'button_click', {
                button_id: button.id || "no_id",
            });
        });
    });
});