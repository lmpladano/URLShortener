"use client";

import { useState } from "react";

import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";

interface UrlItem {
  shortenedUrl: string;
}

type ListComponentProps = {
  data: UrlItem[];
};

export default function UrlShortenerClient({ data }: ListComponentProps) {
  const [list, setList] = useState<UrlItem[]>(data);

  async function fetchListData(): Promise<void> {
    const url = `http://localhost:3000/short`;

    try {
      // 1. Await the initial network connection
      const response = await fetch(url);

      // 2. Explicitly check for HTTP bad statuses (4xx or 5xx)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 3. Parse data only if the response is safe
      const fetchedData: UrlItem[] = await response.json();
      console.log(fetchedData);
      setList(fetchedData);
    } catch (error: unknown) {
      // 4. Catches network failures AND the custom error thrown above
      const message = error instanceof Error ? error.message : String(error);
      console.error("Fetch operation failed:", message);
      // Re-throw or return a fallback value depending on application needs
    }
  }
  return (
    <>
      <FormComponent onCreated={fetchListData} />
      <ListComponent list={list} />
    </>
  );
}
