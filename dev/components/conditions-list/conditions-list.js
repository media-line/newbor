"use strict";

import './conditions-list.scss';

let $img = '.conditions-list__img';
let $title = '.conditions-list__title';
let $button = '.conditions-list__type .button';
let $block = '.conditions-list__type';
let blockActive = 'conditions-list__type_active';

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
