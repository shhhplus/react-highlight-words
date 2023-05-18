import compile from './compile';

test('empty content should works', () => {
  expect(compile('', 'party')).toMatchObject([]);
  expect(compile('', ['party'])).toMatchObject([]);
});

test('empty keywords should works', () => {
  const content = 'Welcome everyone to my party';
  expect(compile(content, '')).toMatchObject([content]);
  expect(compile(content, [''])).toMatchObject([content]);
  expect(compile(content, [])).toMatchObject([content]);
});

test('empty content and empty keywords should works', () => {
  expect(compile('', '')).toMatchObject([]);
  expect(compile('', [''])).toMatchObject([]);
  expect(compile('', [])).toMatchObject([]);
});

test('no matched word should works', () => {
  const content = 'Welcome everyone to come and join my birthday party.';
  expect(compile(content, 'tom')).toMatchObject([content]);
});

test('a single matched word should works', () => {
  const content = 'Welcome everyone to come and join my birthday party.';
  expect(compile(content, 'party')).toMatchObject([
    'Welcome everyone to come and join my birthday ',
    { text: 'party', matched: true },
    '.',
  ]);
});

test(`multiple matched words should works`, () => {
  const content =
    'hi, party time. Welcome everyone to come and join my birthday party.';
  expect(compile(content, 'party')).toMatchObject([
    'hi, ',
    { text: 'party', matched: true },
    ' time. Welcome everyone to come and join my birthday ',
    { text: 'party', matched: true },
    '.',
  ]);
});

test('matched word at begin should works', () => {
  const content = 'party.Welcome everyone.';
  expect(compile(content, 'party')).toMatchObject([
    { text: 'party', matched: true },
    '.Welcome everyone.',
  ]);
});

test('matched word at end should works', () => {
  const content = 'Welcome everyone to my party';
  expect(compile(content, 'party')).toMatchObject([
    'Welcome everyone to my ',
    { text: 'party', matched: true },
  ]);
});

test('multiple keywords as props should works', () => {
  const content = 'Welcome everyone to my party';

  expect(compile(content, ['party', 'to'])).toMatchObject([
    'Welcome everyone ',
    { text: 'to', matched: true },
    ' my ',
    { text: 'party', matched: true },
  ]);

  expect(compile(content, ['party', 'other'])).toMatchObject([
    'Welcome everyone to my ',
    { text: 'party', matched: true },
  ]);
});
