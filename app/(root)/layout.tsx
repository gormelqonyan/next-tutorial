import React from "react";

import Navbar from "@/components/navigation/navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
