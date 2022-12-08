import iconDark from "../../assets/themeIconDark.png";
import iconLight from "../../assets/themeIconLight.png";
import useThemeMode from "./useThemeMode";

const useThemeIcon = () => {
  const mode = useThemeMode();
  return mode === "light" ? iconDark : iconLight;
};

export default useThemeIcon;
