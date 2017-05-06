"use strict";

import './slider-layout.scss';


import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.css';

const $slider = '.slider-layout__slider';

$(document).ready(function () {
    $($slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-layout__arrow slider-layout__arrow_prev"></button>',
        nextArrow: '<button type="button" class="slider-layout__arrow slider-layout__arrow_next"></button>'
    });
});
