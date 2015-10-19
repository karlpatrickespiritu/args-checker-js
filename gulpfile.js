var gulp = require('gulp')
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del');

gulp.task('clean', function() {
    del([
        './dist/*.js'
    ]).then(function(paths) {
        console.log(paths);
    })
});

gulp.task('scripts', function() {

    // not minified
    gulp.src(['./src/args-checker.js'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));

    // minified
    gulp.src(['./src/args-checker.js'])
        .pipe(plumber())
        .pipe(concat('args-checker.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['clean', 'scripts']);