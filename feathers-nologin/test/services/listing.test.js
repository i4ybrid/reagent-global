const assert = require('assert');
const app = require('../../src/app');

describe('\'listing\' service', () => {
  it('registered the service', () => {
    const service = app.service('listing');

    assert.ok(service, 'Registered the service');
  });
});
