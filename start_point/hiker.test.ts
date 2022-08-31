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
  });
  describe('standard cases', () => {
    it('single set of braces w/ something inside', () => {
      expect(areBracesMatching('(ab)')).toEqual(true);
      expect(areBracesMatching('[ab]')).toEqual(true);
      expect(areBracesMatching('{ab}')).toEqual(true);
    });

    // two sets of different braces properly nested
    // two sets of different braces improperly nested

    it('unclosed single brace is invalid', () => {
      expect(areBracesMatching('(')).toEqual(false);
      expect(areBracesMatching('[')).toEqual(false);
      expect(areBracesMatching('{')).toEqual(false);
    });


    // unclosed multiple braces ([(
    // open-closed-open-closed
    // open-closed-open ()(
    // too many closing braces
  });
});
