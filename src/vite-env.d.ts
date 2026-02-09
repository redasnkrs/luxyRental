/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}
