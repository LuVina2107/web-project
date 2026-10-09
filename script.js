// console.log("hello world");

// for(let i=1; i<5;i++){
//     console.log(`hello ${i}`);
// }
console.log("Hello World!");

for (let i = 0; i < 5; i++) {
    console.log("this is is iteration number " + i);
}

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    function updateThemeButton() {
        const isDark = document.body.classList.contains("dark");

        themeToggle.textContent = isDark
            ? "Switch to light mode"
            : "Switch to dark mode";
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark");
        updateThemeButton();
    });

    updateThemeButton();
}