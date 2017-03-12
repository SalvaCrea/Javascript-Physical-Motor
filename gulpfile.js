var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("includes/**").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    browserSync.stream();
});

gulp.task('default', ['serve']);
