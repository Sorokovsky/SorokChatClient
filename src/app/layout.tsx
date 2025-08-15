import { Layout } from "@/components/common/layout/layout";
import type { ILayout } from "@/components/common/layout/layout.props";
import type { Metadata } from "next";
import type { FC } from "react";
import "./globals.sass";

export const metadata: Metadata = {
  title: "Sorok Chat",
  description: "Український месенджер SorokChat",
};

const RootLayout: FC<ILayout> = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

export default RootLayout;