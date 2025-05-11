import { API_PREFIX } from "@/configs/global_configs";
import type { PostListResponse } from "@/types/post";
async function getPostList({
    page = "1",
    limit = "9",
    sort = "date",
    order = "desc",
}: {
    page?: string;
    limit?: string;
    sort?: string;
    order?: string;
}) {
    const params = new URLSearchParams();
    params.set("page", page);
    params.set("limit", limit);
    params.set("sort", sort);
    params.set("order", order);
    const response = await fetch(`${API_PREFIX}/post/list?${params.toString()}`);
    const data = (await response.json()) as PostListResponse;
    return data;
}

export default getPostList;
