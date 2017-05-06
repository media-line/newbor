"use strict";

import './apartments-list.scss';


import './../../modules/apartments-filter/apartments-filter';

import './../../modules/select/select';

const $button = '.button_apartment';
const $block = '.apartments-list__apartment';

const blockHover = 'apartments-list__apartment_hover';

$(document).ready(function () {
    $($button).hover(function () {
        $(this).closest($block).toggleClass(blockHover);
    });
});
