import UrlShortenerClient from "./components/url-shortener/UrlShortenerClient";
import { fetchListData } from "@/lib/api/url";
import NavBar from "./components/nav-bar/NavBar";

export default async function Home() {
  const data = await fetchListData();

  return (
    <>
      <NavBar />
      <div className=" flex min-h-200 flex-col items-center justify-center gap-2 bg-background p-2 md:p-10">
        <div className="w-full max-w-4xl">
          <UrlShortenerClient data={data} />
        </div>
      </div>
    </>
  );
}
