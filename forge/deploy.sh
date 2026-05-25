# Reference deployment script for Laravel Forge (zero-downtime Next.js site)
# Paste into: Site → Deployments → Deploy Script
# Replace DAEMON_ID with your daemon ID from Server → Daemons (e.g. 845353)

$CREATE_RELEASE()

cd $FORGE_RELEASE_DIRECTORY

# Use Node 20+ (install via server recipe or nvm if needed)
if [ -f .nvmrc ] && command -v nvm >/dev/null 2>&1; then
  nvm install
  nvm use
fi

npm ci
npm run build

$ACTIVATE_RELEASE()

# Restart the Next.js process after each deploy
sudo -S supervisorctl restart daemon-DAEMON_ID:*
