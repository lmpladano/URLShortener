import { ChevronRightIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

interface UrlItem {
  shortenedUrl: string;
  original: string;
  base62: string;
}

type ListComponentProps = {
  item: UrlItem;
};

export function ListItem({ item }: ListComponentProps) {
  return (
    <div className="flex w-full max-w-full flex-col gap-4 my-5">
      <Item variant="outline" asChild>
        <a href={item.shortenedUrl} target="_blank" rel="noreferrer">
          <ItemContent>
            <ItemTitle>{item.shortenedUrl} </ItemTitle>
            <ItemDescription className="truncate w-100 ">
              {item.original}
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  );
}
