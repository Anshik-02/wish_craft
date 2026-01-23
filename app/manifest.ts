import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Wish Craft",
        short_name: "Wish Craft",
        description: "Personalized Birthday Greeting Cards",
        start_url: "/",
        display: "standalone",
        background_color: "#fff1f2",
        theme_color: "#fb7185",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
