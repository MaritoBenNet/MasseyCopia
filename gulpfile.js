var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('saludar', function(){
	console.log('Hola mundo!!!!');
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/**/*.scss", ['sass']);
    //gulp.watch("app/*.html").on('change', browserSync.reload);
});


gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());

});

// construimos la tarea para la automatización 

gulp.task('observar', function() {
	gulp.watch('scss/**/*.scss',['sass']);

});