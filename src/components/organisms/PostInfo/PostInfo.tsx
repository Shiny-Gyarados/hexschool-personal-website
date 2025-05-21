import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BASE_NAME } from "@/configs/global_configs";
import getPostById from "@/api/getPostById";
import "./post-info.scss";

function PostInfo(): React.JSX.Element {
    const { id } = useParams();
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["post", id],
        queryFn: () => getPostById({ id: id ?? "-1" }),
        select: (data) => data.data,
    });
    return (
        <div className="post-info container-fluid">
            <div className="row">
                {isLoading ? (
                    <>
                        <div className="post-info__image col-12 col-lg-6 placeholder-glow">
                            <img
                                src="https://fakeimg.pl/940x640/?text=%20"
                                alt="loading image"
                                className="placeholder rounded-2"
                            />
                        </div>
                        <div className="col-12 col-lg-6 placeholder-glow">
                            <div className="h-100 align-content-center">
                                <div className="post-info__content flex-grow-1 d-flex flex-column flex-grow-1">
                                    <time className="mb-1 fw-medium placeholder rounded-2 col-3"></time>
                                    <ul className="list-unstyled d-flex gap-2 mb-2">
                                        {Array.from({ length: 2 }).map((_, index) => (
                                            <li
                                                key={index}
                                                className="text-primary fs-4 fw-medium placeholder rounded-2 col-2"
                                            >
                                                #{index}
                                            </li>
                                        ))}
                                    </ul>
                                    <h1 className="fs-3 fw-bold line-clamp-2 placeholder rounded-2"></h1>
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
                    data && (
                        <>
                            <div className="post-info__image col-12 col-lg-6">
                                <img src={`${BASE_NAME}${data.frontmatter.image}`} alt={data.frontmatter.title} />
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="h-100 align-content-center">
                                    <div className="post-info__content flex-grow-1 d-flex flex-column flex-grow-1">
                                        <time
                                            className="mb-1 fw-medium"
                                            dateTime={new Date(data.frontmatter.date).toISOString()}
                                        >
                                            {`${new Date(data.frontmatter.date).getFullYear()}/${new Date(data.frontmatter.date).getMonth() + 1}/${new Date(data.frontmatter.date).getDate()}`}
                                        </time>
                                        <ul className="list-unstyled d-flex gap-2 mb-2">
                                            {data.frontmatter.tags.map((tag) => (
                                                <li key={tag} className="text-primary fs-4 fw-medium">
                                                    #{tag}
                                                </li>
                                            ))}
                                        </ul>
                                        <h1 className="fs-3 fw-bold line-clamp-2">{data.frontmatter.title}</h1>
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

export default PostInfo;
