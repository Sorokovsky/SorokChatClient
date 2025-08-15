import { Header } from "@/common/header/header";
import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";
import "./globals.sass";

export const metadata: Metadata = {
  title: "Sorok Chat",
  description: "Український месенджер SorokChat",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;