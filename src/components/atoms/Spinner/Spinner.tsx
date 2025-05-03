import clsx from "clsx";

interface SpinnerProps {
    isBlackScreenEnabled?: boolean;
}

function Spinner({ isBlackScreenEnabled = false }: SpinnerProps): React.JSX.Element {
    return (
        <div
            className={clsx(
                "position-fixed d-flex top-0 start-0 w-100 vh-100 justify-content-center align-items-center",
                {
                    "bg-black": isBlackScreenEnabled,
                    "bg-opacity-50": isBlackScreenEnabled,
                }
            )}
        >
            <div
                className={clsx("spinner-border", {
                    "text-light": isBlackScreenEnabled,
                    "text-secondary": !isBlackScreenEnabled,
                })}
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
