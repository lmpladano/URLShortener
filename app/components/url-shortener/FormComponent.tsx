import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { createShortUrl } from "@/lib/api/url";
import { Save } from "lucide-react";
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

    if (!isHttpUrl(rawlink)) {
      setHasError(true);
    } else {
      try {
        setHasError(false);
        await createShortUrl(rawlink);
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
        <FieldGroup className="my-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-semibold">
              Free URLShortener For Everyone
            </h1>
          </div>
          <Field>
            <ButtonGroup>
              <Input placeholder="Paste in a valid Url" name="rawLink" />
              <Button variant="outline" type="submit">
                <Save />
              </Button>
            </ButtonGroup>
            {hasError && <span className="text-red-500">type a valid url</span>}
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
