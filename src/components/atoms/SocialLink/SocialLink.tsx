import "./social-link.scss";

interface SocialLinkProps {
    href?: string;
    imgSrc: string;
    imgAlt: string;
    isLink?: boolean;
}

function SocialLink({ href, imgSrc, imgAlt, isLink = true }: SocialLinkProps): React.JSX.Element {
    return (
        <>
            {isLink ? (
                <a href={href} className="social-link d-inline-block" target="_blank" rel="noopener noreferrer">
                    <img src={imgSrc} alt={imgAlt} className="d-inline-block" />
                </a>
            ) : (
                <span className="social-link d-inline-block">
                    <img src={imgSrc} alt={imgAlt} className="d-inline-block" />
                </span>
            )}
        </>
    );
}

export default SocialLink;
