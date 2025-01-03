declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.pgf';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare const __IS_DEV__: boolean;
declare const __API__: string;
