import { ListItem } from "./ListItem";

interface UrlItem {
  shortenedUrl: string;
  original: string;
  base62: string;
}

type ListComponentProps = {
  list: UrlItem[];
};

export default function ListComponent({ list }: ListComponentProps) {
  const LinkList = list.map((item) => {
    return (
      <li key={item.shortenedUrl}>
        <ListItem item={item} />
      </li>
    );
  });

  return (
    <>
      <ul>{LinkList}</ul>
    </>
  );
}
