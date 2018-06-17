import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | institutional', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:institutional');
    assert.ok(route);
  });
});
