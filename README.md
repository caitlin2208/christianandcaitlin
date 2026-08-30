# Our Little Archive ♡

This is the cleaned React/Vite version of your Base44 site.

## Already included
- six-digit unlock screen
- flower-parting transition after unlocking
- blurred-collage homepage with "i love you so much baba"
- relationship day/hour/minute/second counter
- original horizontal gallery and captions
- full letter
- falling flowers
- heart cursor on desktop
- original YouTube music player
- replay footer
- GitHub Pages deployment workflow

## Edit the password
Open:

`src/components/romance/PasswordGate.jsx`

Find:

```js
const SECRET = "121225";
```

## Edit the relationship start date
Open:

`src/components/romance/DaysCounter.jsx`

Find:

```js
export const START_DATE = "2025-12-12T00:00:00";
```

## Edit the homepage words
Open:

`src/components/romance/TypedHeading.jsx`

Search for:

`i love you so much baba`

## Edit photo captions
Open:

`src/components/romance/Gallery.jsx`

Each photo has:

```js
caption: "..."
```

Change only the words inside the quotation marks.

## Edit the letter
Open:

`src/components/romance/Letter.jsx`

Edit `SALUTATION` or the strings inside `PARAGRAPHS`.

## Change the music
Open:

`src/components/romance/MusicPlayer.jsx`

Find:

```js
const VIDEO_ID = "8VUomhjIE48";
```

Replace it with the video ID from another YouTube URL if desired.

## Test locally on your Mac
1. Install Node.js.
2. Open this project folder in VS Code.
3. Open **Terminal > New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints, usually `http://localhost:5173`.

## Put it on GitHub
For a beginner, GitHub Desktop is easiest.

1. Install GitHub Desktop and sign in.
2. Choose **File > Add Local Repository**.
3. Select this project folder.
4. If prompted, choose **create a repository here**.
5. Commit all files.
6. Publish/push to the new GitHub repository you created.

## Turn on GitHub Pages
This project already includes a GitHub Actions deployment file.

1. Open your repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment > Source**, choose **GitHub Actions**.
4. Open the **Actions** tab.
5. Wait for **Deploy Vite site to GitHub Pages** to finish.
6. Return to **Settings > Pages** for the live URL.

## Important
The photos currently still load from public `media.base44.com` URLs. The frontend no longer needs Base44, but for complete independence you can later download those photos and store them in your own repo.

The six-digit gate is decorative, not secure authentication. Someone technical can inspect frontend code and find the number.

Browsers can block music autoplay with sound. If autoplay is blocked, use the floating music button.
