# How to Host Your Website

Your application is built and ready for deployment! The production files are located in the `dist` folder.

Here are the two easiest ways to host it for free:

## Option 1: Netlify (Recommended - Easiest)
**Best for:** Getting a live link in 30 seconds without installing anything.

1.  Open [Netlify Drop](https://app.netlify.com/drop) in your browser.
2.  Open your project folder on your computer: `D:\kscrt-cricket application`.
3.  Locate the `dist` folder.
4.  **Drag and drop the entire `dist` folder** into the box on the Netlify Drop page.
5.  Wait a few seconds, and Netlify will give you a live URL (e.g., `https://kscrt-cricket.netlify.app`).

**Note:** If you update your code, you will need to run `npm run build` again and re-upload the new `dist` folder.

---

## Option 2: Vercel (Professional)
**Best for:** Continuous deployment (if you use GitHub).

1.  Go to [Vercel.com](https://vercel.com) and sign up/login.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository (if you pushed your code to GitHub).
    -   *Framework Preset:* Vite
    -   *Root Directory:* `./`
    -   *Build Command:* `npm run build`
    -   *Output Directory:* `dist`
4.  Click **Deploy**.

---

## Option 3: GitHub Pages (Free)
If you have this project on GitHub:

1.  Open `package.json` in your code editor.
2.  Add `"homepage": "https://<your-username>.github.io/<repo-name>"` at the top level.
3.  Install the gh-pages package:
    ```bash
    npm install gh-pages --save-dev
    ```
4.  Add these scripts to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
5.  Run:
    ```bash
    npm run deploy
    ```

## Important Verification
Before deploying, double-check that your Google Maps links and other data are correct by running:
```bash
npm run preview
```
This runs the built version of your app locally for a final check.
