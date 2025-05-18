import { Link } from "react-router-dom";
import clsx from "clsx";
import "./read-more-link.scss";
// types
import type { ComponentProps, ReactNode, CSSProperties } from "react";

interface ReadMoreLinkProps extends ComponentProps<"a"> {
    href?: string;
    children?: ReactNode;
    mainColor?: string;
    isLink?: boolean;
    textColor?: string;
}

function ReadMoreLink({
    href = "#",
    children,
    target = "_blank",
    rel = "noopener noreferrer",
    className,
    mainColor = "#000",
    textColor = "#4b4b4b",
    isLink = true,
    ...rest
}: ReadMoreLinkProps) {
    if (isLink) {
        return href.startsWith("http") ? (
            <a
                href={href}
                className={clsx("read-more-link", className)}
                style={{ "--main-color": mainColor, "--text-color": textColor } as CSSProperties}
                target={target}
                rel={rel}
                {...rest}
            >
                {children}
            </a>
        ) : (
            <Link
                to={href}
                className={clsx("read-more-link", className)}
                style={{ "--main-color": mainColor, "--text-color": textColor } as CSSProperties}
                {...rest}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <span
                className={clsx("read-more-link", className)}
                style={{ "--main-color": mainColor, "--text-color": textColor } as CSSProperties}
                {...rest}
            >
                {children}
            </span>
        );
    }
}

export default ReadMoreLink;
