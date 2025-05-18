import { API_PREFIX } from "@/configs/global_configs";
import type { PostResponse } from "@/types/post";

async function getPostById({ id }: { id: string }) {
    const response = await fetch(`${API_PREFIX}/post/article/${id}`);
    const data = (await response.json()) as PostResponse;
    return data;
}

export default getPostById;
