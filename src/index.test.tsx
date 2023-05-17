import { render } from '@testing-library/react';
import KeywordsHighlight from './index';

test(`component could be updated and unmounted without errors`, () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { unmount, rerender } = render(
    <KeywordsHighlight keywords="birthday" style={{ color: 'greenyellow' }}>
      {text}
    </KeywordsHighlight>,
  );
  expect(() => {
    rerender(
      <KeywordsHighlight keywords="party" style={{ color: 'red' }}>
        {text}
      </KeywordsHighlight>,
    );
    unmount();
  }).not.toThrow();
});

test(`a single matching word should be highlighted.`, () => {
  const text = 'Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <KeywordsHighlight keywords="birthday" style={{ color: 'red' }}>
      {text}
    </KeywordsHighlight>,
  );

  expect(container.innerHTML).toEqual(
    `Welcome everyone to come and join my <span style="color: red;">birthday</span> party.`,
  );
});

test(`multiple matching words should be highlighted`, () => {
  const text =
    'hi, party time. Welcome everyone to come and join my birthday party.';
  const { container } = render(
    <KeywordsHighlight keywords="party" style={{ color: 'red' }}>
      {text}
    </KeywordsHighlight>,
  );

  expect(container.innerHTML).toEqual(
    `hi, <span style="color: red;">party</span> time. Welcome everyone to come and join my birthday <span style="color: red;">party</span>.`,
  );
});
