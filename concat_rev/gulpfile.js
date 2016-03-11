var gulp = require('gulp');
var concat = require('gulp-concat');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var rev_replace = require('gulp-rev-replace');

gulp.task('default', function() {

  // get all html files
  gulp.src('*.html')
    // parse html and replace nooptimized blocks with optimized block reference
    .pipe(useref())
    // only for js add revisioning
    .pipe(gulpif('*.js', rev()))
    // replace revisioned file name in html
    .pipe(rev_replace())
    .pipe(gulp.dest('dist'));

});