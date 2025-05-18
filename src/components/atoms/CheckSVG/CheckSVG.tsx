import type { ComponentProps } from "react";

function CheckSVG({ size = 24, ...rest }: ComponentProps<"svg"> & { size?: number }): React.JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...rest}
        >
            <path d="M20 6 9 17l-5-5"></path>
        </svg>
    );
}

export default CheckSVG;
