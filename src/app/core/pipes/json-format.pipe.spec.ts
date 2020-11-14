import { JsonPipe } from './json-format.pipe';

describe('JsonPipe', () => {
  it('create an instance', () => {
    const pipe = new JsonPipe();
    expect(pipe).toBeTruthy();
  });
});
