# Moezza website

Static Indonesian startup profile. Moezza is the startup and the name of its first Android chat app. Both names use two z characters, as confirmed by the owner.

## Run

Serve the `docs` directory with any static HTTP server. For example:

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory docs
```

Open http://127.0.0.1:4173. No build step or third-party frontend dependency is required. The site can also run from GitHub Pages configured to serve `docs`.

## Pages

- `docs/index.html`: Home, Product, Technology, About, Contact.
- `docs/models.html`: preserved model catalog with its original JSON and signature paths.
- `docs/styles.css`: responsive layout, palette, reduced-motion handling.
- `docs/app.js`: navigation, curated demo selection, local contact draft.

## Contact details

The About page shows owner-authorized dummy details: `halo@moezza.ai.org` and `+62 800 0000 0000`. Both are visibly marked as examples and have no `mailto:` or `tel:` link, because they are not confirmed active contact channels. The form prepares a downloadable draft; it does not submit messages.

Before publishing real contact actions, replace both examples with working addresses and update the contact form or remove it. Product availability, compatibility, legal identity, and company copy should also be reviewed by the owner.
