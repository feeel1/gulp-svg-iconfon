var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css');

var fontName = 'custome-font';//название щрифта
var className = 'sf';//class css

gulp.task('default', function () {
	gulp.src(['icons/*.svg'])
		.pipe(iconfont({
			fontName: fontName
		}))
		.on('codepoints', function (codepoints, options) {
			var glyphs = {};
			codepoints.forEach(function(glyph) {
				glyphs[glyph.name] = '\\'+glyph.codepoint.toString(16).toUpperCase()
			});
			gulp.src('template.css')
				.pipe(consolidate('lodash', {
					glyphs: glyphs,
					fontName: fontName,
					fontPath: '../fonts/',
					className: className,
					normalize: true
				}))
				.pipe(rename({basename: 'square-font'}))
				.pipe(gulp.dest('dist/css/'))
				.pipe(minifyCss())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('dist/css/'));
		})
		.pipe(gulp.dest('dist/fonts/'));
});
