var
	config		= require('./config'),
	gulp 			= require('gulp'),
	runSequence	= require('run-sequence')
							.use(gulp);

gulp.task('build', function(cb) {
	if (config.typeOf.svgSprite == 'inline') {
		runSequence(
			'clean',
			'svgBuild',
			'pngSprite',
			'css',
			'js',
			'fonts',
			'img',
			cb
		)
	} else {
		runSequence(
			'clean',
			// 'svgBuild',
			'pngSprite',
			'html',
			'css',
			'js',
			'fonts',
			'img',
			cb
		)
	}
});