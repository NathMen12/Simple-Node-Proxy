const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
    "/",
    createProxyMiddleware({
        target: "https://tools.gamingserver.fr", 
        changeOrigin: true,
        followRedirects: true,
        cookieDomainRewrite: "", 
    }),
);

app.listen(3000, () => {
    console.log("Proxy actif sur le port 3000");
});
