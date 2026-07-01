import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { createShortUrl } from "@/lib/api/url";
import { Save } from "lucide-react";

type FormComponentProps = {
  onListChanged: () => void | Promise<void>;
};

export default function FormComponent({ onListChanged }: FormComponentProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const rawlink: string = String(new FormData(form).get("rawLink") || "");

    if (!URL.canParse(rawlink)) {
      window.alert("type a valid url");
    } else {
      try {
        await createShortUrl(rawlink);
        await onListChanged();
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : error;
        console.log(message);
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-semibold">
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
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
