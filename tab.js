const buttons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target = button.dataset.tab;

        // remove active
        buttons.forEach(btn => btn.classList.remove("active"));
        panels.forEach(panel => panel.classList.remove("active"));

        // activate selected
        button.classList.add("active");
        document.getElementById(target).classList.add("active");

    });

});