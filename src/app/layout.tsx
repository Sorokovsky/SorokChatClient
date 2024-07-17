import type { Metadata } from "next";
import "@/styles/globals.sass";
import MainLayout from "@/layout/main-layout";
import { ILayout } from "@/layout/lauout.interface";
import StoreProvider from "@/components/store-povider/store-provider";

export const metadata: Metadata = {
  title: "Sorok Chat messanger.",
  description: "Sorok Chat messanger. A new messanger in ukraine.",
};

const RootLayout = ({children}: ILayout) => {
  return (
    <StoreProvider>
      <MainLayout>
        {children}
      </MainLayout>
    </StoreProvider>
  );
}
export default RootLayout;