import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white overflow-hidden flex justify-center items-center">
      <div className="flex md:!w-[95%] w-[80%] h-full overflow-hidden flex-col">
        <Header />
        <Dashboard />
      </div>
      <div className="h-full overflow-auto shadow-lg md:!w-[5%] w-[20%]">
        <Sidebar />
      </div>
    </div>
  );
}
