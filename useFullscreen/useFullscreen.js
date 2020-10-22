import {useEffect,useState,useRef} from "react";



export const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
  
    const triggerFullScreen = () => {
      if (element.current) {
        if (element.current.requestFullscreen)
          element.current.requestFullscreen();
        else if (element.current.mozRequestFullScreen) {
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    };
  
    const exitFull = () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mxExitFullscreen) {
        document.msExitFullscreen();
      }
      runCb(false);
    };
    return { element, triggerFullScreen, exitFull };
  };