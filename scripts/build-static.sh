#!/usr/bin/env bash
# Static production export of the whole site for Netlify (index allowed, canonical www.luminexwindow.com).
# Usage: make_launch.sh [production|preview]
set -euo pipefail
MODE=${1:-production}
W=/home/claude/work; EX=$W/export-$MODE
rm -rf "$EX" && mkdir -p "$EX"
cd /home/claude/luminex
tar --exclude=.git --exclude=.next --exclude=node_modules --exclude=out -cf - . | tar -xf - -C "$EX"
ln -s /home/claude/luminex/node_modules "$EX/node_modules"
cd "$EX"
rm -rf app/api app/preview/page.tsx app/preview/layout.tsx
find app/preview -name 'page.tsx' -delete
cat > next.config.mjs <<'CFG'
/** @type {import("next").NextConfig} */
// Static export with responsive WebP images made at build time (next-image-export-optimizer),
// because static hosting (MilesWeb, Netlify Drop) has no image server.
export default {
  output: "export",
  images: { loader: "custom", imageSizes: [64, 128, 256, 384], deviceSizes: [480, 640, 828, 1080, 1440, 1920] },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "72",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "false",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
};
CFG
rm -f next.config.js next.config.ts
if [ "$MODE" = production ]; then export NEXT_PUBLIC_SITE_ENV=production; fi
# GA4: pass NEXT_PUBLIC_GA_ID=G-XXXX when running this script to switch tracking on.
npx next build > build.log 2>&1 || { tail -40 build.log; exit 1; }
npx next-image-export-optimizer > optimize.log 2>&1 || { tail -30 optimize.log; exit 1; }
NAME=Luminex-site; [ "$MODE" = production ] && NAME=Luminex-live-site
cp /home/claude/luminex/scripts/next-static.htaccess out/_next/static/.htaccess
rm -rf $W/$NAME $W/$NAME.zip; cp -r out $W/$NAME
cd $W/$NAME && zip -qr -X ../$NAME.zip . && cd $W && ls -la $NAME.zip
