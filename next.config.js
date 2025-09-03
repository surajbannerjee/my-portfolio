const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;

    return {
        images: {
            remotePatterns: [new URL("https://suraj-banerjee.vercel.app/**")],
        },
        env: {
            BASE_URL: isDev ? "http://localhost:3000" : "https://suraj-banerjee.vercel.app/",
        },
        assetPrefix: isDev ? "http://localhost:3000" : "https://suraj-banerjee.vercel.app/",
    };
};
