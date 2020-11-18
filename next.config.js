module.exports = {
    async rewrites() {
        console.log(process.env)
        return [
            {
                source: "/:w*",
                destination: `${process.env.url}/:w*`
            },
            {
                source: "/",
                destination: `${process.env.url}/graphql`
            }
        ]
    }
}
