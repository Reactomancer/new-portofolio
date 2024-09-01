import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../ui/header";

export const MainLayout: FC = () => (
  <>
    <Header />
    <main className="dark:bg-gray-dark-default">
      <Outlet />
    </main>
  </>
);
