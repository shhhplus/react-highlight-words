import { FC, Fragment, ReactNode, useCallback, useMemo } from 'react';
import compile from './compile';

type HighlightWordsProps = {
  words: string;
  children: string;
  render?: (keyword: string) => ReactNode;
};

const HighlightWords: FC<HighlightWordsProps> = ({
  words,
  children,
  render,
}) => {
  const nodes = useMemo(() => compile(children, words), [children, words]);

  const realRender = useCallback(
    (word: string) => {
      return render ? render(word) : <mark>{word}</mark>;
    },
    [render],
  );

  return (
    <Fragment>
      {nodes.map((node, idx) => {
        return (
          <Fragment key={idx}>
            {typeof node === 'string' ? node : realRender(node.text)}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default HighlightWords;
