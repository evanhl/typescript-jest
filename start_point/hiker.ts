
const BRACES = ['{', '}', '[', ']', '(', ')'];

const OPEN_TO_CLOSE_MAPPING: {[key: string]: string} = {
  '{': '}',
  '[': ']',
  '(': ')',
};

export function areBracesMatching(bracesStr: string): boolean {
  const stack = [];
  // ignore non-brace chars
  for (let i = 0; i < bracesStr.length; i++) {
    const ch = bracesStr.charAt(i);

    if (BRACES.includes(ch)) {
      if (OPEN_TO_CLOSE_MAPPING[ch]) {
        stack.push(ch);
        // if closed brace
      } else if () {
        // check top of stack
        const lastOpeningBrace = stack[stack.length - 1];

        if (!lastOpeningBrace) { return false; }
        // if top of stack is matching, then pop
        if ()
        // else return false
      }


    } else {
      // TODO: maybe delete
      continue;
    }
  }

  // when reading closing brace, check to see if stack.length === 0

  // at the end return false if stack is > 0 elements

  return stack.length === 0;
}
