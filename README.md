# Naye Pankh - Static Website

This is a lightweight static website scaffold modeled after https://nayepankh.com/. It includes a responsive hero, programs, impact carousel, testimonials, founder spotlight, media coverage, and donation section with Razorpay integration.

## Live Site

🌐 **Visit the live site:** https://6a2fbd6c8d16528b3ae17e5e--dashing-halva-29a097.netlify.app/

Deployed on Netlify from the GitHub repository `psaisharanya/NayePankh-Foundation`.

## Run Locally

From the project root:

```bash
python -m http.server 8000
# open http://localhost:8000 in your browser
```

## First-Time Setup: Download Images

Run the PowerShell script to download reference images into `assets/`:

```powershell
.\scripts\download_images.ps1
```

## Payment / Donate Feature

The `donate.html` page contains a demo Razorpay Checkout integration. To enable real payments:

1. Replace `REPLACE_WITH_RAZORPAY_KEY` in `donate.html` or `js/main.js` with your Razorpay test or live key.
2. For production, create orders server-side and verify the payment signature on your server.

## Deployment

### GitHub Pages (Automatic CI/CD)

1. Push this repository to GitHub (ensure branch is `main`).
2. The GitHub Actions workflow in `.github/workflows/deploy-gh-pages.yml` automatically deploys to GitHub Pages on push.
3. Enable GitHub Pages in your repo settings if needed.

### Netlify (Easy Manual)

1. Connect your GitHub repo to Netlify.
2. Set publish directory to `/` (root).
3. Deploy — done!

### Create ZIP for Submission

```powershell
.\scripts\create_deploy_zip.ps1
```

This creates `naye-pankh-site.zip` in the project root.

## Assignment Submission

1. Zip the project: `.\scripts\create_deploy_zip.ps1` → `naye-pankh-site.zip`
2. Include deployment link (if deployed to GitHub Pages or Netlify).
3. In your submission notes, mention:
   - Project: Naye Pankh NGO website (HTML/CSS/JS static site)
   - Features: Multi-page (home, about, contact, donate), donation demo (Razorpay), responsive design, testimonials, founder section
   - Run locally: `python -m http.server 8000`
   - Deploy: Push to GitHub or connect repo to Netlify

## Project Structure

```
├── index.html          (Home page with hero, programs, impact, donate)
├── about.html          (About the foundation)
├── contact.html        (Contact form with mailto)
├── donate.html         (Donation UI with Razorpay checkout demo)
├── gallery.html        (Gallery link placeholder)
├── css/
│   └── styles.css      (Responsive styles)
├── js/
│   └── main.js         (Counters, carousel, donation logic)
├── assets/
│   ├── logo.png        (Naye Pankh logo)
│   ├── hero.jpg        (Hero background)
│   ├── img*.jpg        (Program images)
│   └── impact*.jpg     (Impact story images)
├── scripts/
│   ├── download_images.ps1      (Download reference images)
│   └── create_deploy_zip.ps1    (Create submission ZIP)
├── .github/
│   └── workflows/
│       └── deploy-gh-pages.yml  (Auto-deploy to GitHub Pages)
└── netlify.toml        (Netlify config)
```

## Features

- **Responsive Design**: Mobile-first, works on all devices.
- **Multi-Page**: Home, About, Contact, Donate, Gallery.
- **Testimonials & Impact**: Real-world beneficiary stories.
- **Founder Section**: Prashant Shukla quote and leadership info.
- **Media Coverage**: Featured-in section (media logos).
- **Donation UI**: Preset amounts, custom amount, monthly toggle, confirmation modal.
- **Demo Razorpay Checkout**: Integrated (requires API key for production).
- **Trust & Certs**: Government registration, tax exemption badges.
- **Trust Badges**: 200K+ lives impacted, 500+ volunteers, 50+ campaigns, 10+ cities.

## Notes

- Images are downloaded from the reference site via the PowerShell script.
- To use a custom logo, replace `assets/logo.png` with your own image.
- Update copy, colors, and links as needed for your NGO.
- For production payments, implement server-side order creation and signature verification.
