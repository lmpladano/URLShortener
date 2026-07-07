import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createShortUrl } from "@/lib/api/url";
import { isHttpUrl } from "@/lib/utils";

type FormComponentProps = {
  onListChanged: () => void | Promise<void>;
};

export default function FormComponent({ onListChanged }: FormComponentProps) {
  const [hasError, setHasError] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const rawlink: string = String(new FormData(form).get("rawLink") || "");
    const custom: string = String(new FormData(form).get("custom") || "");

    const item = {
      rawlink,
      custom,
    };

    if (!isHttpUrl(rawlink)) {
      setHasError(true);
    } else {
      try {
        setHasError(false);
        await createShortUrl(item);
        await onListChanged();
        form.reset();
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : String(error);
        console.log(message);
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold">Links</h1>
        <FieldGroup className="mt-10">
          <Field>
            <FieldDescription>Create new link</FieldDescription>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Input
                placeholder="Paste in a valid Url"
                name="rawLink"
                className="sm:flex-1"
              />
              <Input
                placeholder="custom slug"
                name="custom"
                className="sm:w-40 lg:w-48"
              />
              <Button type="submit" className="sm:w-auto">
                Shorten
              </Button>
            </div>
            {hasError && <span className="text-red-500">type a valid url</span>}
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
