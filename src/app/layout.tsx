import "../styles/globals.css";

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
    <html lang="en" suppressHydrationWarning data-theme="light">
      <body className="font-['Open\\Sans]">{children}</body>
    </html>
  );
}
