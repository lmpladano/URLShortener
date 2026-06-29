import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type FormComponentProps = {
  onCreated: () => void | Promise<void>;
};

export default function FormComponent({ onCreated }: FormComponentProps) {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const rawlink: string = String(new FormData(form).get("rawLink") || "");

    try {
      const response = await fetch("http://localhost:3000/short", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: rawlink }),
      });
      const data = await response.text();
      console.log(data);
      onCreated();
    } catch (error) {
      console.error("error submitting", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-xl font-bold">URLShortener</h1>
          </div>
          <Field>
            <Input name="rawLink" />
            <FieldDescription className="px-6 text-center">
              paste in your URL
            </FieldDescription>
          </Field>
          <Field>
            <Button type="submit">Create ShortUrl</Button>
          </Field>
        </FieldGroup>
      </form>
    </>
  );
}
