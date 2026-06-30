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

    if (!rawlink || !URL.canParse(rawlink)) {
      window.alert("type a valid url");
    } else {
      try {
        const response = await fetch("http://localhost:3000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ value: rawlink }),
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
