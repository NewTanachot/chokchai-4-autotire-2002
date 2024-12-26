import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    // daisyUI config - (https://daisyui.com/docs/config/)
    daisyui: {
        themes: false,
    },
    plugins: [daisyui],
} satisfies Config;
