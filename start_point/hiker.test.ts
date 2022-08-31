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

    it('multiple sets of different braces properly nested', () => {
      expect(areBracesMatching('([])')).toEqual(true);
      expect(areBracesMatching('[()]')).toEqual(true);
      expect(areBracesMatching('{()}')).toEqual(true);
      expect(areBracesMatching('{([])}')).toEqual(true);
      expect(areBracesMatching('(a[b]c)')).toEqual(true);
      expect(areBracesMatching('[a(b)c]')).toEqual(true);
      expect(areBracesMatching('{d(e)f}')).toEqual(true);
      expect(areBracesMatching('blah{hi(greg[evan]daniel)stuff}awef')).toEqual(true);
    });
    it('two sets of different braces improperly nested', () => {
      expect(areBracesMatching('([)]')).toEqual(false);
      expect(areBracesMatching('[(])')).toEqual(false);
      expect(areBracesMatching('{(})')).toEqual(false);
      expect(areBracesMatching('{([)]}')).toEqual(false);
      expect(areBracesMatching('{([]})')).toEqual(false);
      expect(areBracesMatching('a(b[c)d]e')).toEqual(false);
      expect(areBracesMatching('a[b(c]d)e')).toEqual(false);
    });

    it('unclosed single brace is invalid', () => {
      expect(areBracesMatching('(')).toEqual(false);
      expect(areBracesMatching('[')).toEqual(false);
      expect(areBracesMatching('{')).toEqual(false);
    });


    it('unclosed multiple braces', () => {
      expect(areBracesMatching('([(')).toEqual(false);
      expect(areBracesMatching('[([')).toEqual(false);
      expect(areBracesMatching('{[')).toEqual(false);
      expect(areBracesMatching('{[]')).toEqual(false);
    });
    it('open-closed-open-closed', () => {
      expect(areBracesMatching('()()')).toEqual(true);
      expect(areBracesMatching('()[]')).toEqual(true);
      expect(areBracesMatching('{}[]')).toEqual(true);
      expect(areBracesMatching('()[]{}')).toEqual(true);
      expect(areBracesMatching('a(b)(c)d')).toEqual(true);
      expect(areBracesMatching('a(b)c[]d')).toEqual(true);
      expect(areBracesMatching('a(b)c[d]e{f}g')).toEqual(true);
    });
    it('open-closed-open', () => {
      expect(areBracesMatching('()(')).toEqual(false);
      expect(areBracesMatching('()[')).toEqual(false);
      expect(areBracesMatching('{}[')).toEqual(false);
      expect(areBracesMatching('()[]{')).toEqual(false);
      expect(areBracesMatching('a(b)(cd')).toEqual(false);
      expect(areBracesMatching('a(b)c[d')).toEqual(false);
      expect(areBracesMatching('a(b)c[d]e{fg')).toEqual(false);
    });
    // open-closed-open ()(
    // too many closing braces
  });
});
