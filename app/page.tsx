import UrlShortenerClient from "./components/url-shortener/UrlShortenerClient";
import NavBar from "./components/nav-bar/NavBar";
import AuthContextProvider from "./contexts/AuthContext";

export default async function Home() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <div className=" flex min-h-300 flex-col items-center justify-center gap-2 bg-background p-2 md:p-10">
          <div className="w-full max-w-4xl">
            <UrlShortenerClient />
          </div>
        </div>
      </AuthContextProvider>
    </>
  );
}
