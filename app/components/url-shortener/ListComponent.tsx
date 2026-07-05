import { ListItem } from "./ListItem";
import useAuth from "@/app/hooks/useAuth";
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
      <ItemGroup className="flex-col m-auto p-5 border rounded-md min-h-100">
        {!useAuth() ? <span>plesase log in</span> : <span></span>}
        {list.length === 0 ? (
          <span>Shortened Links will appear here when created.</span>
        ) : (
          <ul>{LinkList}</ul>
        )}
      </ItemGroup>
    </>
  );
}
