'use strict';

const cssunit = require('gulp-css-unit');

module.exports = function () {
  $.gulp.task('sass', function () {
    return $.gulp.src('./source/style/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.sassGlob())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({title: 'Style'}))
      .pipe($.gp.autoprefixer({browsers: $.config.autoprefixerConfig}))
      // .pipe($.gp.cssunit({type: 'px-to-rem', rootSize: 16}))
      .pipe(cssunit({
        type: 'px-to-rem',
        rootSize: 16
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
      .pipe($.browserSync.stream());
  })
};
