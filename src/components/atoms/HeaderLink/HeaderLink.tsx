import { Link } from "react-router-dom";
import "./header-link.scss";

interface HeaderLinkProps {
    href?: string;
    name?: string;
}

function HeaderLink({ href = "#", name = "" }: HeaderLinkProps): React.JSX.Element {
    return (
        <Link
            to={href}
            className="header__link d-inline-block px-5 fs-3 text-decoration-none text-black fw-bold align-content-center"
        >
            {name}
        </Link>
    );
}

export default HeaderLink;
