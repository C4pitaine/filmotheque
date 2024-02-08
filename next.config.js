module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "http",
                hostname: "placehold.it",
                port: "",
                pathname: "/**"
            },
        ],
    },
}