# Shyam Sundar S — Portfolio

Static site (HTML, CSS, a little JavaScript). No build step, no backend, no API keys.

```
index.html                 home: hero, projects, about, skills, contact
work/*.html                one case study per project
assets/css/style.css       all styling (colour + type tokens at the top)
assets/js/projects.js      project list — edit this to add/reorder projects
assets/js/main.js          mobile menu + renders project rows
assets/img/*.svg           diagrams drawn from each repo's real code
```

## 1. Before you publish — fill every yellow highlight

Anything highlighted yellow on the site is a placeholder (class `todo`). Find them all:

```bash
grep -rn 'class="todo"' --include=*.html .
```

The site is ready to submit only when that command prints nothing.

- **Email:** replace the placeholder with `<a href="mailto:you@example.com">you@example.com</a>`
- **LinkedIn:** `<a href="https://www.linkedin.com/in/your-handle/" target="_blank" rel="noopener">linkedin.com/in/your-handle</a>`
- **Resume:** put `resume.pdf` in the project root and link `<a href="resume.pdf">Download PDF</a>`
- **Education / experience:** copy exactly from your resume. Delete the internship item if you have none.

## 2. Run locally

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

(Opening `index.html` by double-clicking also works.)

## 3. Publish on GitHub Pages (free, recommended)

1. On GitHub, create a new **public** repository named exactly `Shyam27-glitch.github.io`.
2. Upload the contents of this folder (not the folder itself) so `index.html` is at the repo root:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio v1"
   git branch -M main
   git remote add origin https://github.com/Shyam27-glitch/Shyam27-glitch.github.io.git
   git push -u origin main
   ```
3. Repository → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
4. Wait 1–3 minutes. Your URL is **https://shyam27-glitch.github.io/**

### Alternative: Vercel
1. Push the folder to any GitHub repo (step 2 above, any repo name).
2. vercel.com → sign in with GitHub → **Add New → Project** → import the repo.
3. Framework preset: **Other**. Leave build command empty. Deploy.
4. URL looks like `https://<repo-name>.vercel.app`.

## 4. Verify public access (do this before submitting the Google Form)

- [ ] Open the URL in a **private/incognito** window — it loads without being signed in.
- [ ] Open it on your **phone** on mobile data (not Wi-Fi).
- [ ] Menu button opens and closes on mobile; every nav link jumps to its section.
- [ ] All three "Read the case study" links open, and "Back to all projects" returns.
- [ ] Every "Source on GitHub" link opens a **public** repo.
- [ ] Email, LinkedIn and resume links work.
- [ ] `grep` from step 1 returns nothing — no yellow highlights left.
- [ ] Paste the URL into the Google Form exactly, including `https://`.

## 5. Adding a new project later

1. Add a cover image or diagram to `assets/img/`.
2. Copy `work/job-scheduler.html` to `work/<new-project>.html` and rewrite its sections.
3. Add an entry to `assets/js/projects.js` (a template is commented at the bottom). Order in the array = order on the page; put design work first.
4. Add any newly *demonstrated* skills to the Skills section with "Shown in: …".
5. Commit and push — GitHub Pages redeploys automatically.

Rule of thumb: only list a project once real work exists, and label work in progress as `status: "wip"`.
