import type { UrlItem } from "@/lib/types";
// import { deleteShortUrl } from "@/lib/api/url";
// import { ExternalLink, X, Copy } from "lucide-react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
import { ListItem } from "./ListItem";

type ListComponentProps = {
  list: UrlItem[];
  onListChanged: () => void | Promise<void>;
};

export default function ListComponent({
  list,
  onListChanged,
}: ListComponentProps) {
  // async function handleSubmit(
  //   e: React.FormEvent<HTMLFormElement>,
  //   identifier: string,
  // ) {
  //   e.preventDefault();
  //   try {
  //     await deleteShortUrl(identifier);
  //     await onListChanged();
  //   } catch (error: unknown) {
  //     const message = error instanceof Error ? error.message : String(error);
  //     return message;
  //   }
  // }

  const shortLinks = list.map((item) => (
    <ListItem key={item.base62} onListChanged={onListChanged} item={item} />
  ));

  return (
    <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-2 xl:gap-4">
      {/* <Table className="w-full">
        <TableCaption>Yourl Links.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Short link</TableHead>
            <TableHead className="">Destination</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.base62}>
              <TableCell className="font-medium flex items-center">
                {item.shortened}{" "}
                <Button variant="ghost" size="xs" className="rounded-full ml-2">
                  <Copy />
                </Button>
              </TableCell>
              <TableCell>{item.original}</TableCell>
              <TableCell className=" flex">
                {" "}
                <a href={item.shortened} target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <ExternalLink />
                  </Button>
                </a>
                <form onSubmit={(e) => handleSubmit(e, item.base62)}>
                  <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <X className="text-red-600" />
                  </Button>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table> */}
      {shortLinks}
    </div>
  );
}
