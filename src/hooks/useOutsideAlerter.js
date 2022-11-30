import { useEffect } from "react";

function useOutsideAlerter(ref, onOutSideClickHandler) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutSideClickHandler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutSideClickHandler]);
}

export default useOutsideAlerter;
