import clsx from "clsx";
import "./title.scss";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

function Title({ children, className, ...props }: TitleProps): React.JSX.Element {
    return (
        <h2 className={clsx("title fw-bold lh-base", className)} {...props}>
            {children}
        </h2>
    );
}

export default Title;
