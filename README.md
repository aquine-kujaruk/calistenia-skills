# G-FORCE Calisthenics App

## Setup

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Google Sheets Integration**
    - Create a new Google Sheet.
    - Go to **Extensions > Apps Script**.
    - Copy the code from `google-apps-script.js` (provided in artifacts).
    - Save and click **Deploy > New Deployment**.
    - Select type **Web App**.
    - Set **Who has access** to **Anyone**.
    - Deploy and copy the **Web App URL**.

3.  **Environment Configuration**
    - Create a `.env` file in the root directory:
      ```env
      VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
      ```
    - For Production (GitHub Pages), add this Variable to your Repository Secrets or hardcode it (less secure but client-side visible anyway). Since it's client-side, the URL is public by definition.

4.  **Run Locally**

    ```bash
    npm run dev
    ```

5.  **Build**
    ```bash
    npm run build
    ```

## Deployment to GitHub Pages

1.  Push this code to your repository.
2.  Go to **Settings > Pages**.
3.  Select **Source** as **GitHub Actions** (recommended) or deploy from `gh-pages` branch.
4.  If manual:
    ```bash
    npm run build
    git add dist -f
    git commit -m "Deploy"
    git subtree push --prefix dist origin gh-pages
    ```
