import {useEffect,useState,useRef} from "react";



export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    // navigator onLine은  너가 온라인에 있는지 없는지 true false로 나온다.
  
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
  
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
  
    return status;
  };