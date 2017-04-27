"use strict";

import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';

import './slider-preview.scss';

const $slider = '.slider-preview';

$(document).ready(function () {
    $($slider).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-preview__arrow slider-preview__arrow_prev"></button>',
        nextArrow: '<button type="button" class="slider-preview__arrow slider-preview__arrow_next"></button>'
    });
});
