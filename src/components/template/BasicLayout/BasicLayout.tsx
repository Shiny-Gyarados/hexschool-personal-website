import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "@/components/atoms/Spinner";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import useScrollToTopOnPush from "@/hooks/useScrollToTopOnPush";

function BasicLayout(): React.JSX.Element {
    useScrollToTopOnPush();
    return (
        <>
            <Header />
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
}

export default BasicLayout;
