// app/layout.js
import Script from 'next/script';
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Data for the JSON-LD script
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Школа Hashslash",
  "description": "Обучаем современной разработке с использованием искусственного интеллекта",
  "founder": { "@type": "Person", "name": "Сережа Рис" },
  "url": "https://school.hsl.sh"
};

export const metadata = {
  title: "Школа Hashslash: Современная разработка с AI",
  description: "Обучаем созданию сайтов и ботов с помощью AI. Курсы по вайб-кодингу и AI-инструментам от Сережи Риса.",
  keywords: ["AI", "разработка", "обучение", "курсы", "веб-разработка", "Сережа Рис", "школа программирования"],
  author: [{ name: "Сережа Рис" }],
  robots: "index, follow",
  themeColor: "#0071e3",
  appleWebApp: { capable: "yes", statusBarStyle: "default", title: "Школа Hashslash" },
  alternates: { canonical: "https://school.hsl.sh/" },
  openGraph: {
    type: "website",
    url: "https://school.hsl.sh/",
    title: "Школа Hashslash: Современная разработка с AI",
    description: "Обучаем созданию сайтов и ботов с помощью AI. Курсы по вайб-кодингу и AI-инструментам от Сережи Риса.",
    images: [{ url: "https://school.hsl.sh/og-image.jpg", width: 1200, height: 630 }],
    siteName: "Школа Hashslash",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://school.hsl.sh/",
    title: "Школа Hashslash: Современная разработка с AI",
    description: "Обучаем созданию сайтов и ботов с помощью AI. Курсы по вайб-кодингу и AI-инструментам от Сережи Риса.",
    images: ["https://school.hsl.sh/og-image.jpg"],
    creator: "@r1iiis",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-apple text-apple-black bg-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FMC7N45N42" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FMC7N45N42');
          `}
        </Script>
      </body>
    </html>
  );
}