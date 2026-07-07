import UrlShortenerClient from "./components/url-shortener/UrlShortenerClient";
import NavBar from "./components/nav-bar/NavBar";
import AuthContextProvider from "./contexts/AuthContext";

export default async function Home() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <div className=" flex min-h-150 flex-col items-center justify-center gap-2 bg-background px-2 md:px-10 m-auto">
          <div className="w-full">
            <UrlShortenerClient />
          </div>
        </div>
      </AuthContextProvider>
    </>
  );
}
