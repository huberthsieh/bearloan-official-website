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

    const swiperBanner = new Swiper('.swiper-banner', {
        // Default parameters
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    })

    const swiperStep = new Swiper('.swiper-step', {
        // Default parameters
        navigation: {
            nextEl: '.swiper-button-next.swiper-step-next',
            prevEl: '.swiper-button-prev.swiper-step-prev',
        },
        grabCursor: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    })

    const swiperInfo = new Swiper('.swiper-info', {
        // Default parameters
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: false,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
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

const handleYoutubeControl = () => {
    // Get element
    var youtubeEmbedElement = document.getElementById("youtubeEmbed");

    // Add YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    const videoId = youtubeEmbedElement && youtubeEmbedElement.dataset.videoId;
    var startSeconds = 0;
    var endSeconds = 210;

    onYouTubeIframeAPIReady = function () {
        player = new YT.Player("youtubeEmbed", {
            videoId: videoId, // YouTube Video ID
            playerVars: {
                autoplay: 1, // Auto-play the video on load
                autohide: 1, // Hide video controls when playing
                disablekb: 1,
                controls: 0, // Hide pause/play buttons in player
                showinfo: 0, // Hide the video title
                modestbranding: 1, // Hide the Youtube Logo
                loop: 1, // Run the video in a loop
                fs: 0, // Hide the full screen button
                rel: 'preload',
                enablejsapi: 1,
                start: startSeconds,
                end: endSeconds
            },
            events: {
                onReady: function (e) {
                    e.target.mute();
                    e.target.playVideo();
                },
                onStateChange: function (e) {
                    if (e.data === YT.PlayerState.PLAYING) {
                        document.getElementById("youtubeEmbed").classList.add("loaded");
                    }

                    if (e.data === YT.PlayerState.ENDED) {
                        // Loop from starting point
                        player.seekTo(startSeconds);
                    }
                }
            }
        });
    };
}

document.addEventListener("DOMContentLoaded", function(event) {
    // handleJarallaxFunc();
    handleMenuToggle();
    // handleWaypointFunc();
    handleAccordionToggle();
    handleDataAnimation();
    handleSwiperControll();
    handleArticlesControll();
    // handleYoutubeControl();
});