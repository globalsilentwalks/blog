# GlobalSilentWalks

Static travel & student-life blog. Pure HTML/CSS/JS. No build step required.

## Deploy on Cloudflare Pages + GitHub

1. Create a new GitHub repo and push the contents of this folder to the root.
2. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
3. Select your repo. Settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/`
4. Click **Save and Deploy**. Your site is live in ~30 seconds at `https://your-project.pages.dev`.
5. Add your custom domain `globalsilentwalks.com` in **Custom domains**.

## Local preview

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Structure

```
index.html              Home (your original)
blog.html               Article listing
destinations.html       All city guides
student-life.html       Student-focused articles
about.html / contact.html / privacy-policy.html / terms.html / sitemap.html / 404.html
sitemap.xml / rss.xml / robots.txt / _redirects
assets/style.css        Shared CSS (extracted from your original index)
assets/main.js          Shared JS (search, mobile nav, lazy load)
assets/favicon.svg
cities/                 paris.html · lyon.html · marseille.html · nice.html · bordeaux.html
articles/               6 SEO blog posts
categories/             france · paris · travel · student-life · lifestyle · guides
```

## AdSense

Replace each `<div class="ad-slot">…</div>` placeholder with your AdSense `<ins>` snippet once your account is approved.

## Newsletter

The form currently shows a fake confirmation. Plug in Mailchimp / ConvertKit / Brevo by replacing the `handleNewsletter` function in `assets/main.js`.

## Updating the site URL

Search-and-replace `https://globalsilentwalks.com` if you deploy under a different domain.

Built 2026-05-08.
