var __cov_1d34535ab76b8 = (Function('return this'))();
if (!__cov_1d34535ab76b8.__coverage__) { __cov_1d34535ab76b8.__coverage__ = {}; }
__cov_1d34535ab76b8 = __cov_1d34535ab76b8.__coverage__;
if (!(__cov_1d34535ab76b8['/home/travis/build/npmdoc/node-npmdoc-gulp-zip/lib.npmdoc_gulp_zip.js'])) {
   __cov_1d34535ab76b8['/home/travis/build/npmdoc/node-npmdoc-gulp-zip/lib.npmdoc_gulp_zip.js'] = {"path":"/home/travis/build/npmdoc/node-npmdoc-gulp-zip/lib.npmdoc_gulp_zip.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},"b":{"1":[0,0,0,0],"2":[0,0,0,0],"3":[0,0],"4":[0,0],"5":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":12,"loc":{"start":{"line":12,"column":1},"end":{"line":12,"column":13}}},"2":{"name":"(anonymous_2)","line":19,"loc":{"start":{"line":19,"column":5},"end":{"line":19,"column":17}}},"3":{"name":"(anonymous_3)","line":23,"loc":{"start":{"line":23,"column":24},"end":{"line":23,"column":36}}}},"statementMap":{"1":{"start":{"line":12,"column":0},"end":{"line":53,"column":5}},"2":{"start":{"line":14,"column":4},"end":{"line":14,"column":14}},"3":{"start":{"line":19,"column":4},"end":{"line":52,"column":9}},"4":{"start":{"line":21,"column":8},"end":{"line":21,"column":19}},"5":{"start":{"line":23,"column":8},"end":{"line":35,"column":13}},"6":{"start":{"line":24,"column":12},"end":{"line":34,"column":13}},"7":{"start":{"line":25,"column":16},"end":{"line":28,"column":30}},"8":{"start":{"line":30,"column":16},"end":{"line":33,"column":27}},"9":{"start":{"line":37,"column":8},"end":{"line":39,"column":21}},"10":{"start":{"line":41,"column":8},"end":{"line":41,"column":54}},"11":{"start":{"line":43,"column":8},"end":{"line":43,"column":52}},"12":{"start":{"line":45,"column":8},"end":{"line":51,"column":9}},"13":{"start":{"line":46,"column":12},"end":{"line":46,"column":58}},"14":{"start":{"line":48,"column":12},"end":{"line":48,"column":35}},"15":{"start":{"line":49,"column":12},"end":{"line":49,"column":49}},"16":{"start":{"line":50,"column":12},"end":{"line":50,"column":43}}},"branchMap":{"1":{"line":25,"type":"binary-expr","locations":[{"start":{"line":25,"column":23},"end":{"line":25,"column":62}},{"start":{"line":26,"column":20},"end":{"line":26,"column":70}},{"start":{"line":27,"column":20},"end":{"line":27,"column":71}},{"start":{"line":28,"column":20},"end":{"line":28,"column":29}}]},"2":{"line":30,"type":"binary-expr","locations":[{"start":{"line":30,"column":23},"end":{"line":30,"column":37}},{"start":{"line":31,"column":20},"end":{"line":31,"column":61}},{"start":{"line":32,"column":20},"end":{"line":32,"column":70}},{"start":{"line":33,"column":20},"end":{"line":33,"column":26}}]},"3":{"line":37,"type":"cond-expr","locations":[{"start":{"line":38,"column":14},"end":{"line":38,"column":20}},{"start":{"line":39,"column":14},"end":{"line":39,"column":20}}]},"4":{"line":41,"type":"binary-expr","locations":[{"start":{"line":41,"column":16},"end":{"line":41,"column":44}},{"start":{"line":41,"column":48},"end":{"line":41,"column":53}}]},"5":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":8},"end":{"line":45,"column":8}},{"start":{"line":45,"column":8},"end":{"line":45,"column":8}}]}},"code":["/* istanbul instrument in package npmdoc_gulp_zip */","/*jslint","    bitwise: true,","    browser: true,","    maxerr: 8,","    maxlen: 96,","    node: true,","    nomen: true,","    regexp: true,","    stupid: true","*/","(function () {","    'use strict';","    var local;","","","","    // run shared js-env code - pre-init","    (function () {","        // init local","        local = {};","        // init modeJs","        local.modeJs = (function () {","            try {","                return typeof navigator.userAgent === 'string' &&","                    typeof document.querySelector('body') === 'object' &&","                    typeof XMLHttpRequest.prototype.open === 'function' &&","                    'browser';","            } catch (errorCaughtBrowser) {","                return module.exports &&","                    typeof process.versions.node === 'string' &&","                    typeof require('http').createServer === 'function' &&","                    'node';","            }","        }());","        // init global","        local.global = local.modeJs === 'browser'","            ? window","            : global;","        // init utility2_rollup","        local = local.global.utility2_rollup || local;","        // init lib","        local.local = local.npmdoc_gulp_zip = local;","        // init exports","        if (local.modeJs === 'browser') {","            local.global.utility2_npmdoc_gulp_zip = local;","        } else {","            module.exports = local;","            module.exports.__dirname = __dirname;","            module.exports.module = module;","        }","    }());","}());",""]};
}
__cov_1d34535ab76b8 = __cov_1d34535ab76b8['/home/travis/build/npmdoc/node-npmdoc-gulp-zip/lib.npmdoc_gulp_zip.js'];
__cov_1d34535ab76b8.s['1']++;(function(){'use strict';__cov_1d34535ab76b8.f['1']++;__cov_1d34535ab76b8.s['2']++;var local;__cov_1d34535ab76b8.s['3']++;(function(){__cov_1d34535ab76b8.f['2']++;__cov_1d34535ab76b8.s['4']++;local={};__cov_1d34535ab76b8.s['5']++;local.modeJs=function(){__cov_1d34535ab76b8.f['3']++;__cov_1d34535ab76b8.s['6']++;try{__cov_1d34535ab76b8.s['7']++;return(__cov_1d34535ab76b8.b['1'][0]++,typeof navigator.userAgent==='string')&&(__cov_1d34535ab76b8.b['1'][1]++,typeof document.querySelector('body')==='object')&&(__cov_1d34535ab76b8.b['1'][2]++,typeof XMLHttpRequest.prototype.open==='function')&&(__cov_1d34535ab76b8.b['1'][3]++,'browser');}catch(errorCaughtBrowser){__cov_1d34535ab76b8.s['8']++;return(__cov_1d34535ab76b8.b['2'][0]++,module.exports)&&(__cov_1d34535ab76b8.b['2'][1]++,typeof process.versions.node==='string')&&(__cov_1d34535ab76b8.b['2'][2]++,typeof require('http').createServer==='function')&&(__cov_1d34535ab76b8.b['2'][3]++,'node');}}();__cov_1d34535ab76b8.s['9']++;local.global=local.modeJs==='browser'?(__cov_1d34535ab76b8.b['3'][0]++,window):(__cov_1d34535ab76b8.b['3'][1]++,global);__cov_1d34535ab76b8.s['10']++;local=(__cov_1d34535ab76b8.b['4'][0]++,local.global.utility2_rollup)||(__cov_1d34535ab76b8.b['4'][1]++,local);__cov_1d34535ab76b8.s['11']++;local.local=local.npmdoc_gulp_zip=local;__cov_1d34535ab76b8.s['12']++;if(local.modeJs==='browser'){__cov_1d34535ab76b8.b['5'][0]++;__cov_1d34535ab76b8.s['13']++;local.global.utility2_npmdoc_gulp_zip=local;}else{__cov_1d34535ab76b8.b['5'][1]++;__cov_1d34535ab76b8.s['14']++;module.exports=local;__cov_1d34535ab76b8.s['15']++;module.exports.__dirname=__dirname;__cov_1d34535ab76b8.s['16']++;module.exports.module=module;}}());}());
