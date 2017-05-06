"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        topMenu: __dirname + '/dev/components/top-menu/top-menu',
        slideMenu: __dirname + '/dev/components/slide-menu/slide-menu',
        bottomMenu: __dirname + '/dev/components/bottom-menu/bottom-menu',
        socialButtons: __dirname + '/dev/components/social-buttons/social-buttons',
        timer: __dirname + '/dev/components/timer/timer',
        breadcrumbs: __dirname + '/dev/components/breadcrumbs/breadcrumbs',
        pagination: __dirname + '/dev/components/pagination/pagination',
        slider: __dirname + '/dev/components/slider/slider',
        sliderPreview: __dirname + '/dev/components/slider-preview/slider-preview',
        optionsPreview: __dirname + '/dev/components/options-preview/options-preview',
        newsPreview: __dirname + '/dev/components/news-preview/news-preview',
        newsDetail: __dirname + '/dev/components/news-detail/news-detail',
        newsList: __dirname + '/dev/components/news-list/news-list',
        loyaltyCompaniesList: __dirname + '/dev/components/loyalty-companies-list/loyalty-companies-list',
        loyaltyCompanyDetail: __dirname + '/dev/components/loyalty-company-detail/loyalty-company-detail',
        loyaltyCategoriesList: __dirname + '/dev/components/loyalty-categories-list/loyalty-categories-list',
        contacts: __dirname + '/dev/components/contacts/contacts',
        priceList: __dirname + '/dev/components/price-list/price-list',
        conditionsList: __dirname + '/dev/components/conditions-list/conditions-list',
        formatsList: __dirname + '/dev/components/formats-list/formats-list',
        formatDetail: __dirname + '/dev/components/format-detail/format-detail',
        sliderLayout: __dirname + '/dev/components/slider-layout/slider-layout',
        map: __dirname + '/dev/components/map/map',
        apartmentsList: __dirname + '/dev/components/apartments-list/apartments-list',
        video: __dirname + '/dev/components/video/video',
        
        
        
        common: __dirname + '/dev/modules/common/common',
        mainpage: __dirname + '/dev/modules/mainpage/mainpage',
        inner: __dirname + '/dev/modules/inner/inner',
    
        mainpagePage: __dirname + '/dev/mainpage',
        newsPage: __dirname + '/dev/news-page',
        newsDetailPage: __dirname + '/dev/news-detail-page',
        loyaltyCompaniesPage: __dirname + '/dev/loyalty-companies-page',
        loyaltyCompanyPage: __dirname + '/dev/loyalty-company-page',
        loyaltyCategoriesPage: __dirname + '/dev/loyalty-categories-page',
        errorPage: __dirname + '/dev/error-page',
        aboutPage: __dirname + '/dev/about-page',
        contactsPage: __dirname + '/dev/contacts-page',
        pricePage: __dirname + '/dev/price-page',
        conditionsPage: __dirname + '/dev/conditions-page',
        formatsPage: __dirname + '/dev/formats-page',
        formatPage: __dirname + '/dev/format-page',
        infrastructurePage: __dirname + '/dev/infrastructure-page',
        apartmentsPage: __dirname + '/dev/apartments-page',
    }, 
    output: {
        path: __dirname + '/public',
        publicPath: NODE_ENV == 'development' ? '/' : '',
        filename: 'js/[name].js',
        library: ["newbor", "[name]"],
    },
    
    watch: NODE_ENV == 'development',
    
    devtool: NODE_ENV == 'development' ? 'eval-source-map' : false,
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //minimize: true
                            }
                        }, 
                        "postcss-loader", 
                        "sass-loader",
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                // Or array of paths
                                resources: ['./dev/sass/mixins.scss', './dev/sass/_grid.scss', './dev/sass/variables.scss']
                            }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]?[hash]'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]?[hash]'
            },
            {
                test: /\.html$/,
                loader: NODE_ENV == 'development' ? "raw-loader" : 'file-loader?name=[name].[ext]'
            },
        ],
    },
    
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'test',
            minChunks: 2,
        }),*/
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        }),*/
        new ExtractTextPlugin({filename: "css/[name].css", allChunks: true, disable: NODE_ENV == 'development'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: NODE_ENV
        }),
    ],
    
    resolve: {
        alias: {
            'jquery': require.resolve('jquery'),
        },
    },
    
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dev'
    }
};