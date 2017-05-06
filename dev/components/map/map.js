"use strict";

import './map.scss';

import scriptjs from 'scriptjs';

const mapContainer = 'map';

let map;

function mapInit (mapx, mapy, markerx, markery, content, linePoints, markers) {
    scriptjs('https://api-maps.yandex.ru/2.1/?lang=ru_RU', function () {
        ymaps.ready(init);

        function init() {
            map = new ymaps.Map(mapContainer, {
                center: [mapx, mapy],
                zoom: 14,
                controls: ['zoomControl', 'typeSelector',  'fullscreenControl']
            });

            let placemark = new ymaps.Placemark([markerx, markery], {
                balloonContent: content
            }, {
                preset: 'islands#darkGreenIcon'
            });
            map.geoObjects.add(placemark);

            $(markers).each(function (index, value) {
                let placemark = new ymaps.Placemark([value[0], value[1]], {
                    balloonContent: value[3]
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: './svg/marker-'+value[2]+'.svg',
                    iconImageSize: [40, 60],
                    iconImageOffset: [-20, -60]
                });
                map.geoObjects.add(placemark);
            });

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
    let init = new mapInit(53.952375, 27.666108, 53.952375, 27.666108, '220980 г.Минск ул. Машиностроителей 30 офис 564', [[53.948729, 27.669348], [53.951894, 27.666344], [53.952096, 27.665743], [53.952375, 27.666086]], [[53.950375, 27.661108, 'shop', 'Магазин'], [53.951375, 27.663108, 'hospital', 'Поликлиника'], [53.951375, 27.669108, 'garden', 'Парк']]);
});

export {mapInit};
