import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OYO Nomad | Carry Your Stay — Safari × OYO Prototype",
  description: "A conceptual portable camping system by Safari & OYO. An innovative carry-on backpack with an integrated detachable shelter module.",
  keywords: ["OYO Nomad", "Safari", "OYO", "Backpack Tent", "Formula Unicorn", "Outdoor Prototype", "Carry Your Stay"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#171A1D] text-[#F5F3EE] font-sans">
        {children}
      </body>
    </html>
  );
}
