require("dotenv").config()
const { NodeGlobalsPolyfillPlugin } = require("@esbuild-plugins/node-globals-polyfill")
const { NodeModulesPolyfillPlugin } = require("@esbuild-plugins/node-modules-polyfill")
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
  outdir: "public/js",
  define: {
    AVATAR_WEBKIT_AUTH_TOKEN: `\"${process.env.AVATAR_WEBKIT_AUTH_TOKEN}\"`,
  },
  plugins: [
    NodeGlobalsPolyfillPlugin({
      process: true,
    }),
    NodeModulesPolyfillPlugin(),
  ],
}

esbuild
  .serve(serveOptions, buildOptions)
  .then((server) => {
    console.log(`Server is running on http://${server.host}:${server.port}`)
  })
  .catch(() => process.exit(1))
