const { exec } = require('child_process');

const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-clean-css');
const livereload = require('gulp-livereload');

gulp.task('copy', () => gulp.src('assets/**/*')
  .pipe(gulp.dest('app/assets')));

gulp.task('html', () => gulp.src('src/index.html')
  .pipe(gulp.dest('app/'))
  .pipe(livereload()));

gulp.task('css', () => gulp.src('src/**/*.css')
  .pipe(css())
  .pipe(gulp.dest('app/'))
  .pipe(livereload()));

gulp.task('js', () => gulp.src(['main.js', 'src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('app/'))
  .pipe(livereload()));

gulp.task('watch', async () => {
  livereload.listen();
  gulp.watch('src/**/*.html', gulp.series('html'));
  gulp.watch('src/**/*.css', gulp.series('css'));
  gulp.watch('src/**/*.js', gulp.series('js'));
});

gulp.task('build', gulp.series('copy', 'html', 'css', 'js'));

gulp.task('start', gulp.series('build', () => exec(`${__dirname}/node_modules/.bin/electron .`).on('close', () => process.exit())));

gulp.task('default', gulp.parallel('start', 'watch'));

gulp.task('dist', gulp.series('build', () => exec(`${__dirname}/node_modules/.bin/electron-builder .`).on('close', () => process.exit())));
