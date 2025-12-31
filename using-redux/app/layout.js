import Link from "next/link";
import "./globals.css";

import ThemeProvider from "@/context/ThemeContext";
import ReduxProvider from "@/store/ReduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* <ThemeProvider> */}
        <ReduxProvider>{children}</ReduxProvider>

        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
