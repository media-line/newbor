"use strict";

import './header.scss';

import './../modal/modal';
import './../order-form/order-form';

const $header = '.header';
const $headerFix = '.header__fix';

let headerHeight = 0;
let promiseHeaderHeight = '';

let resizeTimer;

function getPromiseHeaderHeight (headerHeight) {
    return new Promise((resolve) => {
        resolve(headerHeight);
    });
}

function getHeaderHeight ($header) {
    return $($header).outerHeight();
}

function setFixHeaderHeight ($headerFix, headerHeight) {
    $($headerFix).css('height', headerHeight + 'px');
}

$(document).ready(function () {
    headerHeight = getHeaderHeight ($header);
    setFixHeaderHeight ($headerFix, headerHeight);

    promiseHeaderHeight = getPromiseHeaderHeight (headerHeight);

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        headerHeight = getHeaderHeight ($header);
        setFixHeaderHeight ($headerFix, headerHeight);

        resizeTimer = setTimeout(function() {
            promiseHeaderHeight = getPromiseHeaderHeight (headerHeight);
        }, 250);
    });
});

export {promiseHeaderHeight};
