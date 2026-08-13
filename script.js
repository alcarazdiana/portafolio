// =====================================================
// MENÚ RESPONSIVE
// =====================================================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuBtn.querySelector("i");


    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



// =====================================================
// CERRAR MENÚ AL SELECCIONAR
// =====================================================

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });



// =====================================================
// MODO OSCURO
// =====================================================

const themeBtn =
    document.getElementById("theme-btn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");


    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});



// =====================================================
// RECUPERAR TEMA
// =====================================================

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    const icon =
        themeBtn.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}



// =====================================================
// ANIMACIONES AL HACER SCROLL
// =====================================================

const animatedElements =
    document.querySelectorAll(
        ".strength-card, .education-card, .experience-wrapper, .skills-box, .project-card, .contact-highlight"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach(element => {

    observer.observe(element);

});



// =====================================================
// AÑO AUTOMÁTICO
// =====================================================

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}