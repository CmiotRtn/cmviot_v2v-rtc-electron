const path = require('path');

const download = require('download');
const fs = require('fs-extra');

const { cleanBuildDir, buildDir } = require('./clean');
const getConfig = require('./getConfig');
const logger = require('./logger');
const { getOS } = require('./util');

const { platform, packageVersion, arch, no_symbol } = getConfig();

const workspaceDir = `${path.join(__dirname, '..')}`;

const getDownloadURL = () => {
  let downloadUrl = `https://app-upload.eos-chengdu-1.cmecloud.cn/Electron-${getOS()}-${packageVersion}-napi.zip`;
  if (platform === 'win32' && arch === 'x64') {
    downloadUrl = `https://app-upload.eos-chengdu-1.cmecloud.cn/Electron-win64-${packageVersion}-napi.zip`;
  }
  return downloadUrl;
};

const macNoSymbolList = [
  './build/Release/obj.target',
  './build/Api',
  './build/Renderer',
  './build/Utils',
  './build/cmviot_node_ext.target.mk',
  './build/CmviotSdk.js',
  './build/binding.Makefile',
  './build/config.gypi',
  './build/gyp-mac-tool',
  './build/Makefile',
  './build/VideoSource.target.mk',
  './build/Release/cmviot_node_ext.node.dSYM',
  './build/Release/VideoSource.dSYM',
];

const winNoSymbolList = [
  './build/Release/obj',
  './build/Api',
  './build/Renderer',
  './build/Utils',
  './build/cmviot_node_ext.vcxproj',
  './build/cmviot_node_ext.vcxproj.filters',
  './build/binding.sln',
  './build/config.gypi',
  './build/VideoSource.vcxproj',
  './build/VideoSource.vcxproj.filters',
  './build/CmviotSdk.js',
  './build/Release/cmviot_node_ext.exp',
  './build/Release/cmviot_node_ext.iobj',
  './build/Release/cmviot_node_ext.ipdb',
  './build/Release/cmviot_node_ext.pdb',
  './build/Release/VideoSource.iobj',
  './build/Release/VideoSource.ipdb',
  './build/Release/VideoSource.pdb',
  './build/Release/cmviot_node_ext.ilk',
  './build/Release/VideoSource.ilk',
];

const removeFileByFilter = async () => {
  const filterList = platform === 'darwin' ? macNoSymbolList : winNoSymbolList;

  for (const iterator of filterList) {
    const filePath = `${path.join(workspaceDir, iterator)}`;
    await fs.remove(filePath);
  }
  logger.info('Success: Download and cleanup finished');
};

module.exports = async () => {
  await cleanBuildDir();

  const downloadUrl = getDownloadURL();

  /** start download */
  logger.info('Package Version: %s', packageVersion);
  logger.info('Platform: %s', platform);
  if (arch) logger.info('Arch: %s', arch);
  logger.info('Download URL  %s ', downloadUrl);

  logger.info('Downloading prebuilt C++ addon for Cmviot Electron SDK...');
  await download(downloadUrl, buildDir, {
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

  if (no_symbol) {
    await removeFileByFilter();
  }
};
