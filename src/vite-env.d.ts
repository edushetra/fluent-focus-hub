/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public PostHog API key */
  readonly VITE_PUBLIC_POSTHOG_KEY: string;
  /** Public PostHog host URL */
  readonly VITE_PUBLIC_POSTHOG_HOST: string;
  // add more environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}