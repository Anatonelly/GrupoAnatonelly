import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Grupo Anatonelly',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' translate='no' className='scroll-smooth'>
      <body
        className={
          (poppins.className, 'h-auto w-full relative -z-50 bg-neutral-200')
        }
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NS78XSP8"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            ((function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NS78XSP8');
            `,
          }}
        />
      </body>
    </html>
  );
}
