import { Link } from "react-router-dom";
import clsx from "clsx";
import "./read-more-link.scss";
// types
import type { ComponentProps, ReactNode } from "react";

interface ReadMoreLinkProps extends ComponentProps<"a"> {
    href?: string;
    children?: ReactNode;
}

function ReadMoreLink({
    href = "#",
    children,
    target = "_blank",
    rel = "noopener noreferrer",
    className,
    ...rest
}: ReadMoreLinkProps) {
    return href.startsWith("http") ? (
        <a href={href} className={clsx("read-more-link", className)} target={target} rel={rel} {...rest}>
            {children}
        </a>
    ) : (
        <Link to={href} className={clsx("read-more-link", className)} {...rest}>
            {children}
        </Link>
    );
}

export default ReadMoreLink;
