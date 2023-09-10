import { NextRouter, useRouter } from "next/router";
import Script from "next/script";
import { useEffect, type FC } from "react";

const GA4: FC = () => {
  const router: NextRouter = useRouter();
  const { events } = router;
  useEffect(() => {
    const f = (url: string): void => {
      if (!window) {
        return;
      } else {
        (window as any).gtag(
          "config",
          `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`,
          {
            page_path: url,
          }
        );
      }
    };
    events.on("routeChangeComplete", f);
    events.on("hashChangeComplete", f);
  }, [events]);

  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script strategy="afterInteractive" id={"ga4-script"}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GA4;
