module.exports = {
    async rewrites() {
        return [
            {
                source: "/:w*",
                destination: `${process.env.url}/:w*`
            },
            {
                source: "/",
                destination: `${process.env.url}/`
            }
        ]
    }
}