document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".form-card", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });

    document.querySelectorAll(".input-group input").forEach((input) => {
        input.addEventListener("focus", () => {
            gsap.to(input, { borderBottom: "2px solid #FF2E63", duration: 0.3 });
        });
        input.addEventListener("blur", () => {
            gsap.to(input, { borderBottom: "2px solid white", duration: 0.3 });
        });
    });

    document.querySelector(".btn").addEventListener("mouseenter", () => {
        gsap.to(".btn", { scale: 1.1, duration: 0.3 });
    });

    document.querySelector(".btn").addEventListener("mouseleave", () => {
        gsap.to(".btn", { scale: 1, duration: 0.3 });
    });
});
