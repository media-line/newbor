"use strict";

import './contacts.scss';

import scriptjs from 'scriptjs';

const $contacts = '.contacts';
const $contentBlock = '.contacts__inner-page';
const $moveContentBlock = '.contacts__inner';
const mapContainer = 'contacts__map';
const $mapContainer = '#contacts__map';

const $menuButton = '.slide-menu__menu-button-block'

let map;
let placemark;
let widthContentBlock = 0;
let marginLeftContentBlock = 0;
let resizeTimer;

function mapInit (mapx, mapy, markerx, markery, content, linePoints) {
    scriptjs('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                center: [mapx, mapy],
                zoom: 14,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
            });

            placemark = new ymaps.Placemark([markerx, markery], {
                balloonContent: content
            }, {
                preset: 'islands#darkGreenIcon'
            });
            map.geoObjects.add(placemark);

            // Создаем ломаную линию.
            var polyline = new ymaps.Polyline(
                linePoints
            , {
                hintContent: "Маршрут"
            }, {
                strokeColor: '#6c963b',
                strokeWidth: 4
            });
            // Добавляем линию на карту.
            map.geoObjects.add(polyline);


            map.behaviors.disable('scrollZoom');
        }
    });
}

$(window).on('load', function() {
    //сдвигаем контентный блок, чтобы был на одной линии с кнопкой меню
    $($moveContentBlock).css('left', $($menuButton).position().left + 'px');

    //ставим высоту карты по контенту
    $($mapContainer).css('height', $($contentBlock).outerHeight() + 'px');

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {
            $($moveContentBlock).css('left', $($menuButton).position().left + 'px');
            $($mapContainer).css('height', $($contentBlock).outerHeight() + 'px');
        }, 250);
    });

    let init = new mapInit(53.952375, 27.636108, 53.952375, 27.666108, '220980 г.Минск ул. Машиностроителей 30 офис 564', [[53.948729, 27.669348], [53.951894, 27.666344], [53.952096, 27.665743], [53.952375, 27.666086]]);
});

export {mapInit};
