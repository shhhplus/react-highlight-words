import compile from './compile';

test('no matched word should works', () => {
  const content = 'Welcome everyone to come and join my birthday party.';
  expect(compile(content, 'tom')).toMatchObject([
    {
      text: content,
      matched: false,
    },
  ]);
});

test('a single matched word should works', () => {
  const content = 'Welcome everyone to come and join my birthday party.';
  expect(compile(content, 'party')).toMatchObject([
    {
      text: 'Welcome everyone to come and join my birthday ',
      matched: false,
    },
    {
      text: 'party',
      matched: true,
    },
    {
      text: '.',
      matched: false,
    },
  ]);
});

test(`multiple matched words should works`, () => {
  const content =
    'hi, party time. Welcome everyone to come and join my birthday party.';
  expect(compile(content, 'party')).toMatchObject([
    {
      text: 'hi, ',
      matched: false,
    },
    {
      text: 'party',
      matched: true,
    },
    {
      text: ' time. Welcome everyone to come and join my birthday ',
      matched: false,
    },
    {
      text: 'party',
      matched: true,
    },
    {
      text: '.',
      matched: false,
    },
  ]);
});

test('matched word at begin should works', () => {
  const content = 'party.Welcome everyone.';
  expect(compile(content, 'party')).toMatchObject([
    {
      text: 'party',
      matched: true,
    },
    {
      text: '.Welcome everyone.',
      matched: false,
    },
  ]);
});

test('matched word at end should works', () => {
  const content = 'Welcome everyone to my party';
  expect(compile(content, 'party')).toMatchObject([
    {
      text: 'Welcome everyone to my ',
      matched: false,
    },
    {
      text: 'party',
      matched: true,
    },
  ]);
});

test('empty content should works', () => {
  expect(compile('', 'party')).toMatchObject([]);
});

test('empty keywords should works', () => {
  const content = 'Welcome everyone to my party';
  expect(compile(content, '')).toMatchObject([
    {
      text: content,
      matched: false,
    },
  ]);
});

test('empty content and empty keywords should works', () => {
  expect(compile('', '')).toMatchObject([]);
});
