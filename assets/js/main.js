/**
 *  Handle Menu Toggle Effect
 */
const handleMenuToggle = () => {
    const $menuTrigger = $('#menu__wrap');
    const $modalWrap = $('#modal');
    const $modal = $('#modal__inner');

    $menuTrigger.on('click', function() {
        $modalWrap.toggleClass('open');
        $modal.toggleClass('open');
    });
}

/**
 *  Handle Privacy Toggle Effect
 */
const handlePrivacyToggle = () => {
    const $menuTrigger = $('#menu__wrap');
    const $modalWrap = $('#modal');
    const $modal = $('#modal__inner');

    $menuTrigger.on('click', function() {
        $modalWrap.toggleClass('open');
        $modal.toggleClass('open');
    });
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

    const swiperVideo = new Swiper('.swiper-video', {
        // Default parameters
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
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