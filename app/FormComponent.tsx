"use client";

import { useState } from "react";

export default function FormComponent() {
  const [Links, setLinks] = useState<string[]>([]);

  async function handleClick(e: React.FormEvent) {
    e.preventDefault();

    const rawlink = document.querySelector("input");
    console.log(rawlink.value);

    try {
      const response = await fetch("http://localhost:3000/short", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: rawlink.value }),
      });
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error("error submitting", error);
    }
  }

  return (
    <>
      <h1>hi hello {Links}</h1>
      <input name="rawLink"></input>
      <button onClick={handleClick} type="submit">
        click
      </button>
    </>
  );
}
