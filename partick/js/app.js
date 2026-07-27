/* ==========================================
   app.js
   Premium Portfolio JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1800);

    });

    /* ==========================
       TYPING EFFECT
    ========================== */

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [
            "Full Stack Developer",
            "JavaScript Developer",
            "UI Designer",
            "Problem Solver",
            "AI Enthusiast"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const current = words[wordIndex];

            if (!deleting) {

                typing.textContent = current.substring(0, charIndex++);

                if (charIndex > current.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1200);

                    return;

                }

            } else {

                typing.textContent = current.substring(0, charIndex--);

                if (charIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) wordIndex = 0;

                }

            }

            setTimeout(typeEffect, deleting ? 40 : 80);

        }

        typeEffect();

    }

    /* ==========================
       THEME TOGGLE
    ========================== */

    const themeBtn = document.getElementById("theme-btn");

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("light-theme");

            themeBtn.textContent =
                document.body.classList.contains("light-theme")
                    ? "☀️"
                    : "🌙";

        });

    }

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       STICKY HEADER
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /* ==========================
       SCROLL PROGRESS
    ========================== */

    const progress = document.createElement("div");

    progress.id = "progress-bar";

    document.body.appendChild(progress);

    window.addEventListener("scroll", () => {

        const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const value = (window.pageYOffset / total) * 100;

        progress.style.width = value + "%";

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const reveals = document.querySelectorAll(".reveal");

    function revealItems() {

        const trigger = window.innerHeight * 0.85;

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < trigger) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealItems);

    revealItems();

    /* ==========================
       SCROLL SPY
    ========================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    function scrollSpy() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", scrollSpy);

    /* ==========================
       COUNTER
    ========================== */

    const counters = document.querySelectorAll(".counter");

    const speed = 200;

    function startCounter() {

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const update = () => {

                const increment = target / speed;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        });

    }

    startCounter();

    /* ==========================
       SKILL BAR
    ========================== */

    const bars = document.querySelectorAll(".bar span");

    bars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.transition = "2s";

            bar.style.width = width;

        }, 400);

    });

    /* ==========================
       BACK TO TOP
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "topBtn";

    document.body.appendChild(topBtn);

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    window.addEventListener("scroll", () => {

        topBtn.style.display =
            window.scrollY > 500 ? "block" : "none";

    });

    /* ==========================
       CONTACT FORM
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", e => {

            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    input.style.borderColor = "red";

                    valid = false;

                } else {

                    input.style.borderColor = "#8B5CF6";

                }

            });

            if (valid) {

                alert("Message Sent Successfully!");

                form.reset();

            }

        });

    }

});