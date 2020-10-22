import {useEffect,useState,useRef} from "react";


export const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = ""; // 구글 크롬에서 이걸 넣어주어야 ㅏㄴ다. 
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
  
    return { enablePrevent, disablePrevent };
  };