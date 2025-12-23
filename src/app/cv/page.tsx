import { ThemeProvider } from "next-themes";

import CVContainer from "../../modules/CV/CVContainer";

export const metadata = {
  title: "CV - David Recheni",
  description: "David Recheni's Curriculum Vitae",
};

export default function CV() {
  return (
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      <div className="h-full bg-white text-black">
        <div className="w-full h-full flex justify-center relative">
          <main>
            <CVContainer />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

