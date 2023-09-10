import "./globals.css";

import Footer from "@/components/layout/Footer";
import { DesktopHeader } from "@/components/layout/header/desktop-header";
import { MobileHeader } from "@/components/layout/header/mobile-header";

export const metadata = {
  title: "東京大学現代国際法研究会",
  description: "東京大学現代国際法研究会のホームページです。",
  themeColor: "#ffffff",
  manifest: "/favicons/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <DesktopHeader />
        <MobileHeader />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
