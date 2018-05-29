let gulp = require('gulp'),
	poststylus = require('poststylus'),
	stylus = require('gulp-stylus'),
	livereload = require('gulp-livereload');
 	data = require('gulp-data');
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	cssnext = require('cssnext'),
	rucksack = require('rucksack-css'),
	stylelint = require('stylelint');
	postcss = require('gulp-postcss');

	
function swallowError(error) {
	console.log(error)
	this.emit('end')
}

gulp.task('css', function () {
	let processors = [
		autoprefixer,
		cssnext,
		rucksack
	];
	return gulp.src('./src/styles/main.styl')
		.pipe(stylus({
			use: [
				poststylus(processors)
			],
			linenos: true
		}))
		.on('error', swallowError)
		.pipe(gulp.dest('./src/styles'))
		.pipe(livereload());
});


gulp.task('watch', function () {
	livereload.listen();
	gulp.watch('./src/styles/**/*.styl', ['css']);
});