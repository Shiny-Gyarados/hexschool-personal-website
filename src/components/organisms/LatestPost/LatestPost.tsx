import { useQuery } from "@tanstack/react-query";
import getPostList from "@/api/getPostList";
import { BASE_NAME } from "@/configs/global_configs";
import ReadMoreLink from "@/components/atoms/ReadMoreLink";
import "./latest-post.scss";

function LatestPost(): React.JSX.Element {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["postList", "page=1", "limit=10", "sort=date", "order=desc", "search="],
        queryFn: () => getPostList({ page: "1", limit: "10", sort: "date", order: "desc" }),
        select: (data) => data.data,
    });
    return (
        <div className="latest-post container-fluid">
            <div className="row">
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>{error.message}</p>
                ) : (
                    Array.isArray(data) &&
                    data.length > 0 && (
                        <>
                            <div className="latest-post__image col-12 col-lg-6">
                                <img src={`${BASE_NAME}${data[0].frontmatter.image}`} alt={data[0].frontmatter.title} />
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="h-100 align-content-center">
                                    <div className="article-card__content flex-grow-1 d-flex flex-column flex-grow-1">
                                        <time
                                            className="article-card__date mb-1 fw-medium"
                                            dateTime={new Date(data[0].frontmatter.date).toISOString()}
                                        >
                                            {`${new Date(data[0].frontmatter.date).getFullYear()}/${new Date(data[0].frontmatter.date).getMonth() + 1}/${new Date(data[0].frontmatter.date).getDate()}`}
                                        </time>
                                        <ul className="article-card__tags list-unstyled d-flex gap-2">
                                            {data[0].frontmatter.tags.map((tag) => (
                                                <li key={tag} className="article-card__tag text-primary fs-4 fw-medium">
                                                    #{tag}
                                                </li>
                                            ))}
                                        </ul>
                                        <h3 className="article-card__title fw-bold line-clamp-2">
                                            {data[0].frontmatter.title}
                                        </h3>
                                        <p className="article-card__description line-clamp-2">
                                            {data[0].frontmatter.description}
                                        </p>
                                        <ReadMoreLink href={`/post/${data[0].id}`}>閱讀內文</ReadMoreLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
}

export default LatestPost;
