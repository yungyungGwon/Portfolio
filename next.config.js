const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*?)',
            headers: [
              {
                key: 'Cross-Origin-Embedder-Policy',
                value: 'require-corp',
              },
              {
                key: 'Cross-Origin-Opener-Policy',
                value: 'same-origin',
              },
            ],
          },
        ]
      },

      // Set for server info hide
      poweredByHeader: false,
      // Set loader and plugin
      webpack: (config, options) =>
      {
          config.module.rules.push(
              {
                  test: /\.js$/,
                  use: [{
                      loader: 'babel-loader'
                  }],
                  exclude: /node_modules/
              },
              {
                  test: /\.[ts | tsx]$/,
                  use: [{
                      loader: 'ts-loader',
                      options: {
                          configFile: './tsconfig.json'
                      }
                  }],
                  exclude: /node_modules/
              }
          );

          const { dev, isServer } = options
          if (dev && isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin())
          }

          config.resolve.fallback = {
              ...config.resolve.fallback,
              fs: false,
              perf_hooks: false,
              worker_threads: false
          };
  
          config.experiments = { ...config.experiments, asyncWebAssembly: true }
          return config;
      },
      // Set code style tool
      eslint: {
          dirs: ['src']
      },

    // Set styled-component
    compiler: {
        styledComponents: true,
    },
}
module.exports = nextConfig