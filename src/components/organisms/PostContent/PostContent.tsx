import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MarkdownComponent from "@/components/atoms/MarkdownComponent";
import CodeBlockCopyButton from "@/components/atoms/CodeBlockCopyButton";
import { BASE_NAME } from "@/configs/global_configs";
import getPostById from "@/api/getPostById";
import ReadMoreLink from "@/components/atoms/ReadMoreLink";
import type { Components } from "rehype-react";
import { ReactElement } from "react";
import "./post-content.scss";

type MDSingleChildren = ReactElement<{ "data-language"?: string; rawcontent?: string }>;

const MDXComponents: Partial<Components> = {
    h1: (props) => <h1 {...props} className="fs-2 fw-bold text-primary mb-6 mt-9" />,
    h2: (props) => <h2 {...props} className="fs-3 fw-bold text-primary mb-6 mt-9" />,
    h3: (props) => <h3 {...props} className="fs-5 fw-bold mb-3 mt-6" />,
    h4: (props) => <h4 {...props} className="fs-6 fw-bold mb-2 mt-4" />,
    h5: (props) => <h5 {...props} className="fs-6 fw-medium mb-2 mt-4" />,
    h6: (props) => <h6 {...props} className="fs-6 fw-medium mb-2 mt-4" />,
    p: (props) => <p {...props} className="mb-2 text-black" />,
    ul: (props) => <ul {...props} className="my-4" />,
    ol: (props) => <ol {...props} className="mb-4" />,
    li: (props) => <li {...props} className="post-li mb-0 text-black" />,
    a: (props) => (
        <a {...props} className="text-primary text-decoration-none fw-medium" target="_blank" rel="noreferrer" />
    ),
    blockquote: (props) => (
        <blockquote {...props} className="post-blockquote p-6 my-6 post-bg-gray fs-6 fw-bold post-blockquote-rounded" />
    ),
    img: (props) => (
        <img
            src={props.src ? `${BASE_NAME}${props.src}` : ""}
            alt={props.alt || ""}
            className="d-block w-100 mt-12 mb-6"
        />
    ),
    pre: (props) => {
        return (
            <div className="position-relative">
                <pre className="overflow-auto rounded-1 rounded-top-0 post-code-block">
                    <div className="post-code-block__content-wrap">{props.children}</div>
                </pre>
            </div>
        );
    },
    code: (props) => {
        const isInline = typeof props.children === "string";
        if (isInline) {
            return <code {...props} className="post-code" />;
        }
        return <code {...props} />;
    },
    figure: (props) => {
        const { children, ...rest } = props;
        const hasTitle = Array.isArray(children);
        const title = hasTitle ? (children?.[0]?.props?.children ?? "") : "";
        const language = hasTitle
            ? (children?.[1]?.props?.["data-language"] ?? "")
            : ((children as MDSingleChildren)?.props?.["data-language"] ?? "");
        const copyButtonContent = hasTitle
            ? (children?.[1]?.props?.rawcontent ?? "")
            : ((children as MDSingleChildren)?.props?.rawcontent ?? "");
        return (
            <figure {...rest} className="my-4">
                <figcaption className="post-figcaption d-flex align-items-center justify-content-between rounded-1 rounded-bottom-0  px-4 py-2">
                    <span className="post-figcaption__title">{title}</span>
                    <div className="d-flex align-items-center gap-2">
                        <span className="post-figcaption__language">
                            {language === "plaintext" || language === "text" ? "" : language}
                        </span>
                        <CodeBlockCopyButton textToCopy={copyButtonContent} />
                    </div>
                </figcaption>
                {children}
            </figure>
        );
    },
    figcaption: () => null,
};

function PostContent(): React.JSX.Element {
    const { id } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id],
        queryFn: () => getPostById({ id: id ?? "-1" }),
        select: (data) => data.data,
    });
    return (
        <section className="post-content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-9 col-xl-6">
                        <article className="post-content__article">
                            {data?.content && <MarkdownComponent rawMD={data?.content} components={MDXComponents} />}
                        </article>
                        <div className="post-content__article-footer d-flex justify-content-between">
                            <ReadMoreLink
                                className="d-flex align-items-center gap-1"
                                href={
                                    id && !Number.isNaN(parseInt(id))
                                        ? `/post/${parseInt(id) - 1 < 1 ? 1 : parseInt(id) - 1}`
                                        : "/post/1"
                                }
                            >
                                <div className="post-content__article-footer__prev d-flex align-items-center justify-content-center">
                                    <img src={`${BASE_NAME}/pagination-left.svg`} alt="previous page" />
                                </div>
                                上一篇
                            </ReadMoreLink>
                            <ReadMoreLink
                                className="d-flex align-items-center gap-1"
                                href={id && !Number.isNaN(parseInt(id)) ? `/post/${parseInt(id) + 1}` : "/post/1"}
                            >
                                下一篇
                                <div className="post-content__article-footer__next d-flex align-items-center justify-content-center">
                                    <img src={`${BASE_NAME}/pagination-right.svg`} alt="next page" />
                                </div>
                            </ReadMoreLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostContent;
