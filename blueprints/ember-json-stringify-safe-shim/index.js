module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'json-stringify-safe', target: '5.0.1'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
