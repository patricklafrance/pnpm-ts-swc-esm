# Getting Started

To start using this repository, first install [PNPM](https://pnpm.io/), then install the dependencies:

```bash
pnpm install
```

Start in dev mode with:

```
pnpm dev
```

Or build the production bundles:

```
pnpm build
```

# Lessons learned while building this POC

## PNPM troubleshooting

### Installation

Installed pnpm using Powershell with `iwr https://get.pnpm.io/install.ps1 -useb | iex` but pnpm wasn't reconized in VSCode terminal.

Haven't try installing pnpm globally with npm, should try that next time.

Meanwhile, I fixed it by copying `pnpm.exe` from `C:\Users\[USER]\AppData\Local\pnpm` to `C:\Program Files\nodejs`.

## SWC issues

### Shared browserslist config support

SWC cannot load browserslist config from an external package. More info in the following [issue](https://github.com/swc-project/swc/issues/3365).

It kind of makes sense before under the hood, SWC is using the [following package](https://github.com/browserslist/browserslist-rs#limitations) for browserslist support which as a limitation with external configuration package.

### Cannot extends SWC config

There no way to extend an SWC config file at the moment: https://github.com/swc-project/swc/issues/5654

### swc-loader options are not deeply merge

Given

```js
use: {
    loader: "swc-loader",
    options: {
        env: {
            targets: "last 1 year, > 0.2%, Firefox ESR, not dead, not op_mini all"
        }
    }
}
```

The whole `env` section of the `.swcrc` file will be overriden instead of strictly overriding the `targets` prop.

### React fast refresh

To make React fast refresh works when using `swc-loader`, Webpack must also be configured accordingly.

First activate fast refresh in SWC:

```js
jsc: {
    transform: {
        react: {
            refresh: true
        }
    }
}
```

Then, add fast refresh to Webpack:

```js
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

{
    devServer: {
        hot: true
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
}
```

## ESM

### Make TS and Webpack play well together

In `tsconfig.json`, set `"moduleResolution": "nodenext"`

In `webpack.config.js`, add:

```js
resolve: {
    // So Webpack can map ".js" extension files in import to their original file.
    // For more info, view https://github.com/webpack/webpack/issues/13252
    extensionAlias: {
        ".js": [".ts", ".tsx", ".js"]
    }
}
```
