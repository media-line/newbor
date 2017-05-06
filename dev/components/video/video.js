"use strict";

import './video.scss';
import isMobile from 'isMobileJs';

const $video = ".video__tag";
const $button = ".video__button";
const buttonActive = "video__button_active";
const $videoInfo = ".video__info";

$(document).ready(function () {
    $($button).click(function () {
        let currentVideo = $(this).siblings($video)[0];

        if (currentVideo.paused) {
            $(this).addClass(buttonActive);
            currentVideo.play();
        } else {
            currentVideo.pause();
            $(this).removeClass(buttonActive);
        }
    });

    if (isMobile.apple.device || isMobile.apple.ipod || isMobile.apple.phone || isMobile.apple.tablet) {
        $($videoInfo).css('display', 'none');
    }
});
