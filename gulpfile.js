//Import dependencies
var gulp = require('gulp');
var rollup = require('gulp-better-rollup');
var rename = require("gulp-rename");

//Build example task
gulp.task('build-example', function()
{
  //Initialize the source files list
  return gulp.src('./examples/index.js')

  //Compile using rollup
  .pipe(rollup({ plugins: [ ] }, { format: 'cjs' }))

  //Rename the output file
  .pipe(rename('bundle.js'))

  //Save to ./dist folder
  .pipe(gulp.dest('./examples/'));
});

//Default task
gulp.task('default', ['build-example']);
