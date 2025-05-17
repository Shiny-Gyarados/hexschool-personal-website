import BlogBanner from "@/components/organisms/BlogBanner";
import LatestPost from "@/components/organisms/LatestPost";
import BlogList from "@/components/organisms/BlogList";

function Blog() {
    return (
        <main>
            <BlogBanner />
            <LatestPost />
            <BlogList />
        </main>
    );
}

export default Blog;
