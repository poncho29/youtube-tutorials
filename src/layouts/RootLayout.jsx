import { Outlet } from "react-router-dom";

import { Sidebar } from '../components';

export const RootLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />

      <main className='w-full h-full p-4'>
        <Outlet />
      </main>
    </div>
  )
}