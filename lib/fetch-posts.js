export async function loadPosts() {
    const res = await fetch('api/data.js')
    const data = await res.json();

    return data;
}