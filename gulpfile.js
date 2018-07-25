var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('saludar', function(){
	console.log('Hola mundo!!!!');
});


gulp.task('sass', function(){
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'));

});

// construimos la tarea para la automatización 

gulp.task('observar', function() {
	gulp.watch('scss/**/*.scss',['sass']);

});