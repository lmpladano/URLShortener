import UrlShortenerClient from "./components/url-shortener/UrlShortenerClient";
import { fetchListData } from "@/lib/api/url";

export default async function Home() {
  const data = await fetchListData();

  return (
    <div className=" flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-2 md:p-10">
      <div className="w-full max-w-4xl">
        <UrlShortenerClient data={data} />
      </div>
    </div>
  );
}
