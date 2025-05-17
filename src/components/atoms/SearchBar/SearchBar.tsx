import { useState, useEffect } from "react";
import SearchSVG from "@/components/atoms/SearchSVG";
import clsx from "clsx";
import "./search-bar.scss";

interface SearchBarProps {
    placeholder?: string;
    className?: string;
    svgClassName?: string;
    inputClassName?: string;
    value?: string;
    onChange?: (value: string) => void;
}

function SearchBar({
    placeholder = "搜尋你感興趣的文章",
    className,
    svgClassName,
    inputClassName,
    value,
    onChange,
}: SearchBarProps) {
    const [inputValue, setInputValue] = useState(value ?? "");

    useEffect(() => {
        setInputValue(value ?? "");
    }, [value]);

    return (
        <div className={clsx("search-bar text-gray px-4 d-flex align-items-center overflow-hidden", className)}>
            <SearchSVG className={svgClassName} />
            <input
                type="text"
                placeholder={placeholder}
                className={clsx("search-bar__input fs-6 fw-medium w-100", inputClassName)}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    onChange?.(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchBar;
