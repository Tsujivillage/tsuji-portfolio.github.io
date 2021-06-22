//JS スマホ版メニュー スクロール禁止
window.onload = function () {
    function enableMove() {
        document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.removeEventListener('mousewheel', disableScroll, { passive: false });
    };

    function disableScroll(event) {
        event.preventDefault();
    }
    document.getElementById('header_bar_btn').onclick = function () {
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.addEventListener('mousewheel', disableScroll, { passive: false });
    }
    document.getElementById('about_jump').onclick = function () {
        enableMove();
    }
    document.getElementById('program_jump').onclick = function () {
        enableMove();
    }
    document.getElementById('works_jump').onclick = function () {
        enableMove();
    }
    document.getElementById('contact_jump').onclick = function () {
        enableMove();
    }
    document.getElementById('header_menu_exit').onclick = function () {
        enableMove();
    }
}

//jQuery アニメーション
const windowWidth = document.body.clientWidth;
console.log(windowWidth);

if (windowWidth >= 764) {
    $(function () {
        //プログラミング
        $(".html_icon img").on({
            'mouseenter': function () {
                $(".html_icon img").css({ "width": "82px" });
                $(".html_icon").css({ "margin-left": "0px", "margin-right": "35px" });
                $(".html_icon p").css({ "margin-top": "0px" });

                $(".css_icon,.jquery_icon").css({ "opacity": "0.5" });
                $(".css_icon img,.jquery_icon img").css({ "width": "62px" });
                $(".css_icon p,.jquery_icon p").css({ "font-size": "12px" });
            },
            'mouseleave': function () {
                $(".html_icon img").css({ "width": "72px" });
                $(".html_icon").css({ "margin-right": "45px" });
                $(".html_icon p").css({ "margin-top": "10px" });

                $(".css_icon,.jquery_icon").css({ "opacity": "1" });
                $(".css_icon img,.jquery_icon img").css({ "width": "72px" });
                $(".css_icon p,.jquery_icon p").css({ "font-size": "14px" });
            }
        });

        $(".css_icon img").on({
            'mouseenter': function () {
                $(".css_icon img").css({ "width": "82px" });
                $(".html_icon").css({ "margin-right": "40px" });
                $(".jquery_icon").css({ "margin-left": "35px" });
                $(".css_icon p").css({ "margin-top": "0px" });

                $(".html_icon,.jquery_icon").css({ "opacity": "0.5" });
                $(".html_icon img,.jquery_icon img").css({ "width": "62px" });
                $(".html_icon p,.jquery_icon p").css({ "font-size": "12px" });
            },
            'mouseleave': function () {
                $(".css_icon img").css({ "width": "72px" });
                $(".html_icon").css({ "margin-right": "45px" });
                $(".jquery_icon").css({ "margin-left": "40px" });
                $(".css_icon p").css({ "margin-top": "10px" });

                $(".html_icon,.jquery_icon").css({ "opacity": "1" });
                $(".html_icon img,.jquery_icon img").css({ "width": "72px" });
                $(".html_icon p,.jquery_icon p").css({ "font-size": "14px" });
            }
        });

        $(".jquery_icon").on({
            'mouseenter': function () {
                $(".jquery_icon img").css({ "width": "82px" });
                $(".jquery_icon").css({ "margin-right": "40px" });
                $(".jquery_icon").css({ "margin-left": "35px", "margin-right": "0px" });
                $(".jquery_icon p").css({ "margin-top": "0px" });

                $(".css_icon,.html_icon").css({ "opacity": "0.5" });
                $(".css_icon img,.html_icon img").css({ "width": "62px" });
                $(".css_icon p,.html_icon p").css({ "font-size": "12px" });
            },
            'mouseleave': function () {
                $(".jquery_icon img").css({ "width": "72px" });
                $(".jquery_icon").css({ "margin-left": "40px", "margin-right": "5px" });
                $(".jquery_icon p").css({ "margin-top": "10px" });

                $(".html_icon,.css_icon").css({ "opacity": "1" });
                $(".html_icon img,.css_icon img").css({ "width": "72px" });
                $(".html_icon p,.css_icon p").css({ "font-size": "14px" });
            }
        });
    });
}

$(function () {
    //上部へ戻るボタン、スマホ版メニュー
    $(".gotop").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".gotop").fadeIn();
        } else {
            $(".gotop").fadeOut();
        }
    });

    $(".gotop").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(".header_bar_btn").click(function () {
        if ($("#header_menu_display").hasClass("active")) {
            $("#header_menu_display").fadeIn();
            $("#header_menu_display").addClass("active");
        }
    });

    $("#header_menu_exit").click(function () {
        if ($("#header_menu_display").hasClass("active")) {
            $("#header_menu_display").fadeOut();
            $("#header_menu_display").removeClass("active");
        }
    });

    $("#about_jump,#program_jump,#works_jump,#contact_jump").click(function () {
        $("#header_menu_display").hide();
    });

    $(".header_bar").click(function () {
        if ($(".header_menu_media").hasClass("active")) {
            $(".header_menu_media").fadeOut();
            $(".header_menu_media").removeClass("active");
        } else {
            $(".header_menu_media").addClass("active");
            $(".header_menu_media").fadeIn();
        }

    });

});