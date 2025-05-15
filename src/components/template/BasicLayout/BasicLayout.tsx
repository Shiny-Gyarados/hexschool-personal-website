import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "@/components/atoms/Spinner";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

function BasicLayout(): React.JSX.Element {
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
