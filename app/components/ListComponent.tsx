type UrlItem = {
  shortenedUrl: string;
};

type ListComponentProps = {
  list: UrlItem[];
};

export default function ListComponent({ list }: ListComponentProps) {
  const LinkList = list.map((item) => {
    return (
      <li key={item.shortenedUrl}>
        <a href={item.shortenedUrl}>shortened: {item.shortenedUrl}</a>
      </li>
    );
  });

  return (
    <>
      <h1>shortened url list:</h1>
      <ul>{LinkList}</ul>
    </>
  );
}
