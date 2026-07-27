/* ==========================================
   particles.js
   Premium Interactive Particle Background
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Create Canvas
    const canvas = document.createElement("canvas");
    canvas.id = "particle-canvas";

    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Mouse
    const mouse = {
        x: null,
        y: null,
        radius: 120
    };

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Class
    class Particle {

        constructor() {

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.radius = Math.random() * 3 + 1;

            this.speedX = (Math.random() - 0.5) * 1.2;
            this.speedY = (Math.random() - 0.5) * 1.2;

            this.color = `hsla(${260 + Math.random() * 40},100%,70%,0.9)`;

        }

        update() {

            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width)
                this.speedX *= -1;

            if (this.y < 0 || this.y > canvas.height)
                this.speedY *= -1;

            if (mouse.x !== null) {

                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {

                    this.x += dx / 20;
                    this.y += dy / 20;

                }

            }

        }

        draw() {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle = this.color;

            ctx.shadowBlur = 20;
            ctx.shadowColor = "#8B5CF6";

            ctx.fill();

        }

    }

    const particles = [];

    const PARTICLE_COUNT = 120;

    for (let i = 0; i < PARTICLE_COUNT; i++) {

        particles.push(new Particle());

    }

    function connectParticles() {

        for (let a = 0; a < particles.length; a++) {

            for (let b = a; b < particles.length; b++) {

                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;

                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {

                    ctx.beginPath();

                    ctx.strokeStyle =
                        `rgba(139,92,246,${1 - distance / 120})`;

                    ctx.lineWidth = 1;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();

                }

            }

        }

    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach((particle) => {

            particle.update();

            particle.draw();

        });

        connectParticles();

        requestAnimationFrame(animate);

    }

    animate();

});