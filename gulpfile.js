var gulp = require('gulp');
var rename = require("gulp-rename");

var path = {
            topMenu: 'bitrix/menu/top-menu',
            bottomMenu: 'bitrix/menu/bottom-menu',
            socialButtons: 'ml/social-buttons/.default',
            timer: 'ml/timer/.default',
            slider: 'bitrix/news.list/slider',
            }
            
var pathExcludeJS = [];
var pathExcludeCSS = [];

gulp.task('compile', function() {
    for (var name in path) {
        if (pathExcludeJS.indexOf(name) == -1) {
            gulp.src('public/js/'+name+'.js')
            .pipe(rename('script.js'))
            .pipe(gulp.dest('public/html_dev/components/'+path[name]));
        }
        
        if (pathExcludeCSS.indexOf(name) == -1) {
            gulp.src('public/css/'+name+'.css')
            .pipe(rename('style.css'))
            .pipe(gulp.dest('public/html_dev/components/'+path[name]));
        }
    }
        
    gulp.src('public/css/mainpage.css')
        .pipe(rename('mainpage.css'))
        .pipe(gulp.dest('public/html_dev/'));
        
    gulp.src('public/js/mainpage.js')
        .pipe(rename('mainpage.js'))
        .pipe(gulp.dest('public/html_dev/js/'));
        
        
    gulp.src('public/css/slideMenu.css')
        .pipe(rename('slideMenu.css'))
        .pipe(gulp.dest('public/html_dev/'));
        
    gulp.src('public/js/slideMenu.js')
        .pipe(rename('slideMenu.js'))
        .pipe(gulp.dest('public/html_dev/js/'));
    return true;
});

