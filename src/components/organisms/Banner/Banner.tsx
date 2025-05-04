import "./banner.scss";

function Banner(): React.JSX.Element {
    return (
        <section className="container-fluid">
            <div className="banner row">
                <div className="col-12 col-md-6 px-0">
                    <div className="banner__avatar w-100 h-100"></div>
                </div>
                <div className="col-12 col-md-6 px-0">
                    <div className="banner__about">
                        <h1 className="banner__about-name text-primary fw-900 text-start lh-base mb-3 text-nowrap">
                            Alyse Wang
                        </h1>
                        <h2 className="banner__about-skills text-primary fs-3 fw-bold text-start lh-base mb-0">
                            前端工程師 & 職涯諮詢師
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
