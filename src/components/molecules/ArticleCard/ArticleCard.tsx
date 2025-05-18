import { useMemo } from "react";
import { Link } from "react-router-dom";
import { BASE_NAME } from "@/configs/global_configs";
import type { PostInfo } from "@/types/post";
import "./article-card.scss";

interface ArticleCardProps {
    data: PostInfo;
}

function ArticleCard({ data: { frontmatter, id } }: ArticleCardProps) {
    const date = useMemo(() => new Date(frontmatter.date), [frontmatter.date]);
    const year = useMemo(() => date.getFullYear(), [date]);
    const month = useMemo(() => date.getMonth() + 1, [date]);
    const day = useMemo(() => date.getDate(), [date]);
    return (
        <div className="article-card d-flex flex-column">
            <div className="article-card__image-wrap mb-4">
                <img src={`${BASE_NAME}${frontmatter.image}`} alt={frontmatter.title} />
            </div>
            <div className="article-card__content flex-grow-1 d-flex flex-column flex-grow-1">
                <time className="article-card__date mb-1">{`${year}/${month}/${day}`}</time>
                <ul className="article-card__tags list-unstyled d-flex gap-2">
                    {frontmatter.tags.map((tag) => (
                        <li key={tag} className="article-card__tag text-primary fs-4 fw-medium">
                            #{tag}
                        </li>
                    ))}
                </ul>
                <h3 className="article-card__title fw-bold line-clamp-2">{frontmatter.title}</h3>
                <p className="article-card__description line-clamp-2">{frontmatter.description}</p>
                <Link
                    to={`/post/${id}`}
                    className="article-card__read-more d-inline-block w-fit px-4 py-2 text-decoration-none"
                >
                    閱讀內文
                </Link>
            </div>
        </div>
    );
}

export default ArticleCard;
