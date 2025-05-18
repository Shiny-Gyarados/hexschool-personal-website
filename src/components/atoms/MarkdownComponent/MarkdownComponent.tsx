import { useMemo } from "react";
import useRemark from "@/hooks/useRemark";
import remarkGfm from "remark-gfm";
import themeLight from "shiki/dist/themes/one-light.mjs";
import themeDark from "shiki/dist/themes/one-dark-pro.mjs";
import { createHighlighter } from "shiki/bundle/web";
import rehypePrettyCode from "rehype-pretty-code";
import type { Options } from "rehype-pretty-code";

import type { Components } from "rehype-react";

function MarkdownComponent({
    rawMD,
    components,
    loadingSkeleton = <p>Parsing...</p>,
}: {
    rawMD: string;
    components?: Partial<Components>;
    loadingSkeleton?: React.ReactNode;
}): React.JSX.Element {
    const { content, isParsing } = useRemark({
        source: rawMD,
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: {
                        light: themeLight,
                        dark: themeDark,
                    },
                    getHighlighter: createHighlighter,
                    transformers: [
                        {
                            pre(node) {
                                node.properties.rawcontent = this.source;
                            },
                        },
                    ],
                } as Options,
            ],
        ],
        components,
    });
    const Content = useMemo(() => {
        if (content) {
            const Comp = () => {
                return content;
            };
            return Comp;
        } else {
            return () => null;
        }
    }, [content]);
    return <>{isParsing ? loadingSkeleton : content && <Content />}</>;
}

export default MarkdownComponent;
