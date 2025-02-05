import Navbar from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-slate-100">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Page Content with padding-top to avoid overlap */}
      <div className="pt-[80px] px-6 md:px-12 lg:px-20 py-4">
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
