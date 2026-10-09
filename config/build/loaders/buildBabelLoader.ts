import babelRemoveProps from "../../babel/babelRemoveProps";
import { BuildOptions } from "../types/config";

interface BuildOptionsBabelLoader extends BuildOptions {
  isTsx: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildOptionsBabelLoader) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
          [
            "@babel/plugin-transform-typescript",
            {
              isTsx,
            },
          ],
          "@babel/plugin-transform-runtime",
          isTsx && [
            babelRemoveProps,
            {
              props: ["data-testid"],
            },
          ],
          isDev && "react-refresh/babel",
        ].filter(Boolean),
      },
    },
  };
}
