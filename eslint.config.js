// eslint.config.js
import sveltePlugin from "eslint-plugin-perfectionist";
import perfectionist from "eslint-plugin-perfectionist";

export default [
    sveltePlugin.configs['flat/recommended'],
    perfectionist.configs['recommended-natural'],
]