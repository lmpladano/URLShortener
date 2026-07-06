import type { UrlItem } from "../types";

export async function fetchListData(): Promise<UrlItem[]> {
  const url = `http://localhost:3000/`;

  try {
    const response = await fetch(url, { credentials: "include" });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Fetch operation failed:", message);
    return [];
  }
}

export async function authHelper() {
  const url = `http://localhost:3000/api/auth/me`;

  try {
    const response = await fetch(url, { credentials: "include" });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Fetch operation failed:", message);
    return message;
  }
}

export async function createShortUrl(rawlink: object) {
  const response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: rawlink }),
    credentials: "include",
  });
  if (response.ok) {
    const data = await response.text();
    return data;
  } else {
    const errorMessage = await response.text();

    throw new Error(errorMessage);
  }
}

export async function deleteShortUrl(dentry: string) {
  const response = await fetch("http://localhost:3000/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ value: dentry }),
  });
  if (response.ok) {
    const data = await response.text();
    return data;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
