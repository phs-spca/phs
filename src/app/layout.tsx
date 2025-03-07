import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import React from 'react';
import { WindowWidthProvider } from '../context/WindowWidthContext/WindowWidthContext';

const inter = Inter({ subsets: ['latin'] });

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HootWise - Peninsula Humane Society & SPCA Wildlife Care Center',
  description: 'Companion Web Application for Peninsula Humane Society & SPCA Wildlife Care Center in Saratoga, California.',
};

/**
 * @param root0 - Destructured object containing the properties.
 * @param root0.children - The child elements to be rendered within the RootLayout component.
 * @returns - The rendered RootLayout component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
          integrity="sha384-DelNu+PL/74bL4pHGH8gPG8J5Q6wrLpZiiVttBSvpOibBVQf3EOXerhZlmHcnZsI"
          type="text/css"
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        />
        <script src="html5-qrcode.min.js" />
      </head>

      <body className={`${inter.className} ${lato.className}`}>
        <WindowWidthProvider>{children}</WindowWidthProvider>
      </body>
    </html>
  );
}
