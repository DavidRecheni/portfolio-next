import { Toaster } from "sonner";

import HomeContainer from "../modules/home/HomeContainer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center relative">
      <main>
        <HomeContainer />
      </main>
      <Toaster position="top-right" richColors />
    </div>
  );
}
