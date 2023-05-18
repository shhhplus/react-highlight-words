# react-highlight-words

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-highlight-words/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-highlight-words.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-highlight-words) [![codecov](https://img.shields.io/codecov/c/github/shhhplus/react-highlight-words/main?token=4MY5JFP8BX)](https://codecov.io/gh/shhhplus/react-highlight-words) [![build status](https://img.shields.io/github/actions/workflow/status/shhhplus/react-highlight-words/cd.yml)](https://github.com/shhhplus/react-highlight-words/actions)

A component that can highlight matching words with customizable styles.

## Install

```sh
npm install @shhhplus/react-highlight-words --save
```

## How to use

```javascript
import Highlightwords from '@shhhplus/react-highlight-words';

const Demo = () => {
  return (
    <Highlightwords keywords="birthday" style={{ color: 'red' }}>
      Welcome everyone to come and join my birthday party.
    </Highlightwords>
  );
};
```
