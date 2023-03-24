import { BASE_URL } from "../constants/url";

export async function addBlog(data) {
    console.log(data)
    return await fetch(
        BASE_URL + "/blogs/all/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data
            })
        }
    );
}