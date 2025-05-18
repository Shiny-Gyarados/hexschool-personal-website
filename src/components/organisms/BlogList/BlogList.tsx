import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import getPostList from "@/api/getPostList";
import { useQuery } from "@tanstack/react-query";
import ArticleCard from "@/components/molecules/ArticleCard";
import SearchBar from "@/components/atoms/SearchBar";
import Pagination from "@/components/atoms/Pagination";
import "./blog-list.scss";

const PAGE = 1;
const LIMIT = 10;
const SORT = "date";
const ORDER = "desc";

function BlogList() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState<number>(() => {
        const pageParam = parseInt(searchParams.get("page") + "");
        return isNaN(pageParam) ? PAGE : pageParam;
    });
    // input 的值
    const [searchValue, setSearchValue] = useState(() => searchParams.get("search") ?? "");
    // debounce 後要傳給 api 的值
    const [searchValueForQuery, setSearchValueForQuery] = useState(searchValue);
    const timeRef = useRef<NodeJS.Timeout | null>(null);
    const { data, isFetching, isError, error } = useQuery({
        queryKey: [
            "postList",
            `page=${page}`,
            `limit=${LIMIT}`,
            `sort=${SORT}`,
            `order=${ORDER}`,
            `search=${searchValueForQuery}`,
        ],
        queryFn: ({ signal }) =>
            getPostList({
                page: `${page}`,
                limit: `${LIMIT}`,
                sort: SORT,
                order: ORDER,
                search: searchValueForQuery,
                signal,
            }),
    });
    function searchValueChangeHandler(newValue: string) {
        setSearchValue(newValue);
    }
    useEffect(() => {
        timeRef.current = setTimeout(() => {
            const hash = window.location.hash;
            const [path, rawQuery = ""] = hash.slice(1).split("?");
            const params = new URLSearchParams(rawQuery);
            params.set("page", "1");
            if (searchValue) {
                params.set("search", searchValue);
            } else {
                params.delete("search");
            }

            const newHash = `#${path}?${params.toString()}`;
            window.history.replaceState({}, "", newHash);
            setPage(1);
            setSearchValueForQuery(searchValue);
        }, 300);
        return () => {
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
        };
    }, [searchValue]);
    return (
        <div className="blog-list">
            <div className="container">
                <div className="blog-list__search-bar row">
                    <div className="col-12 col-lg-6 col-xl-4">
                        <SearchBar value={searchValue} onChange={searchValueChangeHandler} />
                    </div>
                </div>
                {isFetching ? (
                    // todo: 要顯示 skeleton
                    <p>Loading...</p>
                ) : isError ? (
                    <p>{error.message}</p>
                ) : (
                    // todo 要過濾最新的那篇文章
                    Array.isArray(data?.data) && (
                        <ul className="blog-list__list row list-unstyled">
                            {data.data.map((post) => (
                                <li key={post.id} className="blog-list__item col-md-12 col-lg-6 col-xl-4">
                                    <ArticleCard data={post} />
                                </li>
                            ))}
                        </ul>
                    )
                )}
            </div>
            <div className="blog-list__pagination">
                {data && (
                    <Pagination
                        totalPages={data.pagination?.totalPages ?? 1}
                        maxDisplayedPages={6}
                        currentPage={page}
                        onPageChange={(page) => {
                            setPage(page);
                            navigate(`/blog?page=${page}`);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default BlogList;
