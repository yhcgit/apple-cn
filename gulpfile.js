var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    css = require('gulp-clean-css'),
    html= require('gulp-htmlmin'),
    img = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'), /* 深度压缩图片 */
    cache = require('gulp-cache'),/* 只压缩修改过的图片 */
    rename = require('gulp-rename');

gulp.task('html', function () {
  var opations = {
    collapseWhitespace : true, /* 清楚空格 */
    collapseBooleanAttributes : true, /* 清楚布尔类型属性 */
    removeComments : true, /* 清楚注释 */
    collapseWhitespace : true, /* 压缩html */
    minfyJS : true, /* 压缩js */
    minfyCss : true /* 压缩CSS */
  };
  gulp.src('./html/index.html')
      .pipe(html(opations))
      .pipe(rename('index.min.html'))
      .pipe(gulp.dest('./min1'));
});

gulp.task('css', function () {
  gulp.src('./css/*.css')
      .pipe(css())
      .pipe(gulp.dest('./min1'));
});

gulp.task('js', function () {
  gulp.src('./js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./min1'));
});

gulp.task('img', function () {
  gulp.src('./images/*.{ico,jpg,png,svg}')
  .pipe(img({
    optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
    progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
    interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
    multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
    svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
    use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
  }))
  .pipe(gulp.dest('./min1'));
});

gulp.task('cache', function () {
  gulp.src('./images/*.{ico,jpg,png,svg}')
  .pipe(cache({
    progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
    svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
    use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
  }))
  .pipe(gulp.dest('./min1'));
})

gulp.task('default',['html', 'css', 'js', 'img', 'cache']);
