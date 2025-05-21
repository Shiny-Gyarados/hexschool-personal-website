import "./article-card-skeleton.scss";

function ArticleCardSkeleton() {
    return (
        <div className="article-card d-flex flex-column placeholder-glow">
            <div className="article-card__image-wrap mb-4 placeholder rounded-2"></div>
            <div className="article-card__content flex-grow-1 d-flex flex-column flex-grow-1">
                <time className="article-card__date mb-1 placeholder rounded-2"></time>
                <ul className="article-card__tags list-unstyled d-flex gap-2">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <li
                            key={index}
                            className="article-card__tag text-primary fs-4 fw-medium placeholder d-inline-block w-25 rounded-2"
                        ></li>
                    ))}
                </ul>
                <h3 className="article-card__title fw-bold line-clamp-2 placeholder rounded-2"></h3>
                <p className="article-card__description line-clamp-2 placeholder rounded-2"></p>
                <a className="btn btn-gray disabled placeholder col-4" aria-disabled="true"></a>
            </div>
        </div>
    );
}

export default ArticleCardSkeleton;
