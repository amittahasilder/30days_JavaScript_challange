/* ==========================================
   animation.js
   Premium Portfolio Animations
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll(".reveal").forEach(el => {

        observer.observe(el);

    });

    /* =====================================
       3D TILT PROJECT CARDS
    ===================================== */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 20;

            const rotateX = ((0.5 - y / rect.height)) * 20;

            card.style.transform =

                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =

                "perspective(1000px) rotateX(0) rotateY(0)";

        });

    });

    /* =====================================
       MAGNETIC BUTTONS
    ===================================== */

    document.querySelectorAll(".btn,.btn-outline").forEach(btn => {

        btn.addEventListener("mousemove", e => {

            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;

            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform =
                `translate(${x * .2}px,${y * .2}px)`;

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translate(0,0)";

        });

    });

    /* =====================================
       FLOATING ELEMENTS
    ===================================== */

    document.querySelectorAll(".float").forEach((item, index) => {

        item.style.animation =

            `float ${4 + index}s ease-in-out infinite`;

    });

    /* =====================================
       PARALLAX
    ===================================== */

    window.addEventListener("scroll", () => {

        const value = window.scrollY;

        document.body.style.backgroundPositionY =

            value * 0.2 + "px";

    });

    /* =====================================
       SKILL BAR
    ===================================== */

    const bars = document.querySelectorAll(".bar span");

    const barObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const width = entry.target.dataset.width ||
                    entry.target.style.width;

                entry.target.style.width = "0";

                setTimeout(() => {

                    entry.target.style.transition = "2s";

                    entry.target.style.width = width;

                }, 100);

            }

        });

    });

    bars.forEach(bar => {

        barObserver.observe(bar);

    });

    /* =====================================
       COUNTERS
    ===================================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.dataset.target;

            let count = +counter.innerText;

            const speed = target / 150;

            if (count < target) {

                counter.innerText = Math.ceil(count + speed);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

    /* =====================================
       MOUSE SPOTLIGHT
    ===================================== */

    const spotlight = document.createElement("div");

    spotlight.id = "spotlight";

    document.body.appendChild(spotlight);

    document.addEventListener("mousemove", e => {

        spotlight.style.left = e.clientX + "px";

        spotlight.style.top = e.clientY + "px";

    });

    /* =====================================
       NAVBAR BLUR
    ===================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background =
                "rgba(10,10,10,.7)";

            header.style.backdropFilter =
                "blur(20px)";

        } else {

            header.style.background =
                "rgba(255,255,255,.05)";

        }

    });

    /* =====================================
       IMAGE HOVER SCALE
    ===================================== */

    document.querySelectorAll(".project-card img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.08)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    /* =====================================
       FADE-IN SECTIONS
    ===================================== */

    const sections = document.querySelectorAll("section");

    const fadeObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = 1;

                entry.target.style.transform =

                    "translateY(0)";

            }

        });

    });

    sections.forEach(section => {

        section.style.opacity = 0;

        section.style.transform =

            "translateY(60px)";

        section.style.transition =

            "1s ease";

        fadeObserver.observe(section);

    });

});