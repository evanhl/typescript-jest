import { areBracesMatching } from './hiker';

describe('matching_braces', () => {
  describe('edges cases', () => {
    it('empty string', () => {
      expect(areBracesMatching('')).toEqual(true);
    });
    it('non-braces', () => {
      expect(areBracesMatching('awefoi')).toEqual(true);
    });
    // two sets of same braces
    it('single set of braces w/ nothing inside', () => {
      expect(areBracesMatching('()')).toEqual(true);
      expect(areBracesMatching('[]')).toEqual(true);
      expect(areBracesMatching('{}')).toEqual(true);
    });
  )});
  describe('standard cases', () => {
    // single set of braces w/ something inside
    it('single set of braces w/ something inside', () => {
      expect(areBracesMatching('()')).toEqual(true);
      expect(areBracesMatching('[]')).toEqual(true);
      expect(areBracesMatching('{}')).toEqual(true);
    });
    // two sets of different braces properly nested
    // two sets of different braces improperly nested
    // unclosed single brace
    // unclosed multiple braces ([(
    // open-closed-open-closed
    // open-closed-open ()(
  });
});
