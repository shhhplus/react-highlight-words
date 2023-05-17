import { CSSProperties, FC, Fragment } from 'react';

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
  return (
    <Fragment>
      {split(children, keywords).map((text, idx) => {
        return (
          <Fragment key={idx}>
            {text === keywords ? <span style={style}>{text}</span> : text}
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default KeywordsHighlight;

const split = (content: string, keywords: string) => {
  return content
    .split(keywords)
    .reduce((acc: string[], cur, idx) => {
      if (idx === 0) {
        return [...acc, cur];
      }
      return [...acc, keywords, cur];
    }, [])
    .filter((text) => text.length);
};
