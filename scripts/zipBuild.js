const fs = require('fs');
const path = require('path');

const { exec } = require('shelljs');

const package = require('../package.json');

const logger = require('./logger');
const { getOS } = require('./util');

const zipBuild = async () => {
  const isMac = getOS() === 'mac';

  delete package.cmviot_electron;
  const updatedData = JSON.stringify(package, null, 2);
  fs.writeFile('../package.json', updatedData, 'utf8', function (err) {
    if (err) {
      console.log(`Error writing file to disk: ${err}`);
    }
  });
  const fileListStr = ` build${path.sep}Release js scripts ts types package.json gulpfile.js`;
  const shellStr =
    (isMac ? 'zip -ry electron.zip' : '7z a electron.zip') + fileListStr;
  const { code, stderr } = await exec(shellStr);
  if (code !== 0) {
    logger.error(stderr);
  }
};

module.exports = zipBuild;
