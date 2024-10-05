import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from "react-router-dom";
import { router } from './router';

import './index.css';
import { UIProvider } from './context/ui/UIProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UIProvider>
      <RouterProvider router={router} />
    </UIProvider>
  </React.StrictMode>,
)
