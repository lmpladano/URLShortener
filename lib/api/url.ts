export async function fetchListData() {
  const url = `http://localhost:3000/`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Fetch operation failed:", message);
    return [];
  }
}

export async function createShortUrl(rawlink: string) {
  try {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: rawlink }),
    });
    if (response.ok) {
      const data = await response.text();
      console.log(data);
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

export async function deleteShortUrl(dentry: string) {
  try {
    const response = await fetch("http://localhost:3000/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: dentry }),
    });
    if (response.ok) {
      const data = await response.text();
      console.log(data);
    } else {
      console.log("reffresh freakinggg failed");
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
