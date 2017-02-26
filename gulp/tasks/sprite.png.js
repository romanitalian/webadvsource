'use strict';

// module.exports = function () {
//   $.gulp.task('sprite:png', function () {
//     return $.gulp.src('./source/icons/*.png')
//       .pipe($.gp.spritesmith({
//         imgName: 'sprite.png',
//         cssName: 'sprite.css'
//       }))
//       .pipe($.gulp.dest($.config.root + '/assets/sprite'))
//   })
// };

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/icons/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        algorithm: 'left-right',
        padding: 20
      }));
    var imgStream = spriteData.img.pipe($.gulp.dest($.config.root + '/assets/sprite'));
    var cssStream = spriteData.css.pipe($.gulp.dest($.config.root + '/assets/sprite'));
    return $.merge(imgStream, cssStream);
  });
};