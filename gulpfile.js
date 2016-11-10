var gulp = require('gulp'),
  exec = require('child_process').exec;

gulp.task('default', ['copy-config','copy-script','compile']);

gulp.task('copy-config', function () {
  return gulp.src('./src/config/**/*.json')
    .pipe(gulp.dest('./dist/config'));
});

gulp.task('copy-script', function () {
  return gulp.src('./script/*')
    .pipe(gulp.dest('./dist/script/'));
});

gulp.task('compile', function (done) {
  exec('tsc' , function (err, stdOut, stdErr) {
    console.log(stdOut);
    if (err){
      done(err);
    } else {
      done();
    }
  });
});