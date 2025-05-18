import PostInfo from "@/components/organisms/PostInfo";
import PostContent from "@/components/organisms/PostContent";
import BlogLinks from "@/components/organisms/BlogLinks";

function Post(): React.JSX.Element {
    return (
        <main>
            <PostInfo />
            <PostContent />
            <BlogLinks />
        </main>
    );
}

export default Post;
