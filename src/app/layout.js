import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${figtree.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] bg-slate-300 text-pink-500 dark:bg-slate-900 dark:text-pink-300">
        <Header />
        <div className="flex-1 flex justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
