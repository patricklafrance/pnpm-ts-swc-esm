import browserslist from "browserslist";
import { merge } from "lodash-es";

// If no browserslist file path is specified, it will search for a local ".browserslistrc" file.
export async function loadSwcConfig(swcConfigFilePath, { browserslistFilePath } = {}) {
    let swcConfig;

    try {
        swcConfig = (await import(swcConfigFilePath)).default;
    } catch {
        throw new Error(`Cannot find SWC config file at "${swcConfigFilePath}"`);
    }

    const browsers = browserslist(undefined, {
        path: browserslistFilePath
    });

    return merge(swcConfig, {
        env: {
            targets: browsers
        }
    });
}
