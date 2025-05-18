import SocialLinkList from "@/components/molecules/SocialLinkList";
import { sharingLinks } from "@/configs/sharing_config";
import "./blog-links.scss";

function BlogLinks(): React.JSX.Element {
    return (
        <section className="blog-links">
            <div className="container">
                <div className="row">
                    <div className="col flex-grow-1">
                        <a
                            href="mailto:alysewang@hexschool.com"
                            className="fs-2 fw-medium text-decoration-none text-black"
                        >
                            alysewang@hexschool.com
                        </a>
                    </div>
                    <div className="col flex-grow-0 flex-shrink-0">
                        <div className="h-100 align-content-center">
                            <SocialLinkList links={sharingLinks} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogLinks;
