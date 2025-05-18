import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header-link.scss";

interface HeaderLinkProps {
    href?: string;
    name?: string;
}

function HeaderLink({ href = "#", name = "" }: HeaderLinkProps): React.JSX.Element {
    const { search, pathname } = useLocation();
    const link = useMemo(() => {
        if (href.startsWith("/blog")) {
            return `${href}${search}`;
        }
        return href;
    }, [href, search]);

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        if (href.startsWith("/blog") && pathname === "/blog") {
            e.preventDefault();
        }
    }

    return (
        <Link
            to={link}
            className="header__link d-inline-block px-5 fs-3 text-decoration-none text-black fw-bold align-content-center"
            onClick={handleClick}
        >
            {name}
        </Link>
    );
}

export default HeaderLink;
