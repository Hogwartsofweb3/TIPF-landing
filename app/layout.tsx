import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIPF Mining - Mining with proof. Not with promises.",
  description: "25-block on-chain rounds. Cryptographically verified outcomes via Magicblock VRF. Two risk profiles. One provable truth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
