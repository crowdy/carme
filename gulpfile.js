var gulp = require('gulp')

gulp.task('jupyterlab', function() {
  return gulp.src(['./jupyterlab/**/*'])
    .pipe(gulp.dest('carme'))
});

gulp.task('carme_extension', function() {
  return gulp.src(['./carme_extension/**/*'])
    .pipe(gulp.dest('carme'))
});