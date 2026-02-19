import { Metadata, Viewport } from 'next';
import { Poppins, Fira_Code } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const firaCode = Fira_Code({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#00ff41',
};

export const metadata: Metadata = {
  title: 'Edben - Desarrollador de Software',
  description: 'Portfolio de Edwar Alexander Benito Basante, desarrollador full-stack especializado en tecnologías modernas.',
  keywords: ['desarrollador software', 'full-stack developer', 'Python', 'Django', 'React', 'Angular', 'portfolio'],
  authors: [{ name: 'Edwar Alexander Benito Basante' }],
  creator: 'Edwar Alexander Benito Basante',
  openGraph: {
    type: 'website',
    title: 'Edben - Desarrollador de Software',
    description: 'Portfolio de Edwar Alexander Benito Basante, desarrollador full-stack especializado en tecnologías modernas.',
    siteName: 'Edben Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edben - Desarrollador de Software',
    description: 'Portfolio de Edwar Alexander Benito Basante, desarrollador full-stack.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${firaCode.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={poppins.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
