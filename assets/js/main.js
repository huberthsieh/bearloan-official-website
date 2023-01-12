/*
    Handle Parallax Effect
*/
const handleJarallaxFunc = () => {
    const parallax = document.querySelectorAll('.jarallax');
    jarallax(parallax);
}


/*
    Handle Waypoint Effect
*/
const handleWaypointFunc = () => {
    // const target = Array.from(document.getElementsByClassName('scroll__animation'));
    const target = [...document.getElementsByClassName('scroll__animation')];

    const onScrollInit = ( items ) => {
        items.forEach( item => {
                const osAnimationClass = item.getAttribute('data-os-animation'),
                osAnimationDelay = item.getAttribute('data-os-animation-delay'),
                osAnimationFrequency = item.getAttribute('data-os-animation-frequency');

            item.style.animationDelay = osAnimationDelay;

            const waypoint = new Waypoint({
                element: item,
                handler: function(direction) {
                    if (osAnimationFrequency !== 'once') {
                        item.classList.add('animated');
                        item.classList.toggle(osAnimationClass);
                    }

                    item.classList.add('animated');
                    item.classList.add(osAnimationClass);
                },
                offset: '90%'
            })
        });
    }

    onScrollInit(target);
}


/*
    Handle Menu Toggle Effect
 */
const handleMenuToggle = () => {
    const [btn, header, menu, modal, modalInner] = ['menu__wrap', 'header', 'cover__menu', 'modal', 'modal__inner']
        .map(item => document.getElementById(item));

    const items = [header, menu, modal, modalInner];

    btn.addEventListener('click', function() {
        items.map(item => {
            const isOpen = item.classList.contains("open");

            item.classList.remove('open');
            item.classList.add('close');

            if (!isOpen) {
                item.classList.add('open');
                item.classList.remove('close');
            }
        })
    }, false);
}


/*
    Handle According Toggle Effect
 */
const handleAccordionToggle = () => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
        const itemToggle = this.getAttribute('aria-expanded');

        items.forEach(item => {
            item.setAttribute('aria-expanded', 'false');
        })

        if (itemToggle === 'false') {
            this.setAttribute('aria-expanded', 'true');
        }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion));
}


/**
 *
 */
const handleDataAnimation = () => {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}

/**
 * Swiper
 */
const handleSwiperControll = () => {
    console.log('swiper run !!!')

    const swiper = new Swiper('.swiper-case', {
        // Default parameters
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // loop: true,
        // loopedSlides: 1,

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    })
}

const handleArticlesControll = () => {
    const $type = $('#article__tabs .article__tabs__item');
    const $page = $('#article__pages .article__pages__item');

    $type.on('click', function() {
        $type.removeClass('active');
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active')
    });

    $page.on('click', function() {
        $page.removeClass('active');
        $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active')
    });
}

document.addEventListener("DOMContentLoaded", function(event) {
    // handleJarallaxFunc();
    handleMenuToggle();
    // handleWaypointFunc();
    handleAccordionToggle();
    handleDataAnimation();
    handleSwiperControll();
    handleArticlesControll();
});