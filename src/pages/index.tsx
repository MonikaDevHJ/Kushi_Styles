import Navbar from "@/components/Navbar";
import AllIItem from "../components/AllIItem"
import Footer from "@/components/Footer";
import Offersitems from "@/components/Offersitems"


export default function Home() {
  return (
   <div className="bg-slate-100 px-6 md:px-12 lg:px-20 py-4">

    <Navbar/>

    <AllIItem/>
    <Offersitems/>
    <Footer/>

   </div>
  );
}
