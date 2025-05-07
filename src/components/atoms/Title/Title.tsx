import "./title.scss";

interface TitleProps {
    children: React.ReactNode;
}

function Title({ children }: TitleProps): React.JSX.Element {
    return <h2 className="title fw-bold lh-base">{children}</h2>;
}

export default Title;
