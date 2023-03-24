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

export async function deleteBlog(id) {
    return await fetch(
        BASE_URL + "/blogs/delete/?id=" + id,
        {
            method: "GET",
        }
    );
}