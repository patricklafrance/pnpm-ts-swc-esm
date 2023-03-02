// @ts-check

// Can play with most of the important configuration option with the online playground: https://swc.rs/playground

/** @type {import("@swc/core").Config} */
export default {
    jsc: {
        parser: {
            syntax: "typescript",
            tsx: true
        },
        // The output environment that the code will be compiled for.
        target: "es2022",
        // View https://swc.rs/docs/configuration/minification for options.
        minify: {
            compress: true,
            mangle: true
        },
        transform: {
            react: {
                // Use "react/jsx-runtime".
                // TODO: Is it the default value? https://swc.rs/docs/configuration/compilation#jsctransformreactruntime
                runtime: "automatic",
                // Use the native "Object.assign()" instead of "_extends".
                // TODO: Is it the default value? https://swc.rs/docs/configuration/compilation#jsctransformreactusebuiltins
                useBuiltins: true,
                // Enable React experimental "fast-refresh" feature.
                // Also need to install @pmmmwh/react-refresh-webpack-plugin.
                refresh: true
            }
        },
        // Import shims from an external module rather than inlining them in bundle files to greatly reduce the bundles size.
        // Requires to add "@swc/helpers" as a project dependency
        externalHelpers: true,
        // Informs the compiler where to find modules.
        baseUrl: ".",
        // Same as TS paths to register aliases.
        paths: {
            "@root/*": ["src/*"]
        }
    },
    module: {
        // The output module resolution system that the code will be compiled for.
        type: "es6",
        // Prevent SWC from exporting the `__esModule` property.
        strict: true,
        // Preserve dynamic imports.
        ignoreDynamic: true
    }
};
