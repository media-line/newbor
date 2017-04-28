"use strict";

import './contacts.scss';

import scriptjs from 'scriptjs';

const $contacts = '.contacts';
const $contentBlock = '.inner-page';
const $moveContentBlock = '.contacts__inner';
const mapContainer = 'contacts__map';

let map;
let placemark;
let widthContentBlock = 0;
let marginLeftContentBlock = 0;
let resizeTimer;

function mapInit (mapx, mapy, content) {
    scriptjs('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                center: [mapx, mapy],
                zoom: 13,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
            });

            placemark = new ymaps.Placemark([mapx, mapy], {
                balloonContent: content
            }, {});

            map.geoObjects.add(placemark);

            map.behaviors.disable('scrollZoom');
        }
    });
}

$(document).ready(function() {
    widthContentBlock = $($contacts).find($contentBlock).outerWidth();
    $($contacts).find($contentBlock).css('width', 'auto');
    marginLeftContentBlock = ($(window).width() - widthContentBlock)/2;

    $($contacts).find($moveContentBlock).css('left', marginLeftContentBlock + 'px');

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            marginLeftContentBlock = ($(window).width() - widthContentBlock)/2;

            $($contacts).find($moveContentBlock).css('left', marginLeftContentBlock + 'px');
        }, 250);
    });

    let init = new mapInit(50, 50, '220980 г.Минск ул. Машиностроителей 30 офис 564');
});

export {mapInit};
