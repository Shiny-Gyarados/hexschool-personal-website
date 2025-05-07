import Title from "@/components/atoms/Title";
import "./blog-top-picks.scss";

function BlogTopPicks(): React.JSX.Element {
    return (
        <section className="blog-top-picks">
            <div className="container">
                <Title className="mb-6">部落格精選</Title>
            </div>
        </section>
    );
}

export default BlogTopPicks;
