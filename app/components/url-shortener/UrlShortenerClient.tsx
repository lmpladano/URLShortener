"use client";

import { useCallback, useEffect, useState } from "react";

import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";
import { fetchListData } from "@/lib/api/url";
import type { UrlItem } from "@/lib/types";
import Landing from "../landing/Landing";
import useAuth from "@/app/hooks/useAuth";
import { Spinner } from "@/components/ui/spinner";

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

  const auth = useAuth();

  return (
    <>
      {auth.isLoading ? (
        <Spinner />
      ) : auth.isAuthenticated ? (
        <div className="m-auto w-full rounded-md border p-4 sm:p-6 lg:p-10">
          <FormComponent onListChanged={refreshList} />
          <ListComponent onListChanged={refreshList} list={list} />
        </div>
      ) : (
        <Landing />
      )}
    </>
  );
}
