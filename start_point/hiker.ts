
const BRACES = ['{', '}', '[', ']', '(', ')'];

const OPEN_TO_CLOSE_MAPPING: {[key: string]: string} = {
  '{': '}',
  '[': ']',
  '(': ')',
};
const CLOSE_TO_OPEN_MAPPING: {[key: string]: string} = {
  '}': '{',
  ']': '[',
  ')': '(',
};

export function areBracesMatching(bracesStr: string): boolean {
  const stack = [];
  // ignore non-brace chars
  for (let i = 0; i < bracesStr.length; i++) {
    const ch = bracesStr.charAt(i);

    if (BRACES.includes(ch)) {
      if (OPEN_TO_CLOSE_MAPPING[ch]) {
        stack.push(ch);
      } else if (CLOSE_TO_OPEN_MAPPING[ch]) {
        // check top of stack
        const lastOpeningBrace = stack[stack.length - 1];

        if (!lastOpeningBrace) { return false; }
        // if top of stack is matching, then pop
        const expectedOpeningBrace = CLOSE_TO_OPEN_MAPPING[ch];
        if (lastOpeningBrace === expectedOpeningBrace) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  return stack.length === 0;
}
