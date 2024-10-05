import { useState } from "react";

import PropTypes from 'prop-types';

import { UIContext } from "./UIContext";

const INITIAL_VALUES = {
  isSidebarOpen: false,
  onToggleSidebar: () => {},
}

export const UIProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_VALUES);

  const onToggleSidebar = (value) => {
    setState({
      ...state,
      isSidebarOpen: value
    })
  }

  return (
    <UIContext.Provider value={{ ...state, onToggleSidebar }}>
      { children }
    </UIContext.Provider>
  )
}

UIProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
