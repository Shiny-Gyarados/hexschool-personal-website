import { useState, useMemo, useEffect } from "react";
import clsx from "clsx";
import { BASE_NAME } from "@/configs/global_configs";
import "./pagination.scss";

interface PaginationProps {
    currentPage?: number;
    totalPages: number;
    maxDisplayedPages?: number;
    onPageChange?: (page: number) => void;
}

function Pagination({ currentPage = 1, totalPages, maxDisplayedPages = 5, onPageChange }: PaginationProps) {
    const [pageNumber, setPageNumber] = useState(currentPage ?? 1);

    const handlePageChange = (page: number) => () => {
        if (page < 1 || page > totalPages || page === pageNumber) return;
        setPageNumber(page);
        onPageChange?.(page);
    };

    const pageNumbers = useMemo(() => {
        const halfMaxPages = Math.floor(maxDisplayedPages / 2);
        const startPage = Math.max(1, Math.min(pageNumber - halfMaxPages, totalPages - maxDisplayedPages + 1));
        const endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);
        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    }, [pageNumber, totalPages, maxDisplayedPages]);

    useEffect(() => {
        setPageNumber(currentPage ?? 1);
    }, [currentPage]);

    return (
        <div className="pagination bg-white d-flex align-items-center">
            <button className="pagination__prev" onClick={handlePageChange(pageNumber - 1)} disabled={pageNumber <= 1}>
                <img src={`${BASE_NAME}/pagination-left.svg`} alt="previous page" />
            </button>
            <ul className="pagination__list d-flex justify-content-center list-unstyled mb-0">
                {pageNumbers.map((page: number, index) => {
                    const showEllipsis =
                        (index === 0 && page !== 1) || (index === pageNumbers.length - 1 && page !== totalPages);
                    return (
                        <li key={page} className="pagination__item">
                            <button
                                className={clsx("pagination__link fw-medium text-decoration-none", {
                                    "text-primary": page === pageNumber,
                                })}
                                onClick={handlePageChange(page)}
                                disabled={showEllipsis}
                            >
                                {showEllipsis ? "..." : page}
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button
                className="pagination__next"
                onClick={handlePageChange(pageNumber + 1)}
                disabled={pageNumber >= totalPages}
            >
                <img src={`${BASE_NAME}/pagination-right.svg`} alt="next page" />
            </button>
        </div>
    );
}

export default Pagination;
