// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="keywords" content="agency, app landing, bootstrap 5, business, corporate, creative, doc, documentation, landing page, mobile app, sass, software, survey, trending" />
        <meta name="description" content="Ntec - Saas & Software HTML5 Template for all kinds of agency, app landing, bootstrap 5, business, corporate, creative, doc, documentation, landing page, mobile app, sass, software, survey" />
        <title>Ntec - Saas & Software HTML5 Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <body>
        {/* Custom body class or structure */}
        <Main />
        <NextScript />
        {/* <script src="../../public/js/vendor/jquery-2.2.4.min.js" />
        <script src="../../public/js/vendor/popper.min.js" />
        <script src="../../public/js/vendor/bootstrap.min.js" />
        <script src="../../public/js/jquery.meanmenu.js" />
        <script src="../../public/js/swiper-bundle.min.js" />
        <script src="../../public/js/slick.min.js" />
        <script src="../../public/js/jquery.easypiechart.min.js" />
        <script src="../../public/js/jquery.counterup.min.js" />
        <script src="../../public/js/jquery.magnific-popup.min.js" />
        <script src="../../public/metisMenu.min.js" />
        <script src="../../public/js/wow.min.js" />
        <script src="../../public/js/jquery.waypoints.min.js" />
        <script src="../../public/js/aos.js" />
        <script src="../../public/js/jquery.nice-select.min.js" />
        <script src="../../public/js/jquery-ui.js" />
        <script src="../../public/js/jquery.scrollUp.min.js" />
        <script src="../../public/js/plugins.js" />
        <script src="../../public/js/main.js" /> */}
      </body>
    </Html>
  );
}
