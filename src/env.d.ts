// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

// Fragment is provided globally by Astro JSX runtime
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Fragment: any;
}
