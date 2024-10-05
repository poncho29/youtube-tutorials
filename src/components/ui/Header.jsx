import { Link } from "react-router-dom";

import { IoReorderThree } from "react-icons/io5";
import PropTypes from 'prop-types';

import { useUIContext } from "../../context/ui";

import { YouTubeIcon } from "../icons/YouTubeIcon";

export const Header = ({ urlVideo }) => {
  const { onToggleSidebar } = useUIContext();

  return (
    <header className="h-16 flex items-center justify-between p-4 bg-slate-300 md:justify-end">
      <button
        className="p-1 rounded-md transition-all duration-300 hover:bg-slate-400 md:hidden"
      >
        <IoReorderThree
          size={24}
          onClick={() => onToggleSidebar(true)}
        />
      </button>

      {urlVideo && (
        <Link
          to={urlVideo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-2 py-1 hover:underline"
        >
          <span className="font-medium">Ver tutorial</span>
          <YouTubeIcon className="size-5" />
        </Link>
      )}
    </header>
  )
}

Header.propTypes = {
  urlVideo: PropTypes.string
}
