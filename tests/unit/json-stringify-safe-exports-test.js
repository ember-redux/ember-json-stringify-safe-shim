import { test, module } from 'qunit';
import jsonStringifySafe from 'json-stringify-safe';

module('reselect export tests');

test('exports function', function(assert) {
  assert.equal(typeof jsonStringifySafe, 'function');
});
