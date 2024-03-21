import "./globals.css";

import { GoogleAnalytics } from "@/components/google-analytics";
import { Footer } from "@/components/layout/Footer";
import { DesktopHeader } from "@/components/layout/header/desktop-header";
import { MobileHeader } from "@/components/layout/header/mobile-header";
import { Provider } from "@/components/provider";

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.utmilc.com"
      : "http://localhost:3000"
  ),
  title: "東京大学現代国際法研究会",
  description: "東京大学現代国際法研究会のホームページです。",
  openGraph: {
    images: "/opengraph-image.png",
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
        <GoogleAnalytics />
        <Provider>
          <DesktopHeader />
          <MobileHeader />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
