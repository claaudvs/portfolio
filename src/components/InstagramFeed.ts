import type { APIRoute } from "astro";

export const InstagramFeed = async () => {

    const IG_USER_ID = 24256380850683666;
    const ACCESS_TOKEN = 'IGAASlsCRthKFBZAE1ibGxRRE5pY1JzY2lUTjJTVXNNSnNpX2oyMkY0QkV4ZAFpzUm95Um9OTk5zd3FMZADhUVGZAXZAWJSZAXdVWWVscjlxMllsQjVWa2dGSDJ3RkdQTGNtd2VDbzhTTG5hNHhSTGFCczhIeU1ldFBuTlQ2QWlHdFBzQQZDZD';

    const url = `https://graph.facebook.com/v20.0/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp,thumbnail_url&limit=10&access_token=${ACCESS_TOKEN}`;

    const res = await fetch(url);
    if (!res.ok) {
        return new Response(JSON.stringify({ error: "Error al consultar Instagram" }), { status: 500 });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}