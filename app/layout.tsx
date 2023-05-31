import "./globals.css";

import Footer from "./_components/_layout/Footer";
import { DesktopHeader } from "./_components/_layout/header/DesktopHeader";
import { MobileHeader } from "./_components/_layout/header/MobileHeader";

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default RootLayout;
