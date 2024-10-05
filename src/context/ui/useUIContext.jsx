import { useContext } from 'react';

import { UIContext } from './UIContext';

export const useUIContext = () => {
  const uiContext = useContext(UIContext)
  
  return { ...uiContext }
}
