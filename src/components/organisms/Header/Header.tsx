import HeaderNav from "@/components/molecules/HeaderNav";

function Header(): React.JSX.Element {
    return (
        <header className="sticky-top d-flex justify-content-center bg-body">
            <HeaderNav />
        </header>
    );
}

export default Header;
