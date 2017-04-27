"use strict";

import './slide-menu.scss';


const $button = '.slide-menu__menu-button-block';
const $buttonMain = '.slide-menu__menu-button-block_main';
const activeButton = 'slide-menu__menu-button-block_active';
const $menu = '.slide-menu';
const $slide = '.slide-menu__slide';
const slideTransition = 'slide-menu__slide_transition';

let slideHeight = 0;

let resizeTimer;


function setPadding (block, paddingTop, paddingSides) {
    $(block).css('padding-top', paddingTop);
    $(block).css('padding-bottom', paddingTop);
    $(block).css('padding-left', paddingSides);
}

function getPaddingTop ($buttonMain) {
    return $($buttonMain).position().top;
}

function getPaddingSides ($buttonMain) {
    return $($buttonMain).position().left;
}

function setMenuSize ($slide, height) {
    $($slide).css('height', height + 'px');
}

$(window).on('load', function () {
    slideHeight = $(window).outerHeight()/2;
    setMenuSize ($slide, slideHeight);
    $($slide).css('transform', 'translate(0px, -' +slideHeight + 'px)');
    $($slide).addClass(slideTransition); //если трансижн сразу, то сбивается расчёт, поэтому добавляет в конце всех расчётов

    $(window).resize(function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            slideHeight = $(window).outerHeight()/2;
            setMenuSize ($slide, slideHeight);
            $($slide).css('transform', 'translate(0px, -' +slideHeight + 'px)');

            if ($($button).hasClass(activeButton)) {
                $($slide).css('transform', 'translate(0px, 0px');
            } else {
                $($slide).css('transform', 'translate(0px, -' +slideHeight + 'px)');
            }
        }, 250);
    });
});

$(document).ready(function () {
    $($button).click(function () {
        if ($($button).hasClass(activeButton)) {
            $($menu).slideUp();
            $($button).removeClass(activeButton);
            $($slide).css('transform', 'translate(0px, -' +slideHeight + 'px)');
        } else {
            $($menu).slideDown();
            $($button).addClass(activeButton);
            $($slide).css('transform', 'translate(0px, 0px');
        }
    });
});
