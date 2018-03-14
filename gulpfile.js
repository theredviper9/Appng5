var exec = require('child_process').exec;
var gulp = require('gulp');

gulp.task('build', function (cb) {
  exec('ng build', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});