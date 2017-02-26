'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  buffer : require('vinyl-buffer'),
  browserSync: require('browser-sync').create(),
  merge: require('merge-stream'),
  sassGlob: require('gulp-sass-glob'),
  cssunit: require('gulp-css-unit'),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  // 'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'sprite:svg',
    'sprite:png'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
