import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col px-4 sm:px-6 md:px-12 lg:px-12 py-2">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Ensure Page Content is Below Navbar */}
      <div className="flex-1 pt-[50px] sm:pt-[90px] md:pt-[100px] px-1 sm:px-6 md:px-12 lg:px-1 py-2">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
