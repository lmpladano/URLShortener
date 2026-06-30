import { ChevronRightIcon } from "lucide-react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

interface UrlItem {
  shortened: string;
  original: string;
  base62: string;
}

type ListComponentProps = {
  item: UrlItem;
  onCreated: () => void | Promise<void>;
};

export function ListItem({ item, onCreated }: ListComponentProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const dentry: string = item.base62;

    try {
      const response = await fetch("http://localhost:3000/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: dentry }),
      });
      if (response.ok) {
        const data = await response.text();
        console.log(data);
        onCreated();
      } else {
        const errorMessage = await response.text();

        console.error("POST failed", {
          status: response.status,
          statusText: response.statusText,
          message: errorMessage,
        });
      }
    } catch (error) {
      console.error("error submitting", error);
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
