import { type AppType } from "next/dist/shared/lib/utils";
import { Ubuntu, Overpass } from "next/font/google";

import "~/styles/globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-overpass",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${ubuntu.variable} ${overpass.variable}`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
