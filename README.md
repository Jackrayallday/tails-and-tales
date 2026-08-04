# Cards

A small React project for learning components, props, state, and eventually shop features.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run lint` checks the code with ESLint.

## Cloudflare R2 media

Artwork is stored in Cloudflare R2 and delivered from
`https://images.jackray.dev`. Original source images are intentionally excluded
from Git and the normal working tree.

Restore the ignored source workspace, regenerate responsive variants, upload
them, and verify the remote copy with:

```powershell
npm.cmd run media:download
npm.cmd run media:optimize
npm.cmd run media:upload
npm.cmd run media:verify
```

### Adding new photos

1. Restore the current source library before adding anything:

   ```powershell
   npm.cmd run media:download
   ```

2. Copy new source images into the appropriate ignored directory:

   ```text
   media-source/
   ├── artworks/<collection>/<series>/new-image.png
   ├── breeds/new-breed.png
   ├── collections/new-collection.png
   └── site/new-site-image.png
   ```

3. Optimize, upload, and verify the complete library:

   ```powershell
   npm.cmd run media:optimize
   npm.cmd run media:upload
   npm.cmd run media:verify
   ```

4. If the image represents a new artwork, breed, or collection, add its catalog
   information to the relevant file under `src/data/`. Uploading an image makes
   it available from R2, but does not automatically add a product to the site.

5. Run `npm.cmd run lint` and `npm.cmd run build` before committing.

After a successful upload and verification, `media-source/` and
`.cache/r2-assets/` may be deleted to reclaim local disk space. Both directories
are ignored by Git and can be regenerated. Never commit `.env.r2.local`; it
contains the private R2 credentials and is also ignored by Git.
