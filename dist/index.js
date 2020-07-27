/*!
 * name: @feizheng/glob-rename
 * description: Rename based on globby.
 * homepage: https://github.com/afeiship/glob-rename
 * version: 1.0.0
 * date: 2020-07-27T13:47:53.285Z
 * license: MIT
 */

"use strict";var fs=require("fs"),path=require("path"),glob=require("globby"),mkdirp=require("mkdirp"),RETURN_VALUE=function(n){return n},move=function(n,i,r){var t=r||RETURN_VALUE;n.forEach(function(n){var r=path.join(i,path.dirname(n)),e=path.basename(n);mkdirp.sync(r);var o=t(path.parse(path.join(r,e))),a=path.join(o.dir,o.base);fs.renameSync(n,a)})},mv=function(n,e,o,a){glob(n,function(n,r){move(r,e,o),a&&a(n,r)})},mvSync=function(n,r,e){move(glob.sync(n),r,e)};module.exports=mv,module.exports.sync=mvSync;