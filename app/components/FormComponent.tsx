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
        <input name="rawLink"></input>
        <button type="submit">click</button>
      </form>
    </>
  );
}
