var gulp = require('gulp')  // 引入gulp
var uglify = require('gulp-uglify')  // 压缩JS
var less = require('gulp-less') // 编译less
var cleanCss = require('gulp-clean-css') // 压缩CSS
var rename = require('gulp-rename') // 重命名
var imagemin = require('gulp-imagemin')  // 压缩图片
var gutil = require('gulp-util');

// require 加载 browser-sync 模块
var bs = require("browser-sync").create();

// 开启任务
/* 压缩js */
gulp.task('uglify', function () {
    gulp.src('./js/*.js')    // 要处理的源文件
        .pipe(uglify())  // 处理(压缩JS)
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); }) //增加这一行
        .pipe(rename({ suffix: '.min' }))  // 处理(重命名)
        .pipe(gulp.dest('./dist/js'))  // 输出目录
})

/* css处理 */
gulp.task('cssTask', function () {
    gulp.src('./less/*.less')    // 要处理的源文件
        .pipe(less())  // 处理 (编译less成css)
        .pipe(cleanCss())  // 处理 (压缩css)
        .pipe(rename({ suffix: '.min' }))  // 处理(重命名)
        .pipe(gulp.dest('./dist/css'))  // 输出目录
})

/* 压缩图片: 项目开始前 统一压缩一次 */
gulp.task('imagemin', function () {
    gulp.src('./images/*.{png,jpg}')    // 要处理的源文件
        .pipe(imagemin())  // 处理(压缩图片)
        .pipe(gulp.dest('./dist/images'))  // 输出目录
})


/* 观察者模式 */
gulp.task('watch', function () {
    // 观察文件变动 如果变动 马上执行对应的任务
    gulp.watch('./less/*.less', ['cssTask'])
    gulp.watch('./js/*.js', ['uglify'])
})

/* 启动服务器 */
gulp.task('serve', function () {
    // .init 启动服务器
    bs.init({
        server: "./"   // 服务器的根目录(就是当前目录 ...)
    });
})


/* 默认任务 */
// 自动
gulp.task('default', ['serve', 'uglify', 'cssTask', 'imagemin', 'watch'])

// 手动
// 1. gulp serve // 开服务器

// 2. 项目上线
// gulp.task('build', ['uglify', 'cssTask', 'imagemin']) 


/* 
    建议:   
        1. less任务要开.
        2. 图片刚开始统一压缩一次.
        3. js可以最后上线再压缩.
*/
