module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'json-stringify-safe-es', target: '0.0.3'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
