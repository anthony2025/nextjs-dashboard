import { inter } from '@/app/ui/fonts';
import Footer from '@/app/study/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
