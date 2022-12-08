import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getThemeMode } from "./theme-slice";

const useThemeMode = () => {
  const mode = useSelector(getThemeMode);

  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return mode;
};

export default useThemeMode;
