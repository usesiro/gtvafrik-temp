import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    lightBlue: "#EEF1FD",
                    darkNavy: "#10224B",
                    vibrantBlue: "#0021C1",
                    yellow: "#FFC700",
                },
            },
            fontFamily: {
                gudlak: ["var(--font-gudlak)"],
                prompt: ["var(--font-prompt)"],
            },
        },
    },
    plugins: [],
};
export default config;