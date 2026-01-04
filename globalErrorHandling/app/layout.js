// export const dynamic = "force-dynamic";  // always dynamic (SSR)


import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/context/ThemeContext";


export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="dark">
      <body>
        <ThemeProvider>
          <Header />
          
        </ThemeProvider>
      </body>
    </html>
  );
}
