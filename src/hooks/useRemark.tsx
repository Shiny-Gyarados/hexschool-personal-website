import { useCallback, useState, useEffect } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import rehypeReact, { type Options as RehypeReactOptions } from "rehype-react";
import remarkParse, { type Options as RemarkParseOptions } from "remark-parse";
import remarkRehype, { type Options as RemarkRehypeOptions } from "remark-rehype";
import { VFile } from "vfile";
import type { Components } from "rehype-react";
import { matter } from "vfile-matter";
import { unified, type PluggableList } from "unified";

export interface UseRemarkOptions {
    remarkParseOptions?: RemarkParseOptions;
    remarkPlugins?: PluggableList;
    remarkRehypeOptions?: RemarkRehypeOptions;
    rehypePlugins?: PluggableList;
    rehypeReactOptions?: Pick<RehypeReactOptions, "components">;
    components?: Partial<Components>;
    source?: string;
    onError?: (err: Error) => void;
}

export default function useRemark<TFrontmatter = Record<string, unknown>>({
    remarkParseOptions,
    remarkPlugins = [],
    remarkRehypeOptions,
    rehypePlugins = [],
    rehypeReactOptions,
    components = {},
    source = "",
    onError = () => {},
}: UseRemarkOptions = {}) {
    const [content, setContent] = useState<React.ReactElement | null>(null);
    const [fontmatter, setFontmatter] = useState<TFrontmatter | null>(null);
    const [isParsing, setIsParsing] = useState<boolean>(false);

    const setMarkdown = useCallback(
        (source: string) => {
            setIsParsing(true);
            const vfile = new VFile(source);
            matter(vfile, { strip: true });
            const frontmatter = (vfile.data.matter ?? {}) as TFrontmatter;
            unified()
                .use(remarkParse, remarkParseOptions)
                .use(remarkPlugins)
                .use(remarkRehype, remarkRehypeOptions)
                .use(rehypePlugins)
                .use(rehypeReact, {
                    // html to react elements
                    ...rehypeReactOptions,
                    Fragment: Fragment,
                    jsx: jsx,
                    jsxs: jsxs,
                    components,
                } satisfies RehypeReactOptions)
                .process(vfile.value)
                .then((vfile: VFile) => {
                    setContent(vfile.result as React.ReactElement);
                    setFontmatter(frontmatter);
                })
                .catch(onError)
                .finally(() => {
                    setIsParsing(false);
                });
        },
        [components, onError, rehypePlugins, rehypeReactOptions, remarkParseOptions, remarkPlugins, remarkRehypeOptions]
    );

    useEffect(() => {
        setMarkdown(source);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [source]);

    return { content, fontmatter, isParsing, setMarkdown };
}
