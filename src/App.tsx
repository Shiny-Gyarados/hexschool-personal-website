import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/atoms/ErrorBoundary";
import BasicLayout from "@/components/template/BasicLayout";
import ErrorBoundaryFallback from "@/components/molecules/ErrorBoundaryFallback";

const Home = lazy(() => import("@/components/pages/Home"));
const Blog = lazy(() => import("@/components/pages/Blog"));

function App() {
    return (
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <Routes>
                <Route element={<BasicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
