import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/atoms/ErrorBoundary";
import BasicLayout from "@/components/template/BasicLayout";
import ErrorBoundaryFallback from "@/components/molecules/ErrorBoundaryFallback";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Home = lazy(() => import("@/components/pages/Home"));
const Blog = lazy(() => import("@/components/pages/Blog"));
const Post = lazy(() => import("@/components/pages/Post"));

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
        },
    },
});

function App() {
    return (
        <ErrorBoundary fallback={<ErrorBoundaryFallback />}>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route element={<BasicLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/post/:id" element={<Post />} />
                    </Route>
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ErrorBoundary>
    );
}

export default App;
