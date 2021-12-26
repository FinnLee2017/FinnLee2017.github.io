const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

/**
 * Clean
 */
const cleanList = [
  path.resolve(__dirname, '../assets'),
  path.resolve(__dirname, '../fe'),
  path.resolve(__dirname, '../it'),
  path.resolve(__dirname, '../tools'),
  path.resolve(__dirname, '../404.html'),
  path.resolve(__dirname, '../index.html'),
  path.resolve(__dirname, '../logo.ico'),
  path.resolve(__dirname, '../logo.png'),
  path.resolve(__dirname, '../support.html'),
];

for (const item of cleanList) {
  shell.rm('-rf', item);
}


/**
 * Build
 */
const srcPath = path.resolve(__dirname, '../docs/.vuepress/dist/*');
const targetPath = path.resolve(__dirname, '../');
shell.cp('-R', srcPath, targetPath);
