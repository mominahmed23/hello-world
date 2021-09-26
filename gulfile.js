var fs = require("fs"),
  async = require("async"),
  readMultipleFiles = require("read-multiple-files");

const Parser = require("i18next-scanner").Parser;

const customHandler = function (key) {
  parser.set(key, key);
};

const parser = new Parser();
var content = "";

var dirPath = "pages/"; //provice here your path to dir

fs.readdir(dirPath, function (err, filesPath) {
  if (err) throw err;
  filesPath = filesPath.map(function (filePath) {
    //generating paths to file
    return dirPath + filePath;
  });
  console.log(filesPath);
  filesPath.map((item) => {
    content = fs.readFileSync("./pages/testing.js", "utf-8");
    console.log("reading ", item);
    parser
      .parseFuncFromString(content, customHandler) // pass a custom handler
      .parseFuncFromString(content, { list: ["t"] }) // override `func.list`
      .parseFuncFromString(content, { list: ["t"] }, customHandler)
      .parseFuncFromString(content); // use default options and handler

    // console.log("\nreading ", item);
    console.log("\n", parser.get());
  });
  // async.map(
  //   filesPath,
  //   function (filePath, cb) {
  //     //reading files or dir
  //     content = fs.readFileSync(filePath, "utf-8", cb);
  //     parser
  //       .parseFuncFromString(content, customHandler) // pass a custom handler
  //       .parseFuncFromString(content, { list: ["t"] }) // override `func.list`
  //       .parseFuncFromString(content, { list: ["t"] }, customHandler)
  //       .parseFuncFromString(content); // use default options and handler

  //     console.log("\nreading ", filePath);
  //     console.log("\n", parser.get());
  // var trans = parser.get();
  // console.log("here", trans);
  // const { translation } = trans.en;
  //console.log("\nafter destructuring", translation);
  // fs.readFile(filePath, 'utf8', cb);
  //   },
  //   function (err, results) {
  //     console.log(results); //this is state when all files are completely read
  //     res.send(results); //sending all data to client
  //   }
  // );
});

// Parse Translation Function
// i18next.t('key');
// content = fs.readFileSync("./pages/index.js", "utf-8");
// parser
//   .parseFuncFromString(content, customHandler) // pass a custom handler
//   .parseFuncFromString(content, { list: ["i18next.t"] }) // override `func.list`
//   .parseFuncFromString(content, { list: ["i18next.t"] }, customHandler)
//   .parseFuncFromString(content); // use default options and handler

// Parse Trans component
// content = fs.readFileSync("./pages/index.js", "utf-8");
// parser
//   .parseTransFromString(content, customHandler) // pass a custom handler
//   .parseTransFromString(content, {
//     component: "Trans",
//     i18nKey: "i18nKey",
//     defaultsKey: "defaults",
//   })
//   .parseTransFromString(content, { fallbackKey: true }) // Uses defaultValue as the fallback key when the i18nKey attribute is missing
//   .parseTransFromString(content); // use default options and handler

// console.log(parser.get());
// var trans = parser.get();
// console.log("here", trans);
// const { translation } = trans.en;
// console.log("after destructuring", translation);

//console.log(parser.get({ sort: true }));
//console.log(parser.get("translation:key", { lng: "en" }));

// const gulp = require("gulp");
// const sort = require("gulp-sort");
// const scanner = require("i18next-scanner");

// gulp.task("i18next", function () {
//   console.log(gulp);
//   return gulp
//     .src(["pages/**/*.{js,html}"])
//     .pipe(sort()) // Sort files in stream by path
//     .pipe(
//       scanner({
//         lngs: ["en", "ar"], // supported languages
//         resource: {
//           // the source path is relative to current working directory
//           loadPath: "public/locales/{{lng}}/{{ns}}.json",

//           // the destination path is relative to your `gulp.dest()` path
//           savePath: "/locales/{{lng}}/{{ns}}.json",
//         },
//       })
//     )
//     .pipe(gulp.dest("public"));
// });

// const Parser = require("i18next-scanner").Parser;
// const parser = new Parser();

// const jsx = '<Trans i18nKey="some.key">Default text</Trans>';
// parser.parseTransFromString(jsx);

// parser.get();

// const fs = require("fs");
// const chalk = require("chalk");
// module.exports = {
//   input: [
//     "pages/**/*.{js,jsx}",
//     // Use ! to filter out files or directories
//     "!app/**/*.spec.{js,jsx}",
//     "!app/i18n/**",
//     "!**/node_modules/**",
//   ],
//   output: "./",
//   options: {
//     debug: true,
//     func: {
//       list: ["i18next.t", "i18n.t"],
//       extensions: [".js", ".jsx"],
//     },
//     trans: {
//       component: "Trans",
//       i18nKey: "i18nKey",
//       defaultsKey: "defaults",
//       extensions: [".js", ".jsx"],
//       fallbackKey: function (ns, value) {
//         console.log(value);
//         return value;
//       },
//       acorn: {
//         ecmaVersion: 10, // defaults to 10
//         sourceType: "module", // defaults to 'module'
//         // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
//       },
//     },
//     lngs: ["en", "de"],
//     ns: ["locale", "resource"],
//     defaultLng: "en",
//     defaultNs: "resource",
//     defaultValue: "__STRING_NOT_TRANSLATED__",
//     resource: {
//       loadPath: "public/locales/{{lng}}/{{ns}}.json",
//       savePath: "public/locales/{{lng}}/{{ns}}.json",
//       jsonIndent: 2,
//       lineEnding: "\n",
//     },
//     nsSeparator: false, // namespace separator
//     keySeparator: false, // key separator
//     interpolation: {
//       prefix: "{{",
//       suffix: "}}",
//     },
//   },
//   transform: function customTransform(file, enc, done) {
//     "use strict";
//     const parser = this.parser;
//     const content = fs.readFileSync(file.path, enc);
//     let count = 0;

//     parser.parseFuncFromString(
//       content,
//       { list: ["i18next._", "i18next.__"] },
//       (key, options) => {
//         parser.set(
//           key,
//           Object.assign({}, options, {
//             nsSeparator: false,
//             keySeparator: false,
//           })
//         );
//         ++count;
//       }
//     );
//     console.log(count);
//     if (count <= 0) {
//       console.log(
//         `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
//           JSON.stringify(file.relative)
//         )}`
//       );
//     }

//     done();
//   },
// };
