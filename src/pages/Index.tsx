import Header from "@/components/Header";
import CarouselImg from "@/components/common/CarouselImg";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <Header />
      <CarouselImg />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
