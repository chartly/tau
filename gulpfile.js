var gulp = require('gulp');
var typescript = require('gulp-tsc');
var cfg = require('./gulpfile.config');
 
gulp.task('compile', function(){
  gulp.src(['src/**/*.*'])
    .pipe(typescript())
    .pipe(gulp.dest('bin/js'))
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.*', ['compile']);
});;