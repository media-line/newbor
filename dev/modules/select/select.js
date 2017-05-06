"use strict";

import './select.scss';

const $select = '.select';
const $selectValue = '.select__value';
const $selectOption = '.select__option';
const $selectOptions = '.select__options';
const $selectInput = '.select__input';

const selectActive = 'select_active';


$(window).on('load', function () {
    //проставляем ширину селектов
    $($select).each(function () {
        let widthSelect;

        widthSelect = $(this).find($selectValue).outerWidth();
        $(this).find($selectOptions).css('width', widthSelect + 'px');
        $(this).find($selectValue).css('width', widthSelect + 'px');
    });

    //при клике на селект скрываем/закрываем
    $($selectValue).click(function () {
        if ($(this).closest($select).hasClass(selectActive)) {
            $(this).closest($select).removeClass(selectActive);
        } else {
            $(this).closest($select).addClass(selectActive);
        }
    });

    //при выборе опции скрываем поле и выставляем значения
    $($selectOption).click(function () {
        let value = $(this).html();
        let dataValue = $(this).attr('data-select');

        $(this).closest($select).find($selectValue).html(value);
        $(this).closest($select).find($selectInput).val(dataValue);
        $(this).closest($select).removeClass(selectActive);
    });

    //при клике за пределами окна - закрываем все окна
    $(document).mouseup(function (e) {
        if ($($select).has(e.target).length === 0){
            $($select).removeClass(selectActive);
        }
    });
});
