import { deleteShortUrl } from "@/lib/api/url";
import { ExternalLink, Eraser } from "lucide-react";
import type { UrlItem } from "@/lib/types";
import { Button } from "@/components/ui/button";

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
      const message = error instanceof Error ? error.message : String(error);
      console.log(message);
    }
  }

  return (
    <>
      <Item
        variant="outline"
        className="my-0 max-sm:flex-row max-sm:items-center"
      >
        <ItemContent className="min-w-0 gap-1 overflow-hidden">
          <ItemTitle>{item.shortened}</ItemTitle>
          <ItemDescription className="w-full max-w-full truncate text-xs sm:w-64 md:w-72 lg:w-80">
            {item.original}
          </ItemDescription>
        </ItemContent>
        <ItemActions className="max-sm:ml-auto max-sm:shrink-0">
          <a href={item.shortened} target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ExternalLink />
            </Button>
          </a>
          <form onSubmit={handleSubmit}>
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <Eraser className="text-red-600" />
            </Button>
          </form>
        </ItemActions>
      </Item>
    </>
  );
}
