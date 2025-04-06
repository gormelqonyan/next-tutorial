import React from "react";

import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={"min-h-[100vh]"}>
      <Navbar />
      <main className={"flex"}>
        <LeftSidebar />
        <section
          className={
            "flex flex-1 flex-col px-6 pt-16 pb-6 max-md:pb-14 sm:px-14"
          }
        >
          <div className={"mx-auto w-full max-w-5xl"}>{children}</div>
        </section>
        <aside>Aside</aside>
      </main>
    </div>
  );
}

export default RootLayout;
