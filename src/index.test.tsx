import { render } from '@testing-library/react';
import HighlightWords from './index';

describe('HighlightWords', () => {
  test(`component could be updated and unmounted without errors`, () => {
    const text = 'Welcome everyone to come and join my birthday party.';
    const { unmount, rerender } = render(
      <HighlightWords words="birthday" style={{ color: 'greenyellow' }}>
        {text}
      </HighlightWords>,
    );
    expect(() => {
      rerender(
        <HighlightWords words="party" style={{ color: 'red' }}>
          {text}
        </HighlightWords>,
      );
      unmount();
    }).not.toThrow();
  });

  test('empty words should works', () => {
    const text = 'Welcome everyone to come and join my birthday party.';
    const { container } = render(
      <HighlightWords words="" style={{ color: 'red' }}>
        {text}
      </HighlightWords>,
    );
    expect(container.innerHTML).toEqual(text);
  });

  test(`no style should works`, () => {
    const text = 'Welcome to my birthday party.';
    const { container } = render(
      <HighlightWords words="birthday">{text}</HighlightWords>,
    );
    expect(container.innerHTML).toEqual(text);
  });

  test(`config should works`, () => {
    HighlightWords.config({ color: 'green' });
    const text = 'Welcome to my birthday party.';
    const { container } = render(
      <HighlightWords words="birthday">{text}</HighlightWords>,
    );
    expect(container.innerHTML).toEqual(
      `Welcome to my <mark style="color: green;">birthday</mark> party.`,
    );
  });

  test(`single matched should works`, () => {
    const text = 'Welcome everyone to come and join my birthday party.';
    const { container } = render(
      <HighlightWords words="birthday" style={{ color: 'red' }}>
        {text}
      </HighlightWords>,
    );

    expect(container.innerHTML).toEqual(
      `Welcome everyone to come and join my <mark style="color: red;">birthday</mark> party.`,
    );
  });

  test(`multiple matched should works`, () => {
    const text =
      'hi, party time. Welcome everyone to come and join my birthday party.';
    const { container } = render(
      <HighlightWords words="party" style={{ color: 'red' }}>
        {text}
      </HighlightWords>,
    );

    expect(container.innerHTML).toEqual(
      `hi, <mark style="color: red;">party</mark> time. Welcome everyone to come and join my birthday <mark style="color: red;">party</mark>.`,
    );
  });

  test('multi words should works', () => {
    const text = 'AppleTodayFoodHappySunFood';
    const { container } = render(
      <HighlightWords
        words={['Food', new RegExp('Apple')]}
        style={{ color: 'red' }}
      >
        {text}
      </HighlightWords>,
    );
    expect(container.innerHTML).toEqual(
      `<mark style="color: red;">Apple</mark>Today<mark style="color: red;">Food</mark>HappySun<mark style="color: red;">Food</mark>`,
    );
  });

  test(`component should update when props changes`, () => {
    const { container, rerender } = render(
      <HighlightWords words="nothing" style={{ color: 'green' }}>
        hello, everyone.
      </HighlightWords>,
    );

    rerender(
      <HighlightWords words="birthday" style={{ color: 'red' }}>
        Welcome everyone to come and join my birthday party.
      </HighlightWords>,
    );

    expect(container.innerHTML).toEqual(
      `Welcome everyone to come and join my <mark style="color: red;">birthday</mark> party.`,
    );
  });
});
