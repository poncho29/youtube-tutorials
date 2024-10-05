import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import { useUIContext } from "../../context/ui";

import { useScreenSize } from "../../hooks";

export const LinkSidebar = ({ route }) => {
  const Icon = route.icon;

  const { onToggleSidebar } = useUIContext();

  const { width } = useScreenSize();
  const isMobile = width <= 768;

  return (
    <NavLink
      key={route.path}
      to={route.path}
      className={({ isActive }) => `
        flex items-center justify-between p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-slate-400
        ${isActive ? "font-bold bg-slate-400" : ""}
      `}
      onClick={() => isMobile && onToggleSidebar(false)}
    >
      <span>
        { route.name }
      </span>

      { <Icon size={20} /> }
    </NavLink>
  )
}

LinkSidebar.propTypes = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired
  })
}
