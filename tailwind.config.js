import { themes, twExtract } from "@dtewary/tw-polaris";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@dtewary/tw-polaris/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...twExtract.transformColorClasses(
          twExtract.reformattedColors(themes.light.color)
        ),
      },
      zIndex: {
        ...themes.light.zIndex,
      },
      borderRadius: twExtract.borderRadius(themes.light.border),
      borderWidth: twExtract.borderWidth(themes.light.border),
      boxShadow: {
        ...themes.light.shadow,
      },
      fontSize: twExtract.fontSizes(themes.light.font),
      fontWeight: twExtract.fontWeights(themes.light.font),
      letterSpacing: twExtract.fontLetterSpacings(themes.light.font),
      lineHeight: twExtract.fontLineHeights(themes.light.font),
      spacing: {
        ...themes.light.space,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 300ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
