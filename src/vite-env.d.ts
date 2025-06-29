/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module "~react-pages" {
  import type { RouteObject } from "react-router-dom";
  const routes: RouteObject[];
  export default routes;
}
