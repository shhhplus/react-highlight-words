import { CSSProperties, FC, Fragment, useMemo } from 'react';
import TextMatcher from '@shhhplus/react-text-matcher';

type HighlightWordsProps = {
  words: string | RegExp | (string | RegExp)[];
  style?: CSSProperties;
  children: string;
};

let _globalStyle: CSSProperties | undefined = undefined;

const HighlightWordsInner: FC<HighlightWordsProps> = ({
  words,
  style,
  children,
}) => {
  const { rules, render } = useMemo(() => {
    const style2use = style || _globalStyle;
    const render = (word: string) => {
      return <mark style={style2use}>{word}</mark>;
    };

    if (style2use) {
      return {
        rules: words,
        render,
      };
    } else {
      return {
        rules: [],
        render,
      };
    }
  }, [words, style]);

  return (
    <TextMatcher rules={rules} text={children}>
      {(nodes) => {
        return (
          <Fragment>
            {nodes.map((node, idx) => {
              return (
                <Fragment key={idx}>
                  {typeof node === 'string' ? node : render(node.text)}
                </Fragment>
              );
            })}
          </Fragment>
        );
      }}
    </TextMatcher>
  );
};

const HighlightWords = HighlightWordsInner as typeof HighlightWordsInner & {
  config: (globalStyle: CSSProperties) => void;
};
HighlightWords.config = (globalStyle) => {
  _globalStyle = globalStyle;
};

export default HighlightWords;
