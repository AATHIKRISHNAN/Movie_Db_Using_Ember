import { module, test } from 'qunit';
import { setupTest } from 'movies-list-app/tests/helpers';

module('Unit | Route | search-result', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:search-result');
    assert.ok(route);
  });
});
