import type { UrlItem } from "@/lib/types";
import { deleteShortUrl } from "@/lib/api/url";
import { ExternalLink, X, Copy } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type ListComponentProps = {
  list: UrlItem[];
  onListChanged: () => void | Promise<void>;
};

export default function ListComponent({
  list,
  onListChanged,
}: ListComponentProps) {
  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    identifier: string,
  ) {
    e.preventDefault();
    try {
      await deleteShortUrl(identifier);
      await onListChanged();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return message;
    }
  }

  return (
    <div className="rounded-md border overflow-x-auto p-5">
      <Table className="w-full">
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
      </Table>
    </div>
  );
}
