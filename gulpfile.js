//Todo esto es lo mismo que tener "sass": "sass --watch src/scss:build/css" en el archivo package.json
import {src,dest, watch} from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

export function css(done) {
    src('src/scss/app.scss') //Se declara con qué archivos se van a trabajar
    .pipe( sass().on('error', sass.logError) )//Nos ayuda a visualizar errores con el archivo Variables de sass como archivo externo
    .pipe( dest('build/css') );//Crea la carpeta y archivo css ya compilado

    done();
}

//función que equivale lo mismo que colocar --watch y visualizar en todo momento los cambios de css en SASS
export function dev() {
    watch('src/scss/**/*.scss', css) //El watch tomará las carpetas y archivos que tenemos, los **/* buscará arvhiso en todas las carpetas '**' y en todos los arvhiso '*' con extensión .scss
}