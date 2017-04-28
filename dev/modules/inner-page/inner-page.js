"use strict";

import './inner-page.scss';

const $container = '.inner-page';
const $wideImage = '.inner-page__wide-img';
const wideImageWrapper = 'inner-page__img-wrapper';

let resizeTimer;
let halfMarginImg = 0;

$(window).on('load', function () {
    halfMarginImg = ($(window).width() - $($container).outerWidth())/2;

    $($wideImage).each(function (i, img) {
        $(img).wrap("<div class="+wideImageWrapper+"></div>");
        $(img).parent().css('margin-right', '-'+ halfMarginImg +'px');
        $(img).parent().css('margin-left', '-'+ halfMarginImg +'px');
    });

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            halfMarginImg = ($(window).width() - $($container).outerWidth())/2;

            $($wideImage).each(function (i, img) {
                $(img).wrap("<div class="+wideImageWrapper+"></div>");
                $(img).parent().css('margin-right', '-'+ halfMarginImg +'px');
                $(img).parent().css('margin-left', '-'+ halfMarginImg +'px');
            });
        }, 250);
    });
});
