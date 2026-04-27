import type { NextConfig } from "next"
import path from "node:path"

// Pin Turbopack to this app. Otherwise Next may pick a parent lockfile
// (e.g. ~/pnpm-lock.yaml) and use the wrong root, which can hang or break dev.
const projectRoot = path.resolve(".")

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
