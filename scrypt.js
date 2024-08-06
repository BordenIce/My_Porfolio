function menu_btn() {
    var menu_window = document.getElementById("menu_window");
    menu_window.style.display = "flex";
}

function closeMenu() {
    var menu_window = document.getElementById("menu_window");
    menu_window.style.display = "none";
}

// Close the menu when clicking outside of it
window.onclick = function(event) {
    var menu_window = document.getElementById("menu_window");
    if (event.target == menu_window) {
        menu_window.style.display = "none";
    }
};

window.onscroll = function() {
    let h = document.documentElement.clientHeight;
    let classLink = ".main-link";
    
    if (window.scrollY >= h * 5) {
        classLink = ".contact-link";
    } else if (window.scrollY >= h * 4) {
        classLink = ".review-link";
    } else if (window.scrollY >= h * 3) {
        classLink = ".work-link";
    } else if (window.scrollY >= h * 2) {
        classLink = ".skills-link";
    } else if (window.scrollY >= h * 1) {
        classLink = ".about-link";
    }

    let ActiveBtn = document.querySelector(".navbar a.active");
    let NewActiveBtn = document.querySelector(classLink);

    if (ActiveBtn !== NewActiveBtn) {
        ActiveBtn.classList.remove("active");
        NewActiveBtn.classList.add("active");
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.mySwiper', {
        loop: true, // Enable infinite loop
        slidesPerView: 1, // Number of slides visible at the same time
        centeredSlides: true, // Center slides
        spaceBetween: 10, // Space between slides
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
        autoplay: {
            delay: 5000, // Time between transitions in milliseconds
            disableOnInteraction: false, // Don't stop autoplay on user interactions
        },
        speed: 800, // Transition duration in milliseconds
    });

    // Keyboard control for Swiper
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
            swiper.slideNext();
        }
    });

    // Intersection Observer for fade-in effect
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

