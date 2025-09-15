# TypeScript Sandbox

Quick Node + TypeScript sandbox using pnpm and tsx.

## Scripts
- dev: Run in watch mode
- start: Run once
- build: Type-check and emit JS to dist
- serve: Run built JS

## Try it
```sh
pnpm install
pnpm dev      # watch mode
# or
pnpm start    # run once

# build and run compiled JS
pnpm build
pnpm serve
```

## Notes
- Source files live in `src/` and compile to `dist/`.
- tsconfig targets Node, CommonJS modules.
- If you see an esbuild approve warning, run `pnpm approve-builds` (optional).