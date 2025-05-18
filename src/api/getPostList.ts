import { API_PREFIX } from "@/configs/global_configs";
import type { PostListResponse } from "@/types/post";
async function getPostList({
    page = "1",
    limit = "9",
    sort = "date",
    order = "desc",
    title = "",
    description = "",
    search = "",
    signal,
}: {
    page?: string;
    limit?: string;
    sort?: string;
    order?: string;
    title?: string;
    description?: string;
    search?: string;
    signal?: AbortSignal;
}) {
    const params = new URLSearchParams();
    params.set("page", page);
    params.set("limit", limit);
    params.set("sort", sort);
    params.set("order", order);
    if (title && title !== "") {
        params.set("title", title);
    }
    if (description && description !== "") {
        params.set("description", description);
    }
    if (search && search !== "") {
        params.set("search", search);
    }
    const response = await fetch(`${API_PREFIX}/post/list?${params.toString()}`, { signal });
    const data = (await response.json()) as PostListResponse;
    return data;
}

export default getPostList;
