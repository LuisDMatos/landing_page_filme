//importação dos plugins
const gulp = require('gulp');//importação do gulp
const sass = require('gulp-sass')(require('sass'));//importação do SASS
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')//busca os arquivos .scss na pasta
        .pipe(sass({ outputStyle: 'compressed'}))//comprime os arquivos SASS
        .pipe(gulp.dest('./dist/css'));//envia os arquivos comprimidos para a pasta
}

function images() {
    return gulp.src('./src/images/**/*')//busca TODS os arquivos na pasta
        .pipe(imagemin())//comprime as imagens
        .pipe(gulp.dest('./dist/images'));//envia os arquivos comprimidos para a pasta
}

exports.default = gulp.parallel(styles, images, scripts);//execulta as funções

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))//observa os arquivos ' ', e as funções (()) de forma paralela
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}