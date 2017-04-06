var gulp = require('gulp'),
	connect = require('gulp-connect'), //运行live-reload服务器
	browserify = require('gulp-browserify'), //将所有组件拼接在一起，也可以使用require方式引入
	concat = require('gulp-concat'), //将所有的文件拼到一起
	port = process.env.port || 5000; //服务器端口

gulp.task('browserify', function() {
	gulp.src('./app/js/main.js')
		.pipe(browserify({
			transform: 'reactify'
		}))
		.pipe(gulp.dest('./dist/js'))
});

//live reload
gulp.task('connect', function() {
	connect.server({
		// root: './',
		port: port,
		livereload: true
	})
});

//reload js,html
gulp.task('js', function() {
	gulp.src('./dist/**/*.js')
		.pipe(connect.reload())
});

gulp.task('html', function() {
	gulp.src('./app/**/*.html')
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch('./dist/**/*.js', ['js']);
	gulp.watch('./app/**/*.html', ['html']);
	gulp.watch('./app/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'watch']);