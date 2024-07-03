document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    // Typing Text Animation
    let typingAnimation = new Typed('.dynamic-typing', {
        strings: ["KASHMIR", "JAMMU", "LADAKH", "INDIA"],
        typeSpeed: 90,
        backSpeed: 90,
        loop: true
    });

    gsap.to('nav', {
        backgroundColor: 'rgb(34, 197, 94)',
        scrollTrigger: {
            trigger: 'nav',
            scroller: 'body',
            scrub: true,
            start: "top 0"
        }
    });

    // Homepage animations
    gsap.from('.whatsapp-fixed', {
        opacity: 0,
        display: 'none',
        scrollTrigger: {
            trigger: '.whatsapp-fixed',
            scroller: 'body',
            scrub: 2,
            start: 'top 60%'
        }
    });

    // GSAP Text Animation
    function textAnimation(element) {
        const elem = document.querySelector(element);
        const splittedText = elem.textContent.split(' ');
        let spanElem = "";
        splittedText.forEach((word) => {
            spanElem += `<span>${word}</span> `;
        });
        elem.innerHTML = spanElem;

        gsap.from(`${element} span`, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.4,
            scrollTrigger: {
                trigger: `${element} span`,
                scroller: 'body',
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2
            }
        });
    }

    textAnimation('#tours > div > div > h2');
    textAnimation('#services > div > div > h2');
    textAnimation('#why-choose-us > div > div > h2');
    textAnimation('#destinations > div > div > h2');
    textAnimation('#testimonials > div > div > h2');
    textAnimation('#seasonal-highlights > div > div > h2');
    textAnimation('#contact > div > div > h2');

    function paraAnimation(element) {
        gsap.from(`${element} span`, {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: `${element} span`,
                scroller: 'body',
                start: 'top 90%',
                end: 'top 60%',
                scrub: 2
            }
        });
    }

    paraAnimation('#tours > div > div > p');
    paraAnimation('#services > div > div > p');
    paraAnimation('#why-choose-us > div > div > p');
    paraAnimation('#destinations > div > div > p');
    paraAnimation('#testimonials > div > div > p');
    paraAnimation('#seasonal-highlights > div > div > p');
    paraAnimation('#contact > div > div > p');

    tl.from('nav > a', {
        y: -100,
        opacity: 0,
        delay: 0.2,
        duration: 0.4,
    });

    if(window.innerWidth >= 768) {
        tl.from('nav ul li', {
            y: -100,
            opacity: 0,
            duration: 0.3,
            stagger: 0.2
        });
    }

    tl.from('.entry-page-content p', {
        y: 100,
        opacity: 0,
        duration: 0.4
    });

    // Testimonial Swipers
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        grabCursor: true,
        direction: 'horizontal',
        loop: true,
    
        // Pagination
        pagination: {
        el: '.swiper-pagination',
        clickable: true
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });
});