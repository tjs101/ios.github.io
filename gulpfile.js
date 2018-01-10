var gulp = require('gulp'),
    uglify = require('gulp-uglify'), // 压缩js文件
    sass = require('gulp-sass'), // 编译sass
    cleanCSS = require('gulp-clean-css'), // 压缩css文件
    rename = require('gulp-rename'); // 文件重命名

gulp.task('scripts', function(){
    gulp.src('{{ site.baseurl}}/dev/js/index.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('{{ site.baseurl}}/assets/js'))
});

gulp.task('sass', function(){
    gulp.src('{{ site.baseurl}}/dev/sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('{{ site.baseurl}}/dev/sass'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('{{ site.baseurl}}/assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('{{ site.baseurl}}/dev/sass/*.scss', ['sass']);
    gulp.watch('{{ site.baseurl}}/dev/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'sass', 'watch']);