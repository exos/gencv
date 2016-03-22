"use strict";

var gulp = require('gulp');

var rename = require('gulp-rename');

// Css
var sass = require('gulp-sass');

// Jade
var jade = require('gulp-jade');

// Build-js 
var browserify = require('gulp-browserify');

// PDF
var pdf = require('gulp-html-pdf');

// Data
var data = require('./data.json');

gulp.task('copy-fonts-awesome', function () {
    
    return gulp.src([
        'node_modules/font-awesome/fonts/*.ttf',
        'node_modules/font-awesome/fonts/*.woff',
        'node_modules/font-awesome/fonts/*.woff2'
    ], {
        base: 'node_modules/font-awesome/fonts'
    })
        .pipe(gulp.dest('build/fonts'));

});

gulp.task('copy-fonts', [
    'copy-fonts-awesome',
]);

gulp.task('build-styles', function(done) {
  gulp.src('src/main.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(rename({extension: '.css'}))
    .pipe(gulp.dest('./build/css'))
    .on('end', done);
});

gulp.task('build-template', function () {

    gulp.src('src/template.jade')
        .pipe(jade({
            locals: data,
            pretty: true
        }))
        .pipe(gulp.dest('./build'));

});

gulp.task('build-js', function () {

    var options = {
        //insertGlobals : true,
        debug : !gulp.env.production,
        extensions: [
            'es6'
        ],
        transform: [
            'babelify',
            'jadeify'
        ]
    };

    return gulp.src('src/main.js')
        .pipe(browserify(options))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('build', [
    'copy-fonts',
    'build-styles',
    'build-template',
    'build-js'
]);

gulp.task('genpdf', function () {

    return gulp.src('build/template.html')
        .pipe(pdf({
            type: "pdf",
            quality: "100",
            format: "A4",
            base: 'file:///' + __dirname + '/build/',
            phantomArgs: ['--config=phantom.json']
        }))
        .pipe(gulp.dest('./build'));

});

