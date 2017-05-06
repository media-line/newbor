"use strict";

import 'jquery-ui-dist/jquery-ui.min';
import 'jquery-ui-dist/jquery-ui.min.css';

import './ui-slide-range.scss';

const $block = '.ui-slide-range';
const $slider = '.ui-slide-range__slider';
const $value = '.ui-slide-range__value';

const $sliderRoom = '.ui-slide-range__slider_room';
const $sliderLevel = '.ui-slide-range__slider_level';
const $sliderCost = '.ui-slide-range__slider_cost';
const $sliderTotal = '.ui-slide-range__slider_total';

function setValues (valueFields, values) {
    $(valueFields).each(function (index, value) {
        $(value).html(values[index].toLocaleString());
    });
}

$(document).ready(function () {
    $($sliderRoom).slider({
        range: true,
        step: 0.1,
        min: 10,
        max: 200,
        values: [50, 130]
    });

    $($sliderLevel).slider({
        range: true,
        step: 1,
        min: 1,
        max: 15,
        values: [2, 8]
    });

    $($sliderCost).slider({
        range: true,
        step: 1,
        min: 500,
        max: 2000,
        values: [750, 1300]
    });

    $($sliderTotal).slider({
        range: true,
        step: 1,
        min: 50000,
        max: 200000,
        values: [75000, 130000]
    });

    //ставим значения при инициализации
    $($slider).each(function () {
        let values = $(this).slider('values');
        let fields = $(this).closest($block).find($value);

        setValues (fields, values);
    });

    //меняем значения при скролле
    $($slider).bind( "slide", function(event, ui){
        let fields = $(this).closest($block).find($value);

        setValues (fields, ui.values);
    });
});
