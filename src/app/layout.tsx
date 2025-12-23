import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "David Recheni",
  description: "Personal website. Fullstack + web3 dev",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-['Open\\Sans]">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="light"
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

