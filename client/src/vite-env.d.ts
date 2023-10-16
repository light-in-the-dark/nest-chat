/// <reference types="vite/client" />

interface Window {
  clearMessages: () => void;
}

interface ImportMetaEnv {
  readonly VITE_SERVER_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}