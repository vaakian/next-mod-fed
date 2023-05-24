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
          name: "user",
          filename: "static/runtime/remoteEntry.js",
          remotes: {
            user: "user@http://localhost:3001/_next/static/runtime/remoteEntry.js",
            home: "home@http://localhost:3000/_next/static/runtime/remoteEntry.js",
          },
          exposes: {
            // './pages': './components/card',
            // "./Button": "./components/Button",
          },
          extraOptions: {
            exposePages: true
          },
          shared: {
            
            'shared': {
              singleton: true,
              requiredVersion: false,
            }
          }
        })
      );
    }

    return config;
  }
}

module.exports = nextConfig
