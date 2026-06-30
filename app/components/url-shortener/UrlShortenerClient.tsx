"use client";

import { useState } from "react";

import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";
import { fetchListData } from "@/lib/api/url";
import type { UrlItem } from "@/lib/types";

type ListComponentProps = {
  data: UrlItem[];
  onCreated: () => void | Promise<void>;
};

export default function UrlShortenerClient({ data }: ListComponentProps) {
  const [list, setList] = useState<UrlItem[]>(data);

  async function refreshList() {
    const latestLinks = await fetchListData();
    setList(latestLinks);
  }

  return (
    <>
      <FormComponent onCreated={refreshList} />
      <ListComponent onCreated={refreshList} list={list} />
    </>
  );
}
