import {useEffect,useState,useRef} from "react";


export const useClick = (onClick) => {
    if (typeof onClick !== "function") {
      return;
    }
  
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        // 만일 함수를 리턴받으면 그함수는 componentWillUnMount
        //로 부터 호출된 것이다. 즉  componentWillUnMount때 호출된다.
        if (element.current)
          element.current.removeEventListener("click", onClick);
      };
    }, []);
    return element;
  };
