"use client";

import { useCallback, useEffect, useState } from "react";

import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";
import { fetchListData } from "@/lib/api/url";
import type { UrlItem } from "@/lib/types";

export default function UrlShortenerClient() {
  const [list, setList] = useState<UrlItem[]>([]);

  const refreshList = useCallback(async () => {
    const latestLinks = await fetchListData();
    setList(latestLinks);
  }, []);

  useEffect(() => {
    let isCurrent = true;

    async function loadInitialList() {
      const latestLinks = await fetchListData();

      if (isCurrent) {
        setList(latestLinks);
      }
    }

    void loadInitialList();

    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <>
      <FormComponent onListChanged={refreshList} />
      <ListComponent onListChanged={refreshList} list={list} />
    </>
  );
}
