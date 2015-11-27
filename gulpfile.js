'use strict';

var	gulp				= require('gulp'),							// сам таскраннер
		autoprefixer	= require('gulp-autoprefixer'),			// добавляет префиксы
		browserSync		= require('browser-sync'),					// сервер
		clean				= require('gulp-clean'),					// чистильщик
		imagemin			= require('gulp-imagemin'),				// сжиматель картинок
		pngquant			= require('imagemin-pngquant'),			// чтоб сжиматель картинок с пнг работал
		jade				= require('gulp-jade'),						// компилятор джейда
		minicss			= require('gulp-minify-css'),				// миниффикатор ксс
		plumber			= require('gulp-plumber'),					// выводит ошибки в консоли не останавливая сервер
		reload			= browserSync.reload,						// просто сокращение
		rename			= require("gulp-rename"),					// переименовыватель
		rigger			= require('gulp-rigger'),					// втыкает файлов в файлы
		sourcemaps		= require('gulp-sourcemaps'),				// создает карты
		spritePng		= require('gulp.spritesmith'),			// делает пнг атласы
		// spriteSvg		= require('gulp-svg-spritesheet'),	// для атласов, еще не разобрался
		spriteSvg		= require('gulp-svg-sprite'),				// делает свг атласы (кое как) и файл стилей
		stylus			= require('gulp-stylus'),					// компилятор для стайлуса
		svg2png			= require('gulp-svg2png'),					// для фолбека с свг на пнг
		uglify			= require('gulp-uglify');					// сжимает джаваскрипт файлы

var path = {												// пути,
		src: {												// откуда брать
			img:			'src/img/*.*',					// картинки,
			fonts:		'src/fonts/*.*',				// шрифты,
			jade:			'src/*.jade',					// джейд файлы,
			js:			'src/js/main.js',				// джаваскрипт файлы,
			spritePng:	'src/img/sprite-png/*.png',// пнг-шки для пнг атласов,
			spriteSvg:	'src/img/sprite-svg/*.svg',// свг-шки для свг атласов,
			style:		'src/style/style.styl'		// стайлус файлы.
		},
																// пути,
		build: {												// куда класть
			img:			'build/img',					// картинки,
			fonts:		'build/fonts',					// шрифты,
			jade:			'build',							// хтмл файлы,
			js:			'build/js',						// джаваскрипт файлы,
			spritePng:	'src/img/',						// пнг атласы,
			spriteSvg:	'src/img/svgSprite.svg',	// свг атласы,
			style:		'build/css/'					// ксс файлы.
		},
																// пути,
		watch: {												// где следить за
			img:			'src/img/**/*.*',				// картинками,
			fonts:		'src/fonts/*.*',				// шрифтами,
			jade:			'src/**/*.jade',				// джейд файлами,
			js:			'src/js/**/*.js',				// джаваскрипт файлами,
			spritePng:	'src/img/sprite-png/*.png',// исходниками пнг атласов,
			spriteSvg:	'src/img/sprite-svg/*.svg',// исходниками свг атласов,
			style:		'src/style/**/*.styl'		// стайлус файлами.
		},
		clean: 'build/*'									// директория, которую чистить.
};

gulp.task('jade:build', function() {		// компиляция джейда
	return gulp.src(path.src.jade)			// берем нужный файл
		.pipe(plumber())							// это, чтобы сервак не падал при ошибках
		.pipe(jade({								// компилим
			pretty: true							// не сжимаем
		}))
		.pipe(gulp.dest(path.build.jade))	// кладем полученный хтмл по назначению
		.pipe(reload({								// обновляем страницу в браузере
			stream: true
		}));
});

gulp.task('style:build', function() {		// компиляция стайлуса
	return gulp.src(path.src.style)			// берем нужный файл
		.pipe(plumber())							// это, чтобы сервак не падал при ошибках
		.pipe(sourcemaps.init())				// составляем карту источников
		.pipe(stylus({								// компилим
			'include css': true					// мы ведь хотим инклюдить ксс? :)
		}))							
		.pipe(autoprefixer({browsers: [		// добавляем префиксы
			'> 1%',									// всему, чем пользуется >1% людей,
			'ie >= 9',								// ишаку от 9 и выше
			'last 2 versions'						// и всем последним 2 версиям
		]}))
		.pipe(gulp.dest(path.build.style))	// кладем полученный ксс по назначению
		.pipe(rename({								// сменим имя тому, что еще в памяти
			suffix: '.min'							// добавим суффикс "мин"
		}))
		.pipe(minicss())							// сожмем
		.pipe(sourcemaps.write('.'))			// кладем полученную карту по назначению
		.pipe(gulp.dest(path.build.style))	// кладем полученный сжатый ксс по назначению
		.pipe(reload({								// обновляем страницу в браузере
			stream: true
		}));
});

gulp.task('fonts:build', function() {		// перекладка шрифтов
	return gulp.src(path.src.fonts)			// берем шрифты
		.pipe(plumber())							// не дай бог что-то пойдет не так!
		.pipe(gulp.dest(path.build.fonts))	// кладем шрифты по назначению
});

gulp.task('js:build', function() {		// сборка js
	return gulp.src(path.src.js)			// берем главный js файл
		.pipe(plumber())						// это, чтобы сервак не падал при ошибках
		.pipe(rigger())						// вписываем в него все остальные js
		.pipe(sourcemaps.init())			// составляем карту источников
		.pipe(gulp.dest(path.build.js))	// кладем js по назначению
		.pipe(rename({							// сменим имя тому, что еще в памяти
			suffix: '.min'						// добавим суффикс "мин"
		}))
		.pipe(uglify())						// сжимаем
		.pipe(sourcemaps.write('.'))		// кладем полученную карту по назначению
		.pipe(gulp.dest(path.build.js))	// кладем сжатый js по назначению
		.pipe(reload({							// обновляем страницу в браузере
			stream: true
		}));
});

gulp.task('img:min', function() {		// жмем картинки
	return gulp.src(path.src.img)			// берем все картинки
		.pipe(plumber())						// это, чтобы сервак не падал при ошибках
		.pipe(imagemin({						// собсбвенно, сжимаем
			progressive: true,				// мы ж прогрессивные
			svgoPlugins: [{					// для сжатия свг
				removeViewBox: false			// хз зачем это :)
			}],
			use: [pngquant()],				// это чтоб и пнг поджать
			interlaced: true					// хз. честно
		}))
		.pipe(gulp.dest(path.build.img))	// кладем все по назначению
		.pipe(reload({							// обновляем страницу в браузере
			stream: true
		}));
});

// gulp.task('spriteSvg:build', function() {
// 	return gulp.src(path.src.spriteSvg)
// 		.pipe(spriteSvg({
// 			cssPathSvg: '../img/svgSprite.svg',
// 			cssPathNoSvg: '../img/noSvgSprite.svg',
// 			positioning: 'diagonal',
// 			units: 'em',
// 			templateSrc: 'src/tpl/svgSprite.tpl',
// 			templateDest: 'src/style/partials/svgSprite.styl'
// 		}))
// 		.pipe(gulp.dest(path.build.spriteSvg));
// });

gulp.task('svgclean', function() {		// это удаляет старый свг атлас
	gulp.src('src/img/spriteSvg*.svg')	// берем старый талас
		.pipe(clean());						// и нахрен его
});

gulp.task('spriteSvg:build', ['svgclean'], function() {			// собираем свг атласы
	return gulp.src(path.src.spriteSvg)									// берем свг-шки
		.pipe(plumber())														// см. таски выше
		.pipe(spriteSvg({														// собственно, собираем
			log: 'info',														// выводим инфу
			mode: {																// настройки
				css: {															// вставка через ксс
					render: {													// настройки вставки
						styl: {													// выдаст стайлус файл
							dest: '../style/partials/spriteSvg.styl'	// поправка пути для стайлус файла
						}
					},
					sprite: '../img/spriteSvg.svg',						// поправка пути для пути атласа
					prefix: '%s()',											// это чтоб миксины выдал, а не классы
					dimensions: '%s'											// это чтоб размеры отдельным миксином не приписывать
				}
			}
		}))
		.pipe(gulp.dest('src/'))											// кладем атлас по назначению
		.pipe(reload({															// см таски выше
			stream: true
		}));
});

gulp.task('spritePng:build', function() {					// собираем пнг спрайт
	gulp.src(path.src.spritePng)								// берем исходники
		.pipe(plumber())											//
		.pipe(spritePng({											// собираем:
			imgName: 'spritePng.png',							// обзавем атлас
			cssName: '../style/partials/spritePng.styl',	// обзавем файл стилей
			imgPath: '../img/spritePng.png'					// сюда положим
		}))
		.pipe(gulp.dest(path.build.spritePng))				// кладем атлас по назначению
		.pipe(reload({												//
			stream: true
		}));
})

gulp.task('img:build', [	// сборка картинок (все вместе)
	'spriteSvg:build',		// собрать свг атлас
	'spritePng:build',		// собрать пнг атлас
	'img:min'					// пожать картинки
]);

gulp.task('build', [	// главная сборка
	'jade:build',		// сборка джейда
	'style:build',		// сборка стайлуса
	'js:build',			// сборка js
	'fonts:build',		// перекладывание шрифтов
	'img:build'			// сборка картинок
]);

gulp.task('clean', function() {	// чистка
	return gulp.src(					//
		path.clean, {					// выбираем папку
			read: false					// на содержимое не смотрим (так быстрее)
		})
		.pipe(clean());				// и к чертям все удаляем
});

gulp.task('watch', function() {									// слежка за изменением файлов
	gulp.watch([path.watch.img], function(event, cb) {		// следим за картинками
		gulp.start('img:build');									// пересобираем картинки
	});																	// дальше по аналогии
	gulp.watch([path.watch.fonts], function(event, cb) {
		gulp.start('fonts:build');
	});
	gulp.watch([path.watch.jade], function(event, cb) {
		gulp.start('jade:build');
	});
	gulp.watch([path.watch.js], function(event, cb) {
		gulp.start('js:build');
	});
	gulp.watch([path.watch.style], function(event, cb) {
		gulp.start('style:build');
	});
});

gulp.task('server', function() {
	browserSync({
		server: {
			baseDir: 'build/'
		},
		tunnel: true,
		host: 'localhost',
		port: 9797,
		logPrefix: 'server says'
	});
});

gulp.task('default', ['clean'], function() {
	gulp.start(
		'watch',
		['build']
	);
	gulp.start('server');
});