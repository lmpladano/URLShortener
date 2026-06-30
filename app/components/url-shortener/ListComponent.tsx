import { ListItem } from "./ListItem";

import type { UrlItem } from "@/lib/types";

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
