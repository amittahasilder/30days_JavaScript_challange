/* ==========================================
   cursor.js
   Premium Custom Cursor
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Disable custom cursor on touch devices
    if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
    ) {
        return;
    }

    // Cursor
    const cursor = document.createElement("div");
    cursor.className = "cursor";

    // Follower
    const follower = document.createElement("div");
    follower.className = "cursor-follower";

    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let followerX = mouseX;
    let followerY = mouseY;

    // Mouse Move
    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";

    });

    // Smooth follower animation
    function animateFollower() {

        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";

        requestAnimationFrame(animateFollower);

    }

    animateFollower();

    // Hover Effect
    const hoverElements = document.querySelectorAll(
        "a, button, .btn, .project-card, .profile-card, input, textarea"
    );

    hoverElements.forEach((item) => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("cursor-hover");
            follower.classList.add("cursor-hover");

        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("cursor-hover");
            follower.classList.remove("cursor-hover");

        });

    });

    // Click Animation
    window.addEventListener("mousedown", () => {

        cursor.classList.add("cursor-click");

        setTimeout(() => {

            cursor.classList.remove("cursor-click");

        }, 200);

    });

    // Hide when mouse leaves window
    document.addEventListener("mouseleave", () => {

        cursor.style.opacity = "0";
        follower.style.opacity = "0";

    });

    document.addEventListener("mouseenter", () => {

        cursor.style.opacity = "1";
        follower.style.opacity = "1";

    });

    // Magnetic Buttons
    const magneticItems = document.querySelectorAll(".btn, .btn-outline");

    magneticItems.forEach((item) => {

        item.addEventListener("mousemove", (e) => {

            const rect = item.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            item.style.transform =
                `translate(${x * 0.2}px, ${y * 0.2}px)`;

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "translate(0,0)";

        });

    });

});