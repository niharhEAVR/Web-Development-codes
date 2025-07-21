## 🟢 Best Way: **Host Your Portfolio for Free Using GitHub Pages**

### 🔧 Requirements:

* Basic knowledge of Git & GitHub
* A GitHub account (free)

---

### ✅ Step-by-Step Guide to Free Hosting with GitHub Pages

#### 1. **Create a GitHub Account**

Go to [https://github.com](https://github.com) and sign up if you don't have one.

#### 2. **Prepare Your Website Files**

Create your portfolio with:

```
index.html
style.css
script.js
(images, etc.)
```

Make sure your homepage is named `index.html`.

#### 3. **Create a New GitHub Repository**

* Click **"New Repository"** on GitHub
* Name it something like `portfolio`
* Make it **public**
* Don’t initialize with README

#### 4. **Upload Your Website Files**

You have two options:

**(a) Upload via GitHub Website:**

* Click "Add file" > "Upload files"
* Upload all your project files
* Commit them

**(b) Or Push via Git CLI (Recommended for Developers):**

```bash
git init
git remote add origin https://github.com/your-username/portfolio.git
git add .
git commit -m "Initial commit"
git push -u origin master
```

#### 5. **Enable GitHub Pages**

* Go to the repository’s **Settings** → **Pages**
* Under **Source**, choose:
  `Deploy from a branch` → `main` (or `master`) → `/root`
* Click **Save**

#### ✅ Your website will be live at:

```
https://your-username.github.io/portfolio/
```

🟢 That's it! It’s now publicly hosted for free.

---

## 💡 Want a Custom Domain?

You can buy a `.com` or `.dev` domain from Namecheap or Google Domains (\~₹500–₹1,200/year), and connect it to GitHub Pages. I can guide you on that too.

---

## 🟢 Other Free Hosting Options for Portfolios (Optional)

| Platform    | Use Case                       | Free Tier | Custom Domain Support |
| ----------- | ------------------------------ | --------- | --------------------- |
| **Netlify** | Static sites (HTML/CSS/JS)     | ✅         | ✅ Yes                 |
| **Vercel**  | React/Next.js based portfolios | ✅         | ✅ Yes                 |
| **Render**  | Static or dynamic sites        | ✅         | ✅ Yes                 |

But GitHub Pages is easiest for HTML/CSS websites.

---

## 🛑 Why AWS Charges?

AWS is a **cloud infrastructure provider**. Even though they offer a **free tier**, it’s:

* **limited to 12 months**
* made for enterprise-grade services (EC2, S3, Lambda, etc.)
* not beginner-friendly for simple portfolio sites

That’s why we recommend GitHub Pages, Netlify, or Vercel for your use case.