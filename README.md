# api documentation for  [gulp-zip (v4.0.0)](https://github.com/sindresorhus/gulp-zip#readme)  [![npm package](https://img.shields.io/npm/v/npmdoc-gulp-zip.svg?style=flat-square)](https://www.npmjs.org/package/npmdoc-gulp-zip) [![travis-ci.org build-status](https://api.travis-ci.org/npmdoc/node-npmdoc-gulp-zip.svg)](https://travis-ci.org/npmdoc/node-npmdoc-gulp-zip)
#### ZIP compress files

[![NPM](https://nodei.co/npm/gulp-zip.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/gulp-zip)

[![apidoc](https://npmdoc.github.io/node-npmdoc-gulp-zip/build/screenCapture.buildCi.browser.apidoc.html.png)](https://npmdoc.github.io/node-npmdoc-gulp-zip/build/apidoc.html)

![npmPackageListing](https://npmdoc.github.io/node-npmdoc-gulp-zip/build/screenCapture.npmPackageListing.svg)

![npmPackageDependencyTree](https://npmdoc.github.io/node-npmdoc-gulp-zip/build/screenCapture.npmPackageDependencyTree.svg)



# package.json

```json

{
    "author": {
        "name": "Sindre Sorhus",
        "url": "sindresorhus.com"
    },
    "bugs": {
        "url": "https://github.com/sindresorhus/gulp-zip/issues"
    },
    "dependencies": {
        "get-stream": "^3.0.0",
        "gulp-util": "^3.0.0",
        "through2": "^2.0.1",
        "yazl": "^2.1.0"
    },
    "description": "ZIP compress files",
    "devDependencies": {
        "ava": "*",
        "decompress-unzip": "^3.0.0",
        "gulp": "^3.9.1",
        "vinyl-assign": "^1.2.1",
        "vinyl-file": "^3.0.0",
        "xo": "*"
    },
    "directories": {},
    "dist": {
        "shasum": "1cefc08b4bf36df4b5b1e7c6b36ee55ebbe4a881",
        "tarball": "https://registry.npmjs.org/gulp-zip/-/gulp-zip-4.0.0.tgz"
    },
    "engines": {
        "node": ">=4"
    },
    "files": [
        "index.js"
    ],
    "gitHead": "be63454cb68b2736d08673c2a26b6f1f3424b279",
    "homepage": "https://github.com/sindresorhus/gulp-zip#readme",
    "keywords": [
        "gulpplugin",
        "zip",
        "archive",
        "archiver",
        "compress",
        "compression",
        "file"
    ],
    "license": "MIT",
    "maintainers": [
        {
            "name": "sindresorhus"
        },
        {
            "name": "kevva"
        }
    ],
    "name": "gulp-zip",
    "optionalDependencies": {},
    "repository": {
        "type": "git",
        "url": "git+https://github.com/sindresorhus/gulp-zip.git"
    },
    "scripts": {
        "test": "xo && ava"
    },
    "version": "4.0.0"
}
```



# <a name="apidoc.tableOfContents"></a>[table of contents](#apidoc.tableOfContents)

#### [module gulp-zip](#apidoc.module.gulp-zip)
1.  [function <span class="apidocSignatureSpan"></span>gulp-zip (filename, opts)](#apidoc.element.gulp-zip.gulp-zip)
1.  [function <span class="apidocSignatureSpan">gulp-zip.</span>toString ()](#apidoc.element.gulp-zip.toString)



# <a name="apidoc.module.gulp-zip"></a>[module gulp-zip](#apidoc.module.gulp-zip)

#### <a name="apidoc.element.gulp-zip.gulp-zip"></a>[function <span class="apidocSignatureSpan"></span>gulp-zip (filename, opts)](#apidoc.element.gulp-zip.gulp-zip)
- description and source-code
```javascript
(filename, opts) => {
	if (!filename) {
		throw new gutil.PluginError('gulp-zip', ''filename' required');
	}

	opts = Object.assign({
		compress: true
	}, opts);

	let firstFile;
	const zip = new Yazl.ZipFile();

	return through.obj((file, enc, cb) => {
		if (!firstFile) {
			firstFile = file;
		}

		// Because Windows...
		const pathname = file.relative.replace(/\\/g, '/');

		if (!pathname) {
			cb();
			return;
		}

		if (file.isNull() && file.stat && file.stat.isDirectory && file.stat.isDirectory()) {
			zip.addEmptyDirectory(pathname, {
				mtime: file.stat.mtime || new Date(),
				mode: file.stat.mode
			});
		} else {
			const stat = {
				compress: opts.compress,
				mtime: file.stat ? file.stat.mtime : new Date(),
				mode: file.stat ? file.stat.mode : null
			};

			if (file.isStream()) {
				zip.addReadStream(file.contents, pathname, stat);
			}

			if (file.isBuffer()) {
				zip.addBuffer(file.contents, pathname, stat);
			}
		}

		cb();
	}, function (cb) {
		if (!firstFile) {
			cb();
			return;
		}

		getStream.buffer(zip.outputStream).then(data => {
			this.push(new gutil.File({
				cwd: firstFile.cwd,
				base: firstFile.base,
				path: path.join(firstFile.base, filename),
				contents: data
			}));

			cb(); // eslint-disable-line promise/no-callback-in-promise
		});

		zip.end();
	});
}
```
- example usage
```shell
n/a
```

#### <a name="apidoc.element.gulp-zip.toString"></a>[function <span class="apidocSignatureSpan">gulp-zip.</span>toString ()](#apidoc.element.gulp-zip.toString)
- description and source-code
```javascript
toString = function () {
    return toString;
}
```
- example usage
```shell
n/a
```



# misc
- this document was created with [utility2](https://github.com/kaizhu256/node-utility2)
