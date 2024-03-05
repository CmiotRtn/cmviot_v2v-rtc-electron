const path = require('path');

const download = require('download');

const {
  destIrisSDKDir,
  cleanIrisDir,
  cleanIrisUselessFile,
} = require('./clean');
const getConfig = require('./getConfig');
const logger = require('./logger');
const { getOS } = require('./util');

const config = getConfig();

const { iris_sdk_mac } = config;

const downloadSDK = async ({ preHook, postHook, sdkURL, destDir }) => {
  logger.info(`Downloading:${sdkURL}`);
  await preHook();
  await download(sdkURL, destDir, {
    strip: 1,
    extract: true,
    filter: (file) => {
      return (
        file.type !== 'directory' &&
        !file.path.endsWith(path.sep) &&
        file.data.length !== 0
      );
    },
  });
  logger.info(`Finish download:${sdkURL}`);
  await postHook();
};

const syncLib = async (cb) => {
  const os = getOS();
  await downloadSDK({
    preHook: cleanIrisDir,
    postHook: () => {
      os === 'mac' && cleanIrisUselessFile();
    },
    sdkURL: iris_sdk_mac,
    destDir: destIrisSDKDir,
  });
  cb();
};

module.exports = syncLib;
