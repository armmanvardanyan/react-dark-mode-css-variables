import { useEffect } from "react";
import useLocalStorage from "./use-localstorage";



function useDarkMode() {
    // Use our useLocalStorage hook to persist state through a page refresh.
    // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
    const [enabledState, setEnabledState] = useLocalStorage("theme",'');
    // See if user has set a browser or OS preference for dark mode.
    // The usePrefersDarkMode hook composes a useMedia hook (see code below).
    // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
    // This allows user to override OS level setting on our website.
  
    // Fire off effect that add/removes dark mode class
    useEffect(
        () => {
            const className = "dark-theme";
            const element = document.documentElement;
            if (enabledState) {
                element.classList.add(className);
            } else {
                element.classList.remove(className);
            }
        },
        [enabledState] // Only re-call effect when value changes
    );
    // Return enabled state and setter
    return [enabledState, setEnabledState];
}




export default useDarkMode;