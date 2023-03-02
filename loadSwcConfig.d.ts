import type { Config } from "@swc/core";

interface LoadSwcConfigScriptOptions {
    browserslistFilePath: string;
}

export type LoadSwcConfigOptions = LoadSwcConfigScriptOptions;
export declare function loadSwcConfig(swcConfigFilePath: string, options?: LoadSwcConfigOptions): Promise<Config>;
export {};
