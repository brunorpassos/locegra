import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | portal/engineering_evaluation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:portal/engineering-evaluation');
    assert.ok(route);
  });
});
