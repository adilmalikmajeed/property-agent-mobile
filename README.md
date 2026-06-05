# Property Analyst Pro

A zero-extension, zero-developer-mode browser tool for comparing property listings side by side.

## How it works

1. You host this on **GitHub Pages** (free)
2. A one-line bookmarklet reads the text already loaded in your browser tab
3. It opens your GitHub Pages app and passes the page content
4. The app uses AI to extract all listed properties and builds a comparison table

No scraping. No server. No extension. No developer mode needed.

---

## Setup (5 minutes)

### Step 1 — Fork or upload to GitHub

1. Go to [github.com](https://github.com) and create a new repository  
   Name it `property-analyst` (or anything you like)
2. Upload `index.html` to the repository root

### Step 2 — Enable GitHub Pages

1. In your repository, go to **Settings → Pages**
2. Under *Source*, select **Deploy from branch**
3. Choose **main** branch, **/ (root)** folder
4. Click **Save**
5. Wait ~60 seconds. Your app will be live at:  
   `https://YOUR-USERNAME.github.io/property-analyst/`

### Step 3 — Add the bookmarklet

1. Open your GitHub Pages URL in Chrome
2. The page shows a **"Analyse Properties"** button at the top
3. **Drag that button into your bookmarks bar**  
   *(If drag doesn't work: click "Copy code", then manually create a bookmark and paste the code as the URL)*

### Step 4 — Use it

1. Open Rightmove, Zoopla, OnTheMarket, or any property site
2. Navigate to a search results page (multiple listings visible)
3. Click **"Analyse Properties"** in your bookmarks bar
4. A new tab opens with your full comparison table

---

## Features

- Extracts property name, address, price, beds, type, and estimated rent
- Calculates gross yield, annual income, and 5-year ROI estimate
- Highlights best/worst values in the table
- AI investment analyst notes
- Sortable columns (yield, price, beds, ROI)
- Auto-generated agent viewing request emails per property
- Works on any real estate site — no site-specific code

---

## Notes

- The Anthropic API key is handled automatically when deployed — no key needed on your end
- All data is temporary and session-only. Nothing is stored anywhere.
- The 5-year ROI estimate assumes 15% capital appreciation + rental income (conservative estimate, not financial advice)
- If rent is not listed on the page, the tool estimates it at 0.55% of purchase price per month

---

## Troubleshooting

**Bookmarklet opens the app but no data appears**  
The page content may have been too long. Try navigating to a results page with fewer listings (10–15 max).

**"Analysis failed" error**  
Check your internet connection. The AI analysis requires an outbound connection to the Anthropic API.

**Table shows wrong property count**  
Some sites load listings dynamically via JavaScript after page load. Scroll to the bottom of the results page first to ensure all listings are loaded, then click the bookmarklet.
