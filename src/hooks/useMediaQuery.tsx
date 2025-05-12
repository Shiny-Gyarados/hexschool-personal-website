import { useLayoutEffect, useState } from "react";

const useMediaQuery = (query: string, defaultValue?: boolean): boolean => {
    const [matches, setMatches] = useState<boolean>(defaultValue || window.matchMedia(query).matches);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(query);
        function onMediaQueryChange() {
            setMatches(mediaQuery.matches);
        }
        onMediaQueryChange();

        mediaQuery.addEventListener("change", onMediaQueryChange, { passive: true });

        return (): void => {
            mediaQuery.removeEventListener("change", onMediaQueryChange);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
