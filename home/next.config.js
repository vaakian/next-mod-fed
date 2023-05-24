const ModuleFederationPlugin = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          // For remotes (please adjust)
          name: "home",
          filename: "static/runtime/remoteEntry.js",
          remotes: {
            user: "user@http://localhost:3001/_next/static/runtime/remoteEntry.js",
            home: "home@http://localhost:3000/_next/static/runtime/remoteEntry.js",
          },
          exposes: {
            // "./Button": "./components/Button",
          },
          extraOptions: {
            // exposePages: true
          },
          shared: {
            'shared': {
              singleton: true,
              requiredVersion: false,
            }
          }
          // shared: [
          //   'react',
          //   'react-dom',
          //   {
          //     packageName: 'shared',
          //     requiredVersion: require('../shared/package.json').version,
          //   },
          // ]
        })
      );
    }

    return config;
  },
}

module.exports = nextConfig
