type Node = {
  text: string;
  matched: boolean;
};

export default function compile(content: string, words: string | string[]) {
  let keywords = typeof words === 'string' ? [words] : words;
  keywords = keywords.filter((w) => w);
  keywords = Array.from(new Set(keywords));

  return innerCompile(content, keywords).map((node) => {
    return node.matched ? node : node.text;
  });
}

const innerCompile = (content: string, keywords: string[]) => {
  if (!content) {
    return [];
  }

  if (keywords.length === 0) {
    return [
      {
        text: content,
        matched: false,
      },
    ];
  }

  let nodes: Node[] = [
    {
      text: content,
      matched: false,
    },
  ];
  for (let keyword of keywords) {
    nodes = nodes.reduce<Node[]>((acc, cur) => {
      if (cur.matched) {
        return [...acc, cur];
      } else {
        const list = split(cur.text, keyword);
        return [...acc, ...list];
      }
    }, []);
  }
  return nodes;
};

const split = (content: string, keyword: string) => {
  const nodes = content.split(keyword).map((text) => {
    return {
      text: text,
      matched: false,
    };
  });
  return join(nodes, {
    text: keyword,
    matched: true,
  }).filter((node) => node.text);
};

const join = (arr: Node[], separator: Node) => {
  return arr
    .reduce((acc: Node[], cur) => {
      return [...acc, separator, cur];
    }, [])
    .slice(1);
};
