import AllIItem from "../components/AllIItem";
import Footer from "@/components/Footer";
import Offersitems from "@/components/Offersitems";

export default function Home() {
  return (
    <div className="bg-slate-100 px-6 md:px-12 lg:px-14 py-4 pt-[20px]">
      <AllIItem />
      <Offersitems />
      <Footer />
    </div>
  );
}
