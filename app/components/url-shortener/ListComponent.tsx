import { ListItem } from "./ListItem";

import type { UrlItem } from "@/lib/types";

type ListComponentProps = {
  list: UrlItem[];
  onCreated: () => void | Promise<void>;
};

export default function ListComponent({ list, onCreated }: ListComponentProps) {
  const LinkList = list.map((item) => {
    return (
      <li key={item.shortened}>
        <ListItem onCreated={onCreated} item={item} />
      </li>
    );
  });

  return (
    <>
      <ul>{LinkList}</ul>
    </>
  );
}
