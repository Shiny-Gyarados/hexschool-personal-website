import { useQuery } from "@tanstack/react-query";
import getPostList from "@/api/getPostList";
import { BASE_NAME } from "@/configs/global_configs";
import ReadMoreLink from "@/components/atoms/ReadMoreLink";
import "./latest-post.scss";

function LatestPost(): React.JSX.Element {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["postList", "page=1", "limit=10", "sort=date", "order=desc", "search="],
        queryFn: () => getPostList({ page: "1", limit: "10", sort: "date", order: "desc" }),
        select: (data) => data.data,
    });
    return (
        <div className="latest-post container-fluid">
            <div className="row">
                {isLoading ? (
                    <>
                        <div className="latest-post__image col-12 col-lg-6 placeholder-glow">
                            <img
                                src="https://fakeimg.pl/940x640/?text=%20"
                                alt="loading image"
                                className="placeholder rounded-2"
                            />
                        </div>
                        <div className="col-12 col-lg-6 placeholder-glow">
                            <div className="h-100 align-content-center">
                                <div className="article-card__content flex-grow-1 d-flex flex-column flex-grow-1">
                                    <time className="article-card__date mb-1 fw-medium placeholder rounded-2 col-3"></time>
                                    <ul className="article-card__tags list-unstyled d-flex gap-2">
                                        {Array.from({ length: 2 }).map((_, index) => (
                                            <li
                                                key={index}
                                                className="article-card__tag text-primary fs-4 fw-medium placeholder rounded-2 col-2"
                                            >
                                                #{index}
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className="article-card__title fw-bold line-clamp-2 placeholder rounded-2"></h3>
                                    <p className="article-card__description line-clamp-2 placeholder rounded-2"></p>
                                    <a className="btn btn-gray disabled placeholder col-4" aria-disabled="true"></a>
                                </div>
                            </div>
                        </div>
                    </>
                ) : isError ? (
                    <div className="p-6 d-flex flex-column gap-3 align-items-center">
                        <p className="text-danger text-center">{error.message}</p>
                        <button className="btn btn-danger" onClick={() => refetch()}>
                            重新整理
                        </button>
                    </div>
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
