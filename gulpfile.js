var gulp = require('gulp')

// this neeeds .git folder also to 'lerna ls'
gulp.task('jupyterlab', function() {
  return gulp.src(['./jupyterlab/**/*', './jupyterlab/.*/*'])
    .pipe(gulp.dest('carme'))
});

gulp.task('carme_extension', function() {
  return gulp.src(['./carme_extension/**/*'])
    .pipe(gulp.dest('carme'))
});