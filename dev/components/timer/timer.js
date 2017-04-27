"use strict";

import './timer.scss';

import './../../modules/button/button.js';


const $daysBlock = ".timer__number_days";
const $hoursBlock = ".timer__number_hours";
const $minutesBlock = ".timer__number_minutes";

const $daysTextBlock = ".timer__text_days";
const $hoursTextBlock = ".timer__text_hours";
const $minutesTextBlock = ".timer__text_minutes";


function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock($daysBlock, $hoursBlock, $minutesBlock, endtime){
    let days = 0;
    let hours = 0;
    let minutes = 0;

    let timeinterval = setInterval( function() {
        let t = getTimeRemaining(endtime);

        if (days != t.days) {
            $($daysBlock).html(t.days);
            $($daysTextBlock).html(wordend(t.days, '', 'день', 'дня', 'дней'));
            days = t.days;
        }

        if (hours != t.hours) {
            $($hoursBlock).html(t.hours);
            $($hoursTextBlock).html(wordend(t.hours, 'час', '', 'а', 'ов'));
            hours = t.hours;
        }

        if (minutes != t.minutes) {
            $($minutesBlock).html(t.minutes);
            $($minutesTextBlock).html(wordend(t.minutes, 'минут', 'а', 'ы', ''));
            minutes = t.minutes;
        }

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

function wordend(number, word, end1, end2, end3){
    if(Number(String(number).length) > 2) number = Number(String(number).substr(-2));
    if(number == 11 || number == 12 || number == 13 || number == 14){
        return word+end3;
    } else {
        switch(Number(String(number).substr(-1))){
            case 1: return word+end1; break;
            case 2:case 3:case 4: return word+end2; break;
            case 5:case 6:case 7:case 8:case 9:case 0: return word+end3; break;
        }
    }
};

export function setTimer(date) {
    initializeClock($daysBlock, $hoursBlock, $minutesBlock, date);
}

