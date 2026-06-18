# Elden Ring — Boss Archive

An interactive, **unofficial fan-made** archive of the bosses of the Lands Between. Browse lore, weaknesses, rewards and difficulty ratings, hunt bosses on an interactive map, take on a rotating daily challenge, and track which foes you've felled — all in a single static page, no build step required.

![Elden Ring Boss Archive](assets/og-image.jpg)

> ⚔️ *Unofficial fan project. Not affiliated with or endorsed by FromSoftware or Bandai Namco.*

## ✨ Features

- **Boss compendium** — every base-game and Shadow of the Erdtree boss with lore, weaknesses & strategy, rewards, region and difficulty.
- **Search, filter & sort** — by name, region, difficulty, and Main Game / DLC.
- **Interactive map** — pan/zoom map of the Lands Between, the Underground, and the Land of Shadow with clickable boss pins.
- **Daily Challenge** — a featured boss that rotates every day with a live countdown, and a "Defeated" stamp once you beat it.
- **Progress tracking** — mark bosses as defeated; progress is saved in your browser (`localStorage`) and shown as a completion meter.
- **Rotating hero gallery** — cinematic boss art with crossfade + Ken-Burns motion.
- **Atmosphere** — drifting ember particles, hero parallax, scroll reveals, optional UI sound, and keyboard shortcuts.
- **Accessible & responsive** — mobile hamburger nav, and full `prefers-reduced-motion` support.
- **A couple of secrets** — for those who explore. 👑

## ⌨️ Keyboard shortcuts

`/` focus search · `R` random boss · `G` bosses · `M` map · `T` Main/DLC · `?` shortcuts · `Esc` close

## 🚀 View it

**Live:** `https://USERNAME.github.io/REPO/` *(update after enabling GitHub Pages)*

**Run locally** — it's a static site, so any of these work:

```bash
# Option 1: just open it
open index.html        # or double-click the file

# Option 2: a quick local server (recommended, avoids file:// quirks)
npx serve .            # then visit the printed URL
# or
python -m http.server  # then visit http://localhost:8000
```

### Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, pick `main` / `root`.
3. Wait a minute, then open the published URL.
4. Update the `USERNAME/REPO` placeholders in `index.html` (Open Graph tags) and this README so link previews work.

## 🗂️ Project structure

```
index.html      # markup + meta tags
styles.css      # core styling
enhance.css     # styling for galleries, motion, mobile nav, easter eggs
script.js       # boss data, rendering, map, daily challenge, filters
enhance.js      # ambient/scroll motion, sound, gallery, keyboard, secrets
assets/         # boss art (WebP), maps, logo, cursor, social image
```

## 🛠️ Tech

Plain HTML, CSS and vanilla JavaScript — no frameworks, no build tools. Images are optimized to WebP for fast loading.

## 📜 Credits & legal

- **Game, characters, lore and original artwork:** © FromSoftware, Inc. and Bandai Namco Entertainment. *Elden Ring* is their trademark.
- This is a non-commercial fan project made for learning and for fellow Tarnished. All game assets remain the property of their respective owners and are **not** covered by this project's license. If you are a rights holder and want something removed, please open an issue.
- **Code** in this repository is released under the [MIT License](LICENSE).
