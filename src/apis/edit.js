import { BASE_URL } from "../constants/url";

export async function editBlog(data) {
    console.log(data)
    return await fetch(
        BASE_URL + "/blogs/edit/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data
            })
        }
    );
}