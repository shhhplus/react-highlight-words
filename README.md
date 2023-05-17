# react-keywords-highlight &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/shhhplus/react-keywords-highlight/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/@shhhplus/react-keywords-highlight.svg?style=flat)](https://www.npmjs.com/package/@shhhplus/react-keywords-highlight) [![codecov](https://img.shields.io/codecov/c/github/shhhplus/react-keywords-highlight/main?token=4MY5JFP8BX)](https://codecov.io/gh/shhhplus/react-keywords-highlight) [![build status](https://img.shields.io/github/actions/workflow/status/shhhplus/react-keywords-highlight/cd.yml)](https://github.com/shhhplus/react-keywords-highlight/actions)

A component that can highlight matching keywords with customizable styles.

## Install

```sh
npm install @shhhplus/react-keywords-highlight --save
```

## How to use

```javascript
import KeywordsHighlight from '@shhhplus/react-keywords-highlight';

const Demo = () => {
  return (
    <KeywordsHighlight keywords="birthday" style={{ color: 'red' }}>
      Welcome everyone to come and join my birthday party.
    </KeywordsHighlight>
  );
};
```
