import { useState } from "react";
import Title from "@/components/atoms/Title";
import { useQuery } from "@tanstack/react-query";
import getPostList from "@/api/getPostList";
import ArticleCard from "@/components/molecules/ArticleCard";
import ArrowLeftButtonSVG from "@/components/atoms/ArrowLeftButtonSVG";
import ArrowRightButtonSVG from "@/components/atoms/ArrowRightButtonSVG";
import "./blog-top-picks.scss";

function BlogTopPicks(): React.JSX.Element {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["postList", "page=1", "limit=9", "sort=date", "order=desc"],
        queryFn: () => getPostList({ page: "1", limit: "9", sort: "date", order: "desc" }),
        select: (data) => data.data,
    });
    // todo: 這邊要改成動態
    const [columnsPerPage] = useState(3);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="blog-top-picks">
            <div className="container">
                <Title className="mb-6">部落格精選</Title>
                <div className="blog-top-picks__content position-relative">
                    <div className="overflow-hidden">
                        {isLoading ? (
                            <p>Loading...</p>
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
