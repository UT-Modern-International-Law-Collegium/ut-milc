import { GoogleAnalytics as _GoogleAnalytics } from "@next/third-parties/google";

export function GoogleAnalytics() {
  return <_GoogleAnalytics gaId={process.env.GA4_ID ?? ""} />;
}
