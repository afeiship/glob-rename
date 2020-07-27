var fs = require('fs');
var path = require('path');
var glob = require('globby');
var mkdirp = require('mkdirp');
var RETURN_VALUE = function (value) {
  return value;
};

var move = function (inFiles, inDest, inTransform) {
  var transform = inTransform || RETURN_VALUE;
  inFiles.forEach(function (filename) {
    var folder = path.join(inDest, path.dirname(filename));
    var file = path.basename(filename);
    mkdirp.sync(folder);
    var pathed = transform(path.parse(path.join(folder, file)));
    var dest = path.join(pathed.dir, pathed.base,);

    fs.renameSync(filename, dest);
  });
};

var mv = function (pattern, destFolder, transform, cb) {
  glob(pattern, function (err, files) {
    move(files, destFolder, transform);
    if (cb) cb(err, files);
  });
};

var mvSync = function (pattern, destFolder, transform) {
  move(glob.sync(pattern), destFolder, transform);
};

module.exports = mv;
module.exports.sync = mvSync;
