import { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

function useScrollToTopOnPush() {
    const navigationType = useNavigationType();
    const { pathname } = useLocation();
    useEffect(() => {
        if (navigationType === "PUSH") {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
    }, [navigationType, pathname]);
}

export default useScrollToTopOnPush;
