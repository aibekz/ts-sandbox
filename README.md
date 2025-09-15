# TypeScript Sandbox

Quick Node + TypeScript sandbox using pnpm and tsx.

## Scripts
Current npm scripts defined in `package.json`:

- `dev`   – Runs a one-off type check (`tsc --noEmit`) then starts `tsx` (you still need to supply an entry file when invoking, e.g. `pnpm dev src/index.ts`).
- `watch` – `tsx watch` (supply a file: `pnpm watch src/index.ts`) for fast on-change re-runs.
- `build` – Compiles TypeScript to `dist/`.
- `serve` – Runs the compiled output (`node dist/index.js`).
- `test` / `test:watch` / `test:coverage` – Vitest commands.

Note: A `start` script is NOT defined (earlier docs referenced it). Use `pnpm dev src/index.ts` for a quick run or add a `start` script if you prefer.

## Try it
```sh
pnpm install

# Run a file once (type check first)
pnpm dev src/index.ts

# Watch a file and re-run on save
pnpm watch src/index.ts

# Build all to dist/ then run
pnpm build
pnpm serve
```

### Run any TypeScript file (DRY)
```sh
# one-off run (type check then execute)
pnpm dev src/arrays.ts
pnpm dev src/alias-interfaces.ts

# watch a file (fast incremental restarts)
pnpm watch src/arrays.ts
```

## Testing
Run unit tests with Vitest:
```sh
pnpm test          # run once
pnpm test:watch    # watch mode
pnpm test:coverage # with coverage
```

## Notes
- Source files live in `src/` and compile to `dist/`.
- `tsconfig.json` currently targets Node + CommonJS.
- You can add a `start` script like `"start": "tsx src/index.ts"` if desired.
- Consider adding ESLint/Prettier if this grows beyond a sandbox.
- If you see an esbuild approve warning, run `pnpm approve-builds` (optional).