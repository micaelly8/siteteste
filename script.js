// ========================================
// ALTERNAR TEMA CLARO/ESCURO
// ========================================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    if (isDark) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


// ========================================
// MANTER TEMA ESCOLHIDO
// ========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


// ========================================
// ANO AUTOMÁTICO NO RODAPÉ
// ========================================

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();


// ========================================
// ANIMAÇÃO DAS BARRAS DE HABILIDADES
// ========================================

const progressBars = document.querySelectorAll(".progress-bar");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width = bar.style.width;

                bar.style.width = "0%";

                setTimeout(() => {
                    bar.style.transition = "width 1.2s ease";
                    bar.style.width = width;
                }, 100);

                observer.unobserve(bar);
            }
        });

    },
    {
        threshold: 0.5
    }
);


progressBars.forEach((bar) => {
    observer.observe(bar);
});


// ========================================
// ANIMAÇÃO DAS SEÇÕES AO APARECEREM
// ========================================

const sections = document.querySelectorAll(".section");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                sectionObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});
