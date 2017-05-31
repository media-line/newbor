"use strict";

import './news-item.scss';

let $img = '.news-item__img';
let $title = '.news-item__title';
let $news = '.news-item';
let newsActive = 'news-item_active';

$(document).ready(function () {
    $($img).hover(function () {
        $(this).closest($news).toggleClass(newsActive);
    });

    $($title).hover(function () {
        $(this).closest($news).toggleClass(newsActive);
    });
});
