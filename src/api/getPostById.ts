import { API_PREFIX } from "@/configs/global_configs";
import type { PostResponse } from "@/types/post";

// 自定義錯誤類型，包含 status 屬性
class ApiError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

async function getPostById({ id }: { id: string }) {
    const response = await fetch(`${API_PREFIX}/post/article/${id}`);
    if (!response.ok) {
        if (response.status === 404) {
            throw new ApiError("Post not found", response.status);
        }
        throw new ApiError("Failed to fetch post", response.status);
    }
    const data = (await response.json()) as PostResponse;
    return data;
}

export default getPostById;
export { ApiError };
