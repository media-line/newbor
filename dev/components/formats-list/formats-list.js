"use strict";

import './formats-list.scss';


let $img = '.formats-list__img-wrapper';
let $title = '.formats-list__title';
let $button = '.formats-list__format .button';
let $block = '.formats-list__format';
let blockActive = 'formats-list__format_active';

$(document).ready(function () {
    $($img).hover(function () {
        $(this).closest($block).toggleClass(blockActive);
    });

    $($title).hover(function () {
        $(this).closest($block).toggleClass(blockActive);
    });

    $($button).hover(function () {
        $(this).closest($block).toggleClass(blockActive);
    });
});
