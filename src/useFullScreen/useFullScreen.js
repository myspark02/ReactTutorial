import {useRef} from "react";

export const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen)
          element.current.requestFullscreen();
        else if (element.current.mozRequestFullScreen)
          element.current.mozRequestFullScreen();
        else if (element.current.webkitRequestFullscreen)
          element.current.webkitRequestFullscreen();
        else if (element.current.msRequestFullscreen)
          element.current.msRequestFullscreen();
        callback(true);
      }
    };
  
    const exitFull = () => {
      document.exitFullscreen();
      callback(false);
    };
    return { element, triggerFull, exitFull };
  };