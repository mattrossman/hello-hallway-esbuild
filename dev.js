require("dotenv").config()
const esbuild = require("esbuild")

/** @type {esbuild.ServeOptions} */
const serveOptions = {
  servedir: "public",
  port: 3000,
}

/** @type {esbuild.BuildOptions} */
const buildOptions = {
  entryPoints: ["main.js"],
  bundle: true,
  format: "esm",
  outdir: "public/js",
  define: {
    AVATAR_WEBKIT_AUTH_TOKEN: `\"${process.env.AVATAR_WEBKIT_AUTH_TOKEN}\"`,
  },
}

esbuild
  .serve(serveOptions, buildOptions)
  .then((server) => {
    console.log(`Server is running on http://${server.host}:${server.port}`)
  })
  .catch(() => process.exit(1))
