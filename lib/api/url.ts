import type { AuthResponse, UrlItem } from "../types";

export async function fetchListData(): Promise<UrlItem[]> {
  const url = `https://urlshortener-backend-pmr9.onrender.com`;

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

export async function authHelper(): Promise<AuthResponse> {
  const url = `https://urlshortener-backend-pmr9.onrender.com/api/auth/me`;

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
    return {
      authenticated: false,
      user: {
        name: "",
        email: "",
        image: "",
      },
    };
  }
}

export async function createShortUrl(rawlink: object) {
  const response = await fetch(
    "https://urlshortener-backend-pmr9.onrender.com",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: rawlink }),
      credentials: "include",
    },
  );
  if (response.ok) {
    const data = await response.text();
    return data;
  } else {
    const errorMessage = await response.text();

    throw new Error(errorMessage);
  }
}

export async function deleteShortUrl(dentry: string) {
  const response = await fetch(
    "https://urlshortener-backend-pmr9.onrender.com/delete",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: dentry }),
    },
  );
  if (response.ok) {
    const data = await response.text();
    return data;
  } else {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
