import BlogBanner from "@/components/organisms/BlogBanner";
import LatestPost from "@/components/organisms/LatestPost";
import BlogList from "@/components/organisms/BlogList";
import BlogLinks from "@/components/organisms/BlogLinks";

function Blog(): React.JSX.Element {
    return (
        <main>
            <BlogBanner />
            <LatestPost />
            <BlogList />
            <BlogLinks />
        </main>
    );
}

export default Blog;
