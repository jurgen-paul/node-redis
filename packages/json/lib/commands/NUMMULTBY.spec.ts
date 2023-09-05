import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import NUMMULTBY from './NUMMULTBY';

describe('JSON.NUMMULTBY', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      NUMMULTBY.transformArguments('key', '$', 2),
      ['JSON.NUMMULTBY', 'key', '$', '2']
    );
  });

  testUtils.testWithClient('client.json.numMultBy', async client => {
    const [, reply] = await Promise.all([
      client.json.set('key', '$', 1),
      client.json.numMultBy('key', '$', 2)
    ]);

    assert.deepEqual(reply, [2]);
  }, GLOBAL.SERVERS.OPEN);
});
