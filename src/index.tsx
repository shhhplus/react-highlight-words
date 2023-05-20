import { CSSProperties, FC, useMemo } from 'react';
import TextMatcher from '@shhhplus/react-text-matcher';

type HighlightWordsProps = {
  words: string | string[];
  style?: CSSProperties;
  children: string;
};

let _globalStyle: CSSProperties | undefined = undefined;

const HighlightWordsInner: FC<HighlightWordsProps> = ({
  words,
  style,
  children,
}) => {
  const rules = useMemo(() => {
    const style2use = style || _globalStyle;
    if (!style2use) {
      return [];
    }

    const list = typeof words === 'string' ? [words] : words;
    return list.map((word) => {
      return {
        pattern: word,
        render: (word: string) => {
          return <mark style={style2use}>{word}</mark>;
        },
      };
    });
  }, [words, style]);

  return <TextMatcher rules={rules}>{children}</TextMatcher>;
};

const HighlightWords = HighlightWordsInner as typeof HighlightWordsInner & {
  config: (globalStyle: CSSProperties) => void;
};
HighlightWords.config = (globalStyle) => {
  _globalStyle = globalStyle;
};

export default HighlightWords;
