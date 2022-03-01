require("dotenv").config()
const { NodeGlobalsPolyfillPlugin } = require("@esbuild-plugins/node-globals-polyfill")
const { NodeModulesPolyfillPlugin } = require("@esbuild-plugins/node-modules-polyfill")

require("esbuild")
  .serve(
    {
      servedir: "public",
    },
    {
      entryPoints: ["main.js"],
      format: "esm",
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
  )
  .then((server) => {
    console.log(`Server is running on http://${server.host}:${server.port}`)
  })
  .catch(() => process.exit(1))
