/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'json-stringify-safe',
  treeForAddon (tree) {
    const stringifyPath = path.dirname(require.resolve('json-stringify-safe-es/src/stringify.js'));
    let stringifyTree = this.treeGenerator(stringifyPath);

    if (!tree) {
      return this._super.treeForAddon.call(this, stringifyTree);
    }

    const trees = mergeTrees([stringifyTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
