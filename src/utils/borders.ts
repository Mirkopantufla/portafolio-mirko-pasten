import type { HTMLAttributeAnchorTarget } from "react";

// const contenedor = document.getElementById("main-container") as HTMLElement
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_links');


const contenedor = document.getElementById("main-container") as HTMLElement;

window.onload = function () {
    const links = document.querySelectorAll(".nav_links");
    const pathname = window.location.pathname === "/" ? "/#quien-soy" : window.location.pathname

    links.forEach(link => {
        let first = link.firstElementChild as HTMLElement
        if (pathname.includes(first.getAttribute('href') as string)) {
            link.classList.add('selected-link')
        }
    });

}

contenedor.addEventListener("scroll", function (e) {

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const offsetY = contenedor.scrollTop;

        if (offsetY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id') as string;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('selected-link');
        let arcor = link.firstElementChild as HTMLElement
        let stringLink = arcor.getAttribute('href') as HTMLAttributeAnchorTarget

        if (stringLink.includes(currentSection)) {
            link.classList.add('selected-link');
        }
    })
})
