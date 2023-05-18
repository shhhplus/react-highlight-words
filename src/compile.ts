type Node = {
  text: string;
  matched: boolean;
};

export default function compile(content: string, keywords: string) {
  if (!content) {
    return [];
  }

  if (!keywords) {
    return [
      {
        text: content,
        matched: false,
      },
    ];
  }

  return content
    .split(keywords)
    .reduce((acc: Node[], cur, idx) => {
      return [
        ...acc,
        {
          text: keywords,
          matched: true,
        },
        {
          text: cur,
          matched: false,
        },
      ];
    }, [])
    .slice(1)
    .filter((node) => node.text.length);
}
