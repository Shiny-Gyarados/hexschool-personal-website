import PostInfo from "@/components/organisms/PostInfo";
import BlogLinks from "@/components/organisms/BlogLinks";

function Post(): React.JSX.Element {
    return (
        <main>
            <PostInfo />
            <BlogLinks />
        </main>
    );
}

export default Post;
