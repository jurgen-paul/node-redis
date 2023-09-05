import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import TOGGLE from './TOGGLE';

describe('JSON.TOGGLE', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      TOGGLE.transformArguments('key', '$'),
      ['JSON.TOGGLE', 'key', '$']
    );
  });

  testUtils.testWithClient('client.json.toggle', async client => {
    const [, reply] = await Promise.all([
      client.json.set('key', '$', true),
      client.json.toggle('key', '$')
    ]);

    assert.deepEqual(reply, [0]);
  }, GLOBAL.SERVERS.OPEN);
});
