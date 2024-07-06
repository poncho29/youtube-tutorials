import { Outlet } from "react-router-dom";

import { Sidebar } from '../components';

export const RootLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />

      <main className="w-full h-screen overflow-x-hidden overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}