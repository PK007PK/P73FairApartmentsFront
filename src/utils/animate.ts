import gsap from 'gsap';

// Open menu
export const menuShow = (elem1, elem2) => {
    gsap.from([elem1, elem2], {
        duration: 0.7,
        height: 0,
        transformOrigin: 'right top',
        skewY: 2,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.2,
        },
    });
};

// Close menu
export const menuHide = (elem1, elem2) => {
    gsap.to([elem1, elem2], {
        duration: 0.8,
        height: 0,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.07,
        },
    });
};

// Stagger links
export const staggerLinks = (elem1, elem2, elem3) => {
    gsap.from([elem1, elem2, elem3], {
        duration: 0.8,
        y: 100,
        delay: 0.1,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.3,
        },
    });
};

// Hover on the link
export const hoverLink = (e) => {
    gsap.to(e.target, {
        duration: 0.4,
        y: 3,
        skewX: 4,
        ease: 'power2.inOut',
    });
};

// Hover away from the link
export const hoverExit = (e) => {
    gsap.to(e.target, {
        duration: 0.4,
        y: -3,
        skewX: 0,
        ease: 'power2.inOut',
    });
};
