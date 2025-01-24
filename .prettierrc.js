// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    useTabs: true,
    singleQuote: true,
    trailingComma: "none",
    printWidth: 100,
    plugins: [
        "prettier-plugin-svelte",
        "prettier-plugin-tailwindcss"
    ],
    overrides: [
        {
            files: "**/*.svelte",
            options: {
                parser: "svelte"
            }
        }
    ],
    tailwindFunctions: [
        "tv"
    ]
}

export default config;