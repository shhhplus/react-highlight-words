import { render } from '@testing-library/react';
import HighlightWords from './index';

test(`component could be updated and unmounted without errors`, () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { unmount, rerender } = render(
    <HighlightWords
      words="birthday"
      render={(word) => <span style={{ color: 'greenyellow' }}>{word}</span>}
    >
      {text}
    </HighlightWords>,
  );
  expect(() => {
    rerender(
      <HighlightWords
        words="party"
        render={(word) => <span style={{ color: 'red' }}>{word}</span>}
      >
        {text}
      </HighlightWords>,
    );
    unmount();
  }).not.toThrow();
});

test(`single matched should works`, () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords
      words="birthday"
      render={(word) => <span style={{ color: 'red' }}>{word}</span>}
    >
      {text}
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `Welcome everyone to come and join my <span style="color: red;">birthday</span> party.`,
  );
});

test(`multiple matched should works`, () => {
  const text =
    'hi, party time. Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords
      words="party"
      render={(word) => <span style={{ color: 'red' }}>{word}</span>}
    >
      {text}
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `hi, <span style="color: red;">party</span> time. Welcome everyone to come and join my birthday <span style="color: red;">party</span>.`,
  );
});

test('empty words should works', () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords
      words=""
      render={(word) => <span style={{ color: 'red' }}>{word}</span>}
    >
      {text}
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(text);
});

test(`component should update when props changes`, () => {
  const { container, rerender } = render(
    <HighlightWords
      words="nothing"
      render={(word) => <span style={{ color: 'green' }}>{word}</span>}
    >
      hello, everyone.
    </HighlightWords>,
  );

  rerender(
    <HighlightWords
      words="birthday"
      render={(word) => <span style={{ color: 'red' }}>{word}</span>}
    >
      Welcome everyone to come and join my birthday party.
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `Welcome everyone to come and join my <span style="color: red;">birthday</span> party.`,
  );
});

test('no render props should works', () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords words="birthday">{text}</HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `Welcome everyone to come and join my <mark>birthday</mark> party.`,
  );
});
