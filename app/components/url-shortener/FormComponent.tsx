import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createShortUrl } from "@/lib/api/url";

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
      await createShortUrl(rawlink);
      await onListChanged();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-xl font-bold">URLShortener</h1>
          </div>
          <Field>
            <FieldDescription className="text-center">
              paste in your URL
            </FieldDescription>
            <Input name="rawLink" />
          </Field>
          <Field>
            <Button type="submit">Create ShortUrl</Button>
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
