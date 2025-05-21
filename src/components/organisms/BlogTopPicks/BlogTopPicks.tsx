import { useState, useEffect, useMemo } from "react";
import Title from "@/components/atoms/Title";
import { useQuery } from "@tanstack/react-query";
import getPostList from "@/api/getPostList";
import ArticleCard from "@/components/molecules/ArticleCard";
import ArrowLeftButtonSVG from "@/components/atoms/ArrowLeftButtonSVG";
import ArrowRightButtonSVG from "@/components/atoms/ArrowRightButtonSVG";
import useMediaQuery from "@/hooks/useMediaQuery";
import { DEVICE_BREAKPOINT } from "@/types/common";
import ArticleCardSkeleton from "@/components/molecules/ArticleCardSkeleton";
import "./blog-top-picks.scss";

const PAGE = 1;
const LIMIT = 10;
const SORT = "date";
const ORDER = "desc";

function BlogTopPicks(): React.JSX.Element {
    const isDesktop = useMediaQuery(`(min-width: ${DEVICE_BREAKPOINT.XL}px)`);
    const isTablet = useMediaQuery(`(min-width: ${DEVICE_BREAKPOINT.LG}px)`);
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["postList", `page=${PAGE}`, `limit=${LIMIT}`, `sort=${SORT}`, `order=${ORDER}`, `search=`],
        queryFn: () => getPostList({ page: `${PAGE}`, limit: `${LIMIT}`, sort: SORT, order: ORDER }),
        select: (data) => data.data,
    });
    const [currentIndex, setCurrentIndex] = useState(0);

    const columnsPerPage = useMemo(() => {
        if (isDesktop) {
            return 3;
        } else if (isTablet === true && isDesktop === false) {
            return 2;
        }
        return 1;
    }, [isDesktop, isTablet]);

    useEffect(() => {
        if (Array.isArray(data)) {
            if (currentIndex > data.length - columnsPerPage) {
                setCurrentIndex(data.length - columnsPerPage);
            }
        }
    }, [isDesktop, currentIndex, data, columnsPerPage]);

    return (
        <section className="blog-top-picks">
            <div className="container">
                <Title className="mb-6">部落格精選</Title>
                <div className="blog-top-picks__content position-relative">
                    <div className="overflow-hidden">
                        {isLoading ? (
                            <ul className="blog-top-picks__list-wrap row list-unstyled flex-nowrap mb-0">
                                {Array.from({ length: 10 }).map((_, index) => (
                                    <li key={index} className="col-md-12 col-lg-6 col-xl-4">
                                        <ArticleCardSkeleton />
                                    </li>
                                ))}
                            </ul>
                        ) : isError ? (
                            <p>{error.message}</p>
                        ) : (
                            Array.isArray(data) && (
                                <ul
                                    className="blog-top-picks__list-wrap row list-unstyled flex-nowrap mb-0"
                                    style={{ transform: `translateX(-${(currentIndex * 100) / columnsPerPage}%)` }}
                                >
                                    {data.map((post) => (
                                        <li key={post.id} className="col-md-12 col-lg-6 col-xl-4">
                                            <ArticleCard data={post} />
                                        </li>
                                    ))}
                                </ul>
                            )
                        )}
                    </div>
                    <button
                        className="blog-top-picks__prev-button"
                        disabled={currentIndex === 0}
                        onClick={() => setCurrentIndex((prev) => (prev - 1 <= 0 ? 0 : prev - 1))}
                    >
                        <ArrowLeftButtonSVG />
                    </button>
                    <button
                        className="blog-top-picks__next-button"
                        disabled={!Array.isArray(data) || currentIndex === data.length - columnsPerPage}
                        onClick={() =>
                            setCurrentIndex((prev) => {
                                if (Array.isArray(data)) {
                                    return prev + 1 >= data.length ? data.length - 1 : prev + 1;
                                }
                                return prev;
                            })
                        }
                    >
                        <ArrowRightButtonSVG />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BlogTopPicks;
