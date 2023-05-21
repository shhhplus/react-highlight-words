# react-highlight-words

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-highlight-words/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-highlight-words.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-highlight-words) [![codecov](https://img.shields.io/codecov/c/github/shhhplus/react-highlight-words/main?token=4MY5JFP8BX)](https://codecov.io/gh/shhhplus/react-highlight-words) [![build status](https://img.shields.io/github/actions/workflow/status/shhhplus/react-highlight-words/cd.yml)](https://github.com/shhhplus/react-highlight-words/actions)

A component that can highlight words in the text with custom styles. It is a lightweight wrapper based on [react-text-matcher](https://www.npmjs.com/package/@shhhplus/react-text-matcher).

If you want more customization capabilities, please use [react-text-matcher](https://www.npmjs.com/package/@shhhplus/react-text-matcher).

## Install

```sh
npm install @shhhplus/react-highlight-words --save
```

## Usage

### Single word

```jsx
import Highlightwords from '@shhhplus/react-highlight-words';

const Demo = () => {
  return (
    <Highlightwords words="nice" style={{ color: 'green' }}>
      The weather is nice today.
    </Highlightwords>
  );
};
```

### Multi words

```jsx
import Highlightwords from '@shhhplus/react-highlight-words';

const Demo = () => {
  return (
    <Highlightwords
      words={['weather', new RegExp('nice')]}
      style={{ color: 'green' }}
    >
      The weather is nice today.
    </Highlightwords>
  );
};
```

### Use global style

```jsx
import Highlightwords from '@shhhplus/react-highlight-words';

HighlightWords.config({ color: 'green' });

const Demo = () => {
  return (
    <>
      <Highlightwords words="birthday">
        Welcome to come my birthday party.
      </Highlightwords>
      <Highlightwords words="nice">
        The weather is so nice today.
      </Highlightwords>
    </>
  );
};
```
