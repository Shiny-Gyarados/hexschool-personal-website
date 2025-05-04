import "./social-link.scss";

interface SocialLinkProps {
    href: string;
    imgSrc: string;
    imgAlt: string;
}

function SocialLink({ href, imgSrc, imgAlt }: SocialLinkProps): React.JSX.Element {
    return (
        <a href={href} className="social-link d-inline-block" target="_blank" rel="noopener noreferrer">
            <img src={imgSrc} alt={imgAlt} className="d-inline-block" />
        </a>
    );
}

export default SocialLink;
