"use strict";

import './inner-page.scss';

const $container = '.inner-page';
const $containerPoint = '.inner-page__point';
const $wideImage = '.inner-page__wide-img';
const wideImageWrapper = 'inner-page__img-wrapper';

let resizeTimer;
let halfMarginImg = 0;
let $containerCurrent;

$(window).on('load', function () {
    if ($($containerPoint).length > 0) {
        $containerCurrent = $containerPoint;
    } else {
        $containerCurrent = $container;
    }
    halfMarginImg = ($(window).width() - $($containerCurrent).outerWidth())/2;

    $($wideImage).each(function (i, img) {
        $(img).wrap("<div class="+wideImageWrapper+"></div>");
        $(img).parent().css('margin-right', '-'+ halfMarginImg +'px');
        $(img).parent().css('margin-left', '-'+ halfMarginImg +'px');
    });

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            halfMarginImg = ($(window).width() - $($containerCurrent).outerWidth())/2;

            $($wideImage).each(function (i, img) {
                $(img).parent().css('margin-right', '-'+ halfMarginImg +'px');
                $(img).parent().css('margin-left', '-'+ halfMarginImg +'px');
            });
        }, 250);
    });
});
