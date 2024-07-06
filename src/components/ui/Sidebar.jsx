import { IoReorderThree } from "react-icons/io5";

import { LinkSidebar } from "./LinkSidebar";
import { YouTubeIcon } from '../icons/YouTubeIcon';

import { routes } from "../../assets";

export const Sidebar = () => {
  return (
    <div className='w-72 h-screen flex flex-col p-4 bg-slate-300'>
      <div className="h-8 flex items-center justify-between">
        <h2 className='text-3xl font-bold uppercase'>LOGO</h2>

        <button
          className="p-1 rounded-md transition-all duration-300 hover:bg-slate-400"
        >
          <IoReorderThree
            size={24}
            onClick={() => {}}
          />
        </button>
      </div>

      <hr className='w-full my-4' />

      <div className="grow flex flex-col gap-1">
        {routes.map((route) => (
          <LinkSidebar route={route} key={route.path} />
        ))}
      </div>
      
      <hr className='w-full my-4' />

      <a
        href='https://www.youtube.com/channel/UCq7JQtygCHQW3b0SWru1XzA'
        target='_blank'
        rel='noreferrer'
        className='h-9 flex items-center justify-between cursor-pointer'
      >
        <h2 className='text-2xl font-bold uppercase'>Sígueme</h2>
        <YouTubeIcon className="w-6 h-6" />
      </a>
    </div>
  )
}
