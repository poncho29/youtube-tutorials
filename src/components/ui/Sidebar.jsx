import { YouTubeIcon } from '../icons/YouTubeIcon';

export const Sidebar = () => {
  return (
    <div className='w-72 h-screen p-4 bg-slate-300'>
      <a
        href='https://www.youtube.com/channel/UCq7JQtygCHQW3b0SWru1XzA'
        target='_blank'
        rel='noreferrer'
        className='flex items-center justify-between cursor-pointer'
      >
        <h2 className='text-2xl font-bold uppercase'>Sígueme</h2>
        <YouTubeIcon className="w-6 h-6" />
      </a>
    </div>
  )
}
