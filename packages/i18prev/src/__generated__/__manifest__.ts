export default {
  "name": "@i18prev/i18prev",
  "type": "module",
  "version": "0.0.0",
  "private": false,
  "description": "",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/ahrjarrett/i18prev.git",
    "directory": "packages/i18prev"
  },
  "bugs": {
    "url": "https://github.com/ahrjarrett/i18prev/issues",
    "email": "ahrjarrett@gmail.com"
  },
  "@i18prev": {
    "generateExports": {
      "include": ["**/*.ts"]
    },
    "generateIndex": {
      "include": ["**/*.ts"]
    }
  },
  "publishConfig": {
    "access": "public",
    "directory": "dist",
    "registry": "https://registry.npmjs.org"
  },
  "scripts": {
    "bench": "echo NOTHING TO BENCH",
    "build": "pnpm build:esm && pnpm build:cjs && pnpm build:annotate",
    "build:annotate": "babel build --plugins annotate-pure-calls --out-dir build --source-maps",
    "build:esm": "tsc -b tsconfig.build.json",
    "build:cjs": "babel build/esm --plugins @babel/transform-export-namespace-from --plugins @babel/transform-modules-commonjs --out-dir build/cjs --source-maps",
    "check": "tsc -b tsconfig.json",
    "clean": "pnpm run \"/^clean:.*/\"",
    "clean:build": "rm -rf .tsbuildinfo dist build",
    "clean:deps": "rm -rf node_modules",
    "test": "vitest"
  },
  "devDependencies": {
    "@arktype/attest": "catalog:",
    "fast-check": "catalog:",
    "i18next": "catalog:"
  },
  "peerDependencies": {
    "i18next": "23 - 25"
  },
  "peerDependenciesMeta": {
    "i18next": {
      "optional": false
    }
  }
} as const