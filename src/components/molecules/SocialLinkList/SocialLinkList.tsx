import SocialLink from "@/components/atoms/SocialLink";

interface SocialLinkItem {
    href: string;
    imgSrc: string;
    imgAlt: string;
}

interface SocialLinkListProps {
    links: SocialLinkItem[];
}

function SocialLinkList({ links }: SocialLinkListProps): React.JSX.Element {
    return (
        <ul className="social-link-list d-flex list-unstyled gap-1 mb-0">
            {links.map((link) => (
                <li key={link.href}>
                    <SocialLink href={link.href} imgSrc={link.imgSrc} imgAlt={link.imgAlt} />
                </li>
            ))}
        </ul>
    );
}

export default SocialLinkList;
