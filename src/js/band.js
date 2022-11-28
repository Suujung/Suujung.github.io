/* 해더 스크롤 픽스 */
function navigo() {
    const header = document.querySelector('header'); //헤더부분획득
    const headerheight = header.clientHeight;//헤더높이
    document.addEventListener('scroll', onScroll, { passive: true });//스크롤 이벤트

    function onScroll() {
        const scrollposition = pageYOffset;//스크롤 위치
        const nav = document.querySelector('nav');//네비게이션

        if (headerheight <= scrollposition) {//만약 헤더높이<=스크롤위치라면
            nav.classList.add('fix')//fix클래스를 네비에 추가
        }
        
        else {//그 외의 경우
            nav.classList.remove('fix');//fix클래스를 네비에서 제거
        }
    }
}
navigo()
/* //해더 스크롤 픽스 */

/* 스크롤 이벤트 */
function aniChecker() {
    $('.ani').each(function (index) {
        var pos = $(this).offset(), wY = getScrollTop(), wH = $(window).height(), oH = $(this).outerHeight();
        var posTop = pos.top;
        if (posTop >= wY && oH + posTop <= wY + wH) {
            $(this).addClass('active');

            // 수정전에도 정상동작 하는 경우가 있어서 남겨둠
            if (index === 4 && isFirstSection5) {
                loadLottie(1);
                isFirstSection5 = false;
            }
        } else if ((posTop <= wY && posTop + oH > wY) || (posTop >= wY && posTop <= wY + wH - 200)) {
            $(this).addClass('active');
            if (index === 4 && isFirstSection5) {
                loadLottie(1);
                isFirstSection5 = false;
            }
        } else {
            // 스크롤 벗어났을때 애니메이션 유지관련
            if (posTop === wY) {
                $(this).addClass('active');
            } else {

            }
        }
    });
}
/* //스크롤 이벤트 */