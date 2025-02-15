import { Outlet } from "react-router-dom";

import Header from "./header";
import Menu from "./menu";

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex-1 h-screen flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          {" "}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
