# Deploy WOW Arcade on Laravel Forge (Next.js)

This app is a **Next.js 16** SSR site. Forge runs `npm run build` on deploy and keeps `npm run start` running as a **Daemon** behind Nginx.

**Repository:** `JanduGurkamal/wow-arcade`  
**Requires:** Node.js **20+**, Nginx, no PHP.

---

## 1. Server

1. Create or use an existing Forge **Web/App** server (Nginx installed).
2. Ensure **Node.js 20+** is available:
   - Forge may install Node on the server automatically for JS sites, or
   - SSH in and run: `node -v` (must be ≥ 20).
   - If older, install Node 20 via a [Forge Recipe](https://forge.laravel.com/docs/recipes) or `nvm install 20` (this repo includes `.nvmrc`).

---

## 2. Create the site in Forge

1. **Sites → New Site**
2. **Root domain:** your domain (e.g. `wowarcade.com`) or Forge `*.on-forge.com` subdomain for testing.
3. **Project type:** `Static HTML / Nuxt.js / Next.js`
4. **Web directory:** `/` (default for Next.js on Forge)
5. **Repository:** `JanduGurkamal/wow-arcade`
6. **Branch:** `master`
7. **Advanced:**
   - Enable **Push to deploy** (optional)
   - **Zero-downtime deployments** — enabled by default for new Next.js sites (recommended)

### Nginx template (SSR)

If Forge does not auto-proxy to Node:

1. **Server → Nginx Templates → New**
2. Name: `Next.js App`
3. Paste contents from [`forge/nginx-nextjs.template`](./forge/nginx-nextjs.template)
4. Create the site using that template (or apply the same `proxy_pass http://127.0.0.1:3000` in the site Nginx config).

---

## 3. Environment variables

**Site → Environment** (or `.env` on server — shared automatically with zero-downtime):

```env
NODE_ENV=production
PORT=3000
```

No database or API keys are required for the demo storefront.

---

## 4. Daemon (required — fixes 502)

Until the Node process runs, Nginx returns **502 Bad Gateway**.

1. **Server → Daemons → New Daemon**
2. **Command:** `npm run start`
3. **Directory (zero-downtime):**  
   `/home/forge/YOUR-DOMAIN.com/current`  
   Replace `YOUR-DOMAIN.com` with your site folder name.
4. **Directory (standard deploy):**  
   `/home/forge/YOUR-DOMAIN.com`
5. **User:** `forge`
6. Start the daemon and confirm status is **active**.

Note the daemon ID (e.g. `845353`) for the deploy script restart line.

---

## 5. Deployment script

**Site → Deployments → Deploy Script**

Forge’s zero-downtime Next.js sites usually include `$CREATE_RELEASE()`, `cd $FORGE_RELEASE_DIRECTORY`, and `$ACTIVATE_RELEASE()`. Use [`forge/deploy.sh`](./forge/deploy.sh) as a reference and **replace `DAEMON_ID`** with your daemon ID:

```bash
$CREATE_RELEASE()

cd $FORGE_RELEASE_DIRECTORY

npm ci
npm run build

$ACTIVATE_RELEASE()

sudo -S supervisorctl restart daemon-YOUR_DAEMON_ID:*
```

For a **non** zero-downtime site (legacy):

```bash
cd /home/forge/YOUR-DOMAIN.com
git pull origin $FORGE_SITE_BRANCH
npm ci
npm run build
sudo -S supervisorctl restart daemon-YOUR_DAEMON_ID:*
```

---

## 6. SSL & DNS

1. Point your domain **A record** to the server IP (`@` and `www` if using apex + www).
2. **Site → Domains / SSL → Obtain certificate** (Let’s Encrypt).

---

## 7. Deploy

1. **Deployments → Deploy Now**
2. Wait for `npm run build` to finish (typically 1–3 minutes).
3. Visit your domain.

After each `git push` to `master`, Forge can auto-deploy if **Push to deploy** is enabled.

---

## Troubleshooting

| Issue | Fix |
|--------|-----|
| **502 Bad Gateway** | Daemon not running or wrong directory (`/current` for zero-downtime). |
| **Build fails** | Node &lt; 20 — upgrade Node; check deploy log. |
| **ENOSPC / npm errors** | Disk full on server — free space, clear `~/.npm`. |
| **Old code after deploy** | Restart daemon; confirm `$ACTIVATE_RELEASE()` is in the script. |
| **Deploy &gt; 10 min** | Forge deployment timeout — optimize build or use larger server. |

---

## Local production test

```bash
npm ci
npm run build
npm run start
# http://localhost:3000
```
