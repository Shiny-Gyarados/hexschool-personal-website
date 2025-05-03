import HeaderLink from "@/components/atoms/HeaderLink";

const links = [
    {
        href: "/",
        name: "首頁",
    },
    {
        href: "/blog",
        name: "部落格",
    },
];

function HeaderNav(): React.JSX.Element {
    return (
        <nav>
            {links.map((link) => {
                return <HeaderLink key={link.href} href={link.href} name={link.name} />;
            })}
        </nav>
    );
}

export default HeaderNav;
