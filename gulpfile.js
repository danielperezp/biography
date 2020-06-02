const gulp = require('gulp'),
 sass = require('gulp-sass'),
 autoprefixer = require('gulp-autoprefixer')


gulp.task('sass-btn-style', () =>
  gulp.src('./projects/btn-style/src/lib/styles/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./projects/btn-style/src/lib/styles/css'))
);
gulp.task('sass-customized-btn', () =>
  gulp.src('./projects/customized-btn/src/lib/styles/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('./projects/customized-btn/src/lib/styles/css'))
);