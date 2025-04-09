import { NavLink, Outlet } from "react-router";
import ProstImage from "../assets/img/Prost.png";

function RootLayout() {
  return (
    <>
      <div className="container mx-auto">
        <main>
          <Outlet />
        </main>
      </div>
      
      <nav className="flex justify-center fixed bottom-0 left-0 right-0 p-2 bg-yellow-400">
        <NavLink to="/">
          <div className="bg-stone-50 flex justify-center rounded-[150px] w-3xs">
            <img className="w-4xs" src={ProstImage} alt="BackToHome" />
          </div>
        </NavLink>
      </nav>
    </>
  );
}

export default RootLayout;
