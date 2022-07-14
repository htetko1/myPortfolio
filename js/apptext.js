const items = document.querySelectorAll(".li_text");

const ease = CustomEase.create("custom", "M0,0 C0.548,0.032 0.63,1 1,1 ");
// const custom = CustomEase.create(
//     "custom",
//     "M0,0 C0.29,0 0.328,0.224 0.365,0.33 0.434,0.529 0.53,0.792 0.588,0.884 0.659,0.997 0.704,1 1,1"
// );
const introTween = gsap
    .timeline({
        defaults: {
            duration: 0.48,
        },
    })
    .to(".li_text", {
        "--stop-active": "100%",
        stagger: {
            each: 0.1,
            ease: ease,
        },
    })
    .to(".li_text", {
        "--stop-hover": "100%",
        stagger: {
            each: 0.1,
        },
    })
    .to(
        ".li_text", {
            "--stop-hover": "0%",
            stagger: {
                each: -0.1,
            },
        },
        "-=0.1"
    );

gsap.set(items, { "--stop-hover": "0%" });

items.forEach((item, i) => {
    item.addEventListener("mouseenter", function() {
        gsap.to(this, {
            "--stop-hover": "100%",
            ease: ease,
            duration: 0.36,
        });
    });

    item.addEventListener("mouseleave", function() {
        gsap.to(this, {
            "--stop-hover": "0%",
            ease: ease,
            duration: 0.36,
        });
    });
});