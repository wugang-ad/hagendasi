const gulp = require('gulp'),
      html = require('gulp-htmlmin'),  //压缩html
    //   concat = require('gulp-concat'),  //合并js
      cssnano = require('gulp-cssnano'), //压缩css
      imagemin = require('gulp-imagemin'),//压缩img
      rename = require('gulp-rename'),   //重命名
      uglify = require('gulp-uglify'),//压缩js
      babel = require('gulp-babel'),  //
      sass = require('gulp-sass');    //编译sass

function fnCopy(){
    return gulp.src('./src/index.html')
           .pipe(gulp.dest('./dist'));
}

function fnCss(){
    return gulp.src('./src/css/*.css')
           .pipe(cssnano())
           .pipe(rename({suffix : '.min'}))
           .pipe(gulp.dest('./dist/css'));
}

function fnSass(){
    return gulp.src('./src/sass/*.scss')
           .pipe(sass({outputStyli : 'expanded'}))
           .pipe(rename({suffix : '.min'}))
           .pipe(gulp.dest('./dist/css'));
}

function fnPage(){
    return gulp.src('./src/pages/*.html')
           .pipe(html())
           .pipe(rename({suffix : '.min'}))
           .pipe(gulp.dest('./dist/pages'))
}
function fnImg(){
    return gulp.src('./src/img/*')
           .pipe(imagemin())
           .pipe(gulp.dest('./dist/img'));
}
function fnJs(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
           .pipe(uglify())

        //    .pipe(concat())
            .pipe(rename({suffix : '.min'}))
           .pipe(gulp.dest('./dist/js'));
}
function fnWatch(){
    gulp.watch('./src/css/*.css',fnCss);
    gulp.watch('./src/index.html',fnCopy);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/pages/*.html',fnPage);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/js/*.js',fnJs);
}

exports.css = fnCss;
exports.copy = fnCopy;
exports.sass = fnSass;
exports.page = fnPage;
exports.img = fnImg;
exports.js = fnJs;
exports.default = fnWatch;      