import { ListItem } from "./ListItem";

import type { UrlItem } from "@/lib/types";
import { ItemGroup } from "@/components/ui/item";

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
      <ItemGroup className="flex-col m-auto max-w-3xl">
        <ul>{LinkList}</ul>
      </ItemGroup>
    </>
  );
}
