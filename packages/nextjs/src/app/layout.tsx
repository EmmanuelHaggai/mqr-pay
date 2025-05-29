import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

import './global.css';
import '@coinbase/onchainkit/styles.css';
// import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);


// export const viewport = {
//   width: 'device-width',
//   initialScale: 1.0,
// };

// export const metadata: Metadata = {
//   title: 'Onchain App Template',
//   description: 'Built with OnchainKit',
//   openGraph: {
//     title: 'Onchain App Template',
//     description: 'Built with OnchainKit',
//     images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
//   },
// };

// export default function RootLayout({
//   children,
// }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="flex items-center justify-center">
//         <OnchainProviders>{children}</OnchainProviders>
//       </body>
//     </html>
//   );
// }


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Instant QR code payments via WhatsApp with MQR Pay. Fast, secure, and easy transactions in seconds"
        />
        <meta
          name="keywords"
          content="MQR Pay enables seamless Ksh-to-ETH conversion, real-time transaction tracking via WhatsApp AI, and instant notifications for incoming ETH, all in one streamlined wallet."
        />
        <meta name="MobileOptimized" content="320" />
        <title> MQR Pay - Base Smart Wallet with Instant Ksh-to-ETH Conversion </title>

        {/* External CSS links */}
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.css" />
        <link rel="stylesheet" href="/js/plugin/rs_slider/layers.css" />
        <link rel="stylesheet" href="/js/plugin/rs_slider/navigation.css" />
        <link rel="stylesheet" href="/js/plugin/rs_slider/settings.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        <link rel="stylesheet" href="intl_phone_number/css/intlTelInput.css" />

        {/* Favicon */}
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </head>
      <body>

        {/* Preloader HTML */}
        <div id="preloader">
          <div id="status">
            <img src="/images/header/mabo-rotating.gif" id="preloader_image" alt="loader" />
          </div>
        </div>


        <OnchainProviders>{children}</OnchainProviders>


        {/* Main JS Files Start */}
        <script src="/js/jquery_min.js"></script>
        <script src="/js/bootstrap.js"></script>
        <script src="/js/modernizr.js"></script>
        <script src="/js/parallax.min.js"></script>
        <script src="/js/owl.carousel.js"></script>
        <script src="/js/plugin/rs_slider/jquery.themepunch.tools.min.js"></script>
        <script src="/js/plugin/rs_slider/jquery.themepunch.revolution.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.addon.snow.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.actions.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.carousel.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.kenburn.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.layeranimation.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.migration.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.navigation.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.parallax.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.slideanims.min.js"></script>
        <script src="/js/plugin/rs_slider/revolution.extension.video.min.js"></script>
        <script src="/js/custom.js"></script>

        <script src="intl_phone_number/js/intlTelInput.js"></script>

        <script src="custom_assets/llqrcode.js"></script>
        <script src="custom_assets/webqr.js"></script>

        <script src="custom_assets/ext1.js"></script>
        {/* Main JS Files End */}
      </body>
    </html>
  );
}
