import type { Response } from "@/types/common";

export interface PostInfo {
    id: number;
    frontmatter: {
        category: string;
        date: string;
        description: string;
        image: string;
        language: string;
        tags: string[];
        title: string;
    };
}

export interface Post extends PostInfo {
    content: string;
}

export interface Pagination {
    currentPage: number;
    limit: number;
    total: number;
    totalPages: number;
}

export interface PostListResponse extends Response<PostInfo[]> {
    pagination: Pagination;
}

export type PostResponse = Response<Post>;
