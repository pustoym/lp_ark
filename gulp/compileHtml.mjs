import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlbeautify from 'gulp-html-beautify';
import {htmlValidator} from 'gulp-w3c-html-validator';
import typograf from 'gulp-typograf';

const compileHtml = () => {
  return gulp.src(['source/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@root',
        context: { // глобальные переменные для include
          test: 'text',
        },
      }))
      .pipe(typograf({locale: ['ru', 'en-US']}))
      .pipe(htmlbeautify({
        'indent_size': 2,
        'preserve_newlines': true,
        'max_preserve_newlines': 0,
        'wrap_attributes': 'auto',
      }))
      .pipe(gulp.dest('build'));
};

const validateHtml = () => {
  return gulp.src('build/**/*.html')
      .pipe(htmlValidator.analyzer({
        url: 'https://validator.w3.org/nu/',
        ignoreLevel: 'info',
      }))
      .pipe(htmlValidator.reporter());
};

export {compileHtml as html, validateHtml};
