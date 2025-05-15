import "./banner-card.scss";

interface BannerCardProps {
    name: string;
    job: string;
}

function BannerCard({ name, job }: BannerCardProps): React.JSX.Element {
    return (
        <section className="container-fluid">
            <div className="banner-card row">
                <div className="col-12 col-md-6 px-0">
                    <div className="banner-card__avatar w-100 h-100"></div>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="banner-card__about">
                        <h1 className="banner-card__about-name text-primary fw-900 text-start lh-base mb-3 text-nowrap">
                            {name}
                        </h1>
                        <h2 className="banner-card__about-skills text-primary fs-3 fw-bold text-start lh-base mb-0">
                            {job}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerCard;
