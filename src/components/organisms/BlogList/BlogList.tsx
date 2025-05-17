import { useState, useMemo } from "react";
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
    const [searchValue, setSearchValue] = useState("");
    const { data, isFetching, isError, error } = useQuery({
        queryKey: [
            "postList",
            `page=${searchParams.get("page") ?? PAGE}`,
            `limit=${LIMIT}`,
            `sort=${SORT}`,
            `order=${ORDER}`,
            `search=${searchValue}`,
        ],
        queryFn: () =>
            getPostList({
                page: `${searchParams.get("page") ?? PAGE}`,
                limit: `${LIMIT}`,
                sort: SORT,
                order: ORDER,
                search: searchValue,
            }),
    });
    return (
        <div className="blog-list">
            <div className="container">
                <div className="blog-list__search-bar row">
                    <div className="col-12 col-lg-6 col-xl-4">
                        <SearchBar value={searchValue} onChange={setSearchValue} />
                    </div>
                </div>
                {isFetching ? (
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
                        currentPage={data.pagination?.currentPage ?? 1}
                        onPageChange={(page) => {
                            navigate(`/blog?page=${page}`);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default BlogList;
