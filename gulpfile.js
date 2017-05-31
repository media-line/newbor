var gulp = require('gulp');
var rename = require("gulp-rename");

var path = {
            topMenu: 'bitrix/menu/top-menu',
            bottomMenu: 'bitrix/menu/bottom-menu',
            socialButtons: 'ml/social-buttons/.default',
            timer: 'ml/timer/.default',
            slider: 'bitrix/news.list/slider',
            sliderPreview: 'bitrix/news.list/slider-preview',
            video: 'ml/video/.default',
            optionsPreview: 'bitrix/news.list/options-preview',
            newsPreview: 'bitrix/news.list/news-preview',
            breadcrumbs: 'bitrix/breadcrumb/.default',
            newsList: 'bitrix/news/news/bitrix/news.list/.default',
            newsDetail: 'bitrix/news/news/bitrix/news.detail/.default',
            pagination: 'bitrix/system.pagenavigation/.default',
            loyaltyCategoriesList: 'bitrix/catalog/loyalty/bitrix/catalog.section.list/.default',
            loyaltyCompaniesList: 'bitrix/catalog/loyalty/bitrix/catalog.section/.default',
            loyaltyCompanyDetail: 'bitrix/catalog/loyalty/bitrix/catalog.element/.default',
            priceList: 'bitrix/catalog.section.list/price-list',
            contacts: 'ml/contacts-map/.default',
            formatsList: 'bitrix/news/formats/bitrix/news.list/.default',
            formatDetail: 'bitrix/news/formats/bitrix/news.detail/.default',
            sliderLayout: 'bitrix/news.list/slider-layout',
            map: 'bitrix/news.list/infrastructure-map',
            conditionsList: 'bitrix/news/conditions/bitrix/news.list/.default',
            slideMenu: 'bitrix/menu/slide-menu',
            orderForm: 'bitrix/form.result.new/send-application',
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
        
        
    gulp.src('public/css/inner.css')
        .pipe(rename('inner.css'))
        .pipe(gulp.dest('public/html_dev/'));
        
    gulp.src('public/js/inner.js')
        .pipe(rename('inner.js'))
        .pipe(gulp.dest('public/html_dev/js/'));      


    gulp.src('public/css/common.css')
        .pipe(rename('common.css'))
        .pipe(gulp.dest('public/html_dev/'));
        
    gulp.src('public/js/common.js')
        .pipe(rename('common.js'))
        .pipe(gulp.dest('public/html_dev/js/'));          
        
        
    gulp.src('public/css/commonWebpack.css')
        .pipe(rename('commonWebpack.css'))
        .pipe(gulp.dest('public/html_dev/'));
        
    gulp.src('public/js/commonWebpack.js')
        .pipe(rename('commonWebpack.js'))
        .pipe(gulp.dest('public/html_dev/js/'));
     
     
    gulp.src('public/css/gallery.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/html_dev/components/bitrix/news.list/gallery')); 
        
    gulp.src('public/css/gallery.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('public/html_dev/components/bitrix/news.list/video')); 
    return true;
});

