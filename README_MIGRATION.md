# Wither Networks Website

A Minecraft server website with admin panel for easy content management.

## Quick Migration Guide

To migrate this website to a new VPS:

1. Copy the entire project folder to your new VPS
2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

3. Or manually deploy:
   ```bash
   npm install
   npm run build
   npm run dev-server &  # Runs on port 3001
   npm run preview &     # Runs on port 8000
   ```

## Admin Access
- URL: http://your-server:8000/admin
- Username: admin
- Password: admin

## File Structure
- `db.json` - Contains all website content (ranks, game modes, etc.)
- `dist/` - Built frontend files
- `server/` - Backend server code
- `src/` - Frontend source code

## Migration Notes
- Copy `db.json` to preserve content
- Copy `.env` file if you have custom environment variables
- The website will run on ports 3001 (backend) and 8000 (frontend)