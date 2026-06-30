import UrlShortenerClient from "./components/UrlShortenerClient";

export default async function Home() {
  async function fetchListData() {
    const url = `http://localhost:3000/`;

    try {
      // 1. Await the initial network connection
      const response = await fetch(url);

      // 2. Explicitly check for HTTP bad statuses (4xx or 5xx)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // 3. Parse data only if the response is safe
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error: unknown) {
      // 4. Catches network failures AND the custom error thrown above
      const message = error instanceof Error ? error.message : String(error);
      console.error("Fetch operation failed:", message);
      // Re-throw or return a fallback value depending on application needs
      return [];
    }
  }

  const data = await fetchListData();

  return (
    <div className=" flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-2 md:p-10">
      <div className="w-full max-w-4xl">
        <UrlShortenerClient data={data} />
      </div>
    </div>
  );
}
