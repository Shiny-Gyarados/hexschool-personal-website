import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BASE_NAME } from "@/configs/global_configs";
import getPostById from "@/api/getPostById";
import "./post-info.scss";

function PostInfo(): React.JSX.Element {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id],
        queryFn: () => getPostById({ id: id ?? "-1" }),
        select: (data) => data.data,
    });
    return (
        <div className="post-info container-fluid">
            <div className="row">
                {isLoading ? (
                    <p>Loading...</p>
                ) : isError ? (
                    <p>{error.message}</p>
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
