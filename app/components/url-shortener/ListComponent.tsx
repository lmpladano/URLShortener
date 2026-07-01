import { ListItem } from "./ListItem";

import type { UrlItem } from "@/lib/types";

type ListComponentProps = {
  list: UrlItem[];
  onListChanged: () => void | Promise<void>;
};

export default function ListComponent({
  list,
  onListChanged,
}: ListComponentProps) {
  const LinkList = list.map((item) => {
    return (
      <li key={item.shortened}>
        <ListItem onListChanged={onListChanged} item={item} />
      </li>
    );
  });

  return (
    <>
      <ul>{LinkList}</ul>
    </>
  );
}
