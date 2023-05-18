# react-highlight-words

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-highlight-words/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-highlight-words.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-highlight-words) [![codecov](https://img.shields.io/codecov/c/github/shhhplus/react-highlight-words/main?token=4MY5JFP8BX)](https://codecov.io/gh/shhhplus/react-highlight-words) [![build status](https://img.shields.io/github/actions/workflow/status/shhhplus/react-highlight-words/cd.yml)](https://github.com/shhhplus/react-highlight-words/actions)

A component that can highlight matching words with customizable style.

## Install

```sh
npm install @shhhplus/react-highlight-words --save
```

## Usage

### Basic

```jsx
import Highlightwords from '@shhhplus/react-highlight-words';

const Demo = () => {
  return (
    <Highlightwords words="birthday">
      Welcome everyone to come and join my birthday party.
    </Highlightwords>
  );
};
```

### Customize style

```jsx
import Highlightwords from '@shhhplus/react-highlight-words';

const Demo = () => {
  return (
    <Highlightwords
      words="birthday"
      render={(word) => <span style={{ color: 'red' }}>{word}</span>}
    >
      Welcome everyone to come and join my birthday party.
    </Highlightwords>
  );
};
```
