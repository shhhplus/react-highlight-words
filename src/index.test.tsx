import { render } from '@testing-library/react';
import HighlightWords from './index';

test(`component could be updated and unmounted without errors`, () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { unmount, rerender } = render(
    <HighlightWords keywords="birthday" style={{ color: 'greenyellow' }}>
      {text}
    </HighlightWords>,
  );
  expect(() => {
    rerender(
      <HighlightWords keywords="party" style={{ color: 'red' }}>
        {text}
      </HighlightWords>,
    );
    unmount();
  }).not.toThrow();
});

test(`a single matched word should works`, () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords keywords="birthday" style={{ color: 'red' }}>
      {text}
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `Welcome everyone to come and join my <span style="color: red;">birthday</span> party.`,
  );
});

test(`multiple matched words should works`, () => {
  const text =
    'hi, party time. Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords keywords="party" style={{ color: 'red' }}>
      {text}
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `hi, <span style="color: red;">party</span> time. Welcome everyone to come and join my birthday <span style="color: red;">party</span>.`,
  );
});

test('empty keywords should works', () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <HighlightWords keywords="" style={{ color: 'red' }}>
      {text}
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(text);
});

test(`component should update when props changes`, () => {
  const { container, rerender } = render(
    <HighlightWords keywords="nothing" style={{ color: 'green' }}>
      hello, everyone.
    </HighlightWords>,
  );

  rerender(
    <HighlightWords keywords="birthday" style={{ color: 'red' }}>
      Welcome everyone to come and join my birthday party.
    </HighlightWords>,
  );

  expect(container.innerHTML).toEqual(
    `Welcome everyone to come and join my <span style="color: red;">birthday</span> party.`,
  );
});
