var delay = 300;
var time = null;
var time2 = null;
var swiper,swiper2;
var swiper20th = null;
var cardSwiper = [];
var cardIndexCheck = [];

var swiperOption1 = {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 0,
    },
    speed: 40000,
    on: {
        setTranslate:function(translate){
            var tr = $(this.slides[this.activeIndex]).width()/($(window).width() * 0.16);
            this.$wrapperEl.css({"transition-duration": tr + "ms"})
        },
    }
}

//모든 swiper
function initSwiper() {
    swiper = new Swiper(".history_list01", swiperOption1);
    swiper2 = new Swiper(".history_list02", swiperOption1);
    swiper2.params.speed = 40000;
    swiper.params.speed = 40000;

    if ($(window).width() > 1023) {
        //1024 이상일때 카드 형태 바뀜(재설정)
        cardSwiperPCInit();

        if (swiper20th === null) {
            swiper20th = new Swiper('.info_card', infoCardOption);
        }
    } else {
        //1023 이하일때 카드 형태 바뀜(재설정)
        cardSwiperMoInit()
    }
    initVideoToCanvas();
    // cardSwiperVideoPlay();

    if ((!isMobile() && isSafari())) {
        $('.card_swiper').each(function () {
            $(this).css('cursor', 'pointer');
            $(this).find('.swiper-slide a').each(function () {
                $(this).css('pointer-events', 'none');
            })
            $(this).on('click', function (e) {
                $(this).find('.swiper-slide').each(function () {
                    var target = $(this);
                    var left = target.offset().left;
                    if (left <= e.pageX && e.pageX <= left + 280) {
                        var link = target.find('a').attr('href');
                        window.open(link);
                    }
                })
            })
        })
    }
}

//화면 resize 시 swiper 체크
function resizeSwiper() {
    if ($(window).width() > 1023) {
        //1024 이상일때 카드 형태 바뀜(재설정)
        cardSwiperPCInit();
        //1024 이상일때 info_card swiper 적용
        if (swiper20th === null) {
            swiper20th = new Swiper('.info_card', infoCardOption);
        }
    } else {
        if (!$('.card_swiper01').hasClass('swiper-container-coverflow')) {
            cardSwiperMoInit(true)
        }
    }
    initVideoToCanvas();
    // cardSwiperVideoPlay();

    if ((!isMobile() && isSafari())) {
        $('.card_swiper').each(function () {
            $(this).css('cursor', 'pointer');
            $(this).find('.swiper-slide a').each(function () {
                $(this).css('pointer-events', 'none');
            })
        })
    }
}

$(function () {
    //swiper init
    initSwiper();

    var cardPCMedia = matchMedia('screen and (min-width: 1024px)');
    var cardMediaFlag = cardPCMedia.matches ? 'pc' : 'mo';

    //화면 resize
    $(window).on('resize', function () {
        if (cardPCMedia.matches) {
            if (cardMediaFlag === 'mo') {
                cardMediaFlag = 'pc';
                resizeSwiper();
            }
        } else {
            if (cardMediaFlag === 'pc') {
                cardMediaFlag = 'mo';
                resizeSwiper();
            }
        }
    })
})