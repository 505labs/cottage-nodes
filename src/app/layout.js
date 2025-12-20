import { Sora } from "next/font/google";
import "/public/assets/css/font-awesome-all.min.css";
import "/public/assets/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/style.css";
import "aos/dist/aos.css";
import AosInit from "@/component/aos";
import ServiceWorker from "@/component/sw";
export const metadata = {
  title: "Aai",
  description: "Aai ",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const sora = Sora({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.className}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <ServiceWorker />
      <body>
        <AosInit />
        {children}
      </body>
    </html>
  );
}
