import { CSSProperties, FC, Fragment, useMemo } from 'react';
import compile from './compile';

const defaultStyle = {
  color: '#00BC70',
};

type KeywordsHighlightProps = {
  keywords: string;
  style?: CSSProperties;
  children: string;
};

const KeywordsHighlight: FC<KeywordsHighlightProps> = ({
  keywords,
  style = defaultStyle,
  children,
}) => {
  const nodes = useMemo(() => {
    return compile(children, keywords);
  }, [children, keywords]);

  return (
    <Fragment>
      {nodes.map((node, idx) => {
        return (
          <Fragment key={idx}>
            {node.matched ? <span style={style}>{node.text}</span> : node.text}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default KeywordsHighlight;
