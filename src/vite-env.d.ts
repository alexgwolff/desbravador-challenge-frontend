/// <reference types="vite/client" />
/// <reference types="react-dom" />

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
