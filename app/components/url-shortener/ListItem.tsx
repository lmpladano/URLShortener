import { deleteShortUrl } from "@/lib/api/url";
import { ChevronRightIcon } from "lucide-react";
import type { UrlItem } from "@/lib/types";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

type ListComponentProps = {
  item: UrlItem;
  onListChanged: () => void | Promise<void>;
};

export function ListItem({ item, onListChanged }: ListComponentProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await deleteShortUrl(item.base62);
      await onListChanged();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : error;
      console.log(message);
    }
  }

  return (
    <>
      <div className="flex w-full max-w-full flex-col gap-4 my-5">
        <Item variant="outline">
          <form onSubmit={handleSubmit}>
            <ItemContent>
              <a href={item.shortened} target="_blank" rel="noreferrer">
                <ItemTitle>{item.shortened} </ItemTitle>
              </a>
              <ItemDescription className="truncate w-100 ">
                {item.original}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />

              <button type="submit">delete</button>
            </ItemActions>
          </form>
        </Item>
      </div>
    </>
  );
}
