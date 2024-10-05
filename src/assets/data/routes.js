import { IoHome, IoLayers  } from "react-icons/io5";
import { FaFileWaveform  } from "react-icons/fa6";

export const routes = [
  {
    path: '/',
    name: 'Incio',
    icon: IoHome
  },
  {
    path: '/todo-app',
    name: 'Todo App',
    icon: IoLayers
  },
  {
    path: '/steps-form',
    name: 'Formulario de Pasos',
    icon: FaFileWaveform 
  }
];
