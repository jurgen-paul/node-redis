import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import NUMINCRBY from './NUMINCRBY';

describe('JSON.NUMINCRBY', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      NUMINCRBY.transformArguments('key', '$', 1),
      ['JSON.NUMINCRBY', 'key', '$', '1']
    );
  });

  testUtils.testWithClient('client.json.numIncrBy', async client => {
    const [, reply] = await Promise.all([
      client.json.set('key', '$', 0),
      client.json.numIncrBy('key', '$', 1)
    ]);

    assert.deepEqual(reply, [1]);
  }, GLOBAL.SERVERS.OPEN);
});
