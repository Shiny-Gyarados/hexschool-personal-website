import { useEffect, useMemo } from "react";
import { useNavigationType, useLocation, useSearchParams } from "react-router-dom";

function sortByKeys(a: [string, string], b: [string, string]) {
    return a[0].localeCompare(b[0]);
}

function useScrollToTopOnPush() {
    const navigationType = useNavigationType();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const paramString = useMemo(() => {
        const params = [...searchParams.entries()].sort(sortByKeys);
        if (params.length === 0) {
            return "page=1";
        }
        return params.map(([key, value]) => `${key}=${value}`).join("&");
    }, [searchParams]);
    useEffect(() => {
        if (navigationType === "PUSH") {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [navigationType, pathname, paramString]);
}

export default useScrollToTopOnPush;
