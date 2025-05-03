import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "@/components/atoms/Spinner";
import Header from "@/components/organisms/Header";

function BasicLayout(): React.JSX.Element {
    return (
        <>
            <Header />
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
        </>
    );
}

export default BasicLayout;
