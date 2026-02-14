import type { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className="antialiased min-h-screen bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}
